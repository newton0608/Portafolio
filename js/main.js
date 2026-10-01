(() => {
  "use strict";

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileViewport = window.matchMedia("(max-width: 800px)");
  const menuToggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("[data-nav-section]")];

  const setActiveSection = (id) => {
    navLinks.forEach((link) => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  if (menuToggle && menu) {
    const navContainer = menuToggle.closest(".nav-container");
    const setMenuOpen = (open, restoreFocus = false) => {
      menu.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
      if (restoreFocus) menuToggle.focus();
    };

    navContainer.classList.add("nav-is-enhanced");
    menuToggle.addEventListener("click", () => setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true"));

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const wasOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(false);
        setActiveSection(link.hash.slice(1));
        // Move keyboard focus out of the collapsing mobile menu.
        if (wasOpen) {
          const heading = document.getElementById(link.hash.slice(1))?.querySelector("h1, h2");
          heading?.setAttribute("tabindex", "-1");
          requestAnimationFrame(() => heading?.focus({ preventScroll: true }));
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false, true);
    });
    document.addEventListener("pointerdown", (event) => {
      if (!navContainer.contains(event.target)) setMenuOpen(false);
    });
    navContainer.addEventListener("focusout", (event) => {
      if (!navContainer.contains(event.relatedTarget)) setMenuOpen(false);
    });
    mobileViewport.addEventListener("change", () => setMenuOpen(false));
  }

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) setActiveSection(target.id);
      });
    }, { rootMargin: "-18% 0px -65% 0px", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    // A short final section may never reach the observer band before scrolling ends.
    const footer = document.querySelector(".site-footer");
    if (footer) {
      const footerObserver = new IntersectionObserver((entries) => {
        if (entries.some(({ isIntersecting }) => isIntersecting)) setActiveSection("contacto");
      });
      footerObserver.observe(footer);
    }
  }

  const initialSection = window.location.hash.slice(1);
  if (sections.some((section) => section.id === initialSection)) setActiveSection(initialSection);

  const revealElements = [...document.querySelectorAll(".reveal")];
  let revealObserver;
  const revealAll = () => {
    revealObserver?.disconnect();
    revealElements.forEach((element) => element.classList.remove("reveal-pending"));
  };

  if ("IntersectionObserver" in window && !motionPreference.matches) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.remove("reveal-pending");
        revealObserver.unobserve(target);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px 36px 0px" });

    revealElements.forEach((element) => {
      // Already-visible content never waits for an observer callback.
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("reveal-pending");
      revealObserver.observe(element);
    });
  }

  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  document.querySelectorAll("[data-spotlight]").forEach((card) => {
    let animationFrame;
    card.addEventListener("pointermove", (event) => {
      if (motionPreference.matches || !precisePointer.matches) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
        card.classList.add("has-spotlight");
      });
    });
    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(animationFrame);
      card.classList.remove("has-spotlight");
    });
  });

  motionPreference.addEventListener("change", () => {
    if (!motionPreference.matches) return;
    revealAll();
    document.querySelectorAll(".has-spotlight").forEach((card) => card.classList.remove("has-spotlight"));
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const copyButton = document.querySelector("[data-copy-email]");
  const copyStatus = document.querySelector("[data-copy-status]");
  if (copyButton && copyStatus && navigator.clipboard?.writeText) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
        copyStatus.textContent = "Correo copiado.";
      } catch {
        copyStatus.textContent = "Puedes seleccionar el correo y copiarlo directamente.";
      }
    });
  }
})();
