# Verificación del portafolio v2

Validación local del 1 de octubre de 2026, con Microsoft Edge/Chromium y Playwright. No se fusionó `feature/portfolio-v2` con `main` ni se cambió la configuración de GitHub Pages.

## Responsive y revisión visual

Se revisaron capturas de la portada, proyectos, experiencia, tecnologías, sobre mí/educación y contacto. Tamaños comprobados:

| Ancho | Alto de viewport |
| --- | --- |
| 1440 px | 1000 px |
| 1280 px | 900 px |
| 1024 px | 900 px |
| 820 px | 1180 px |
| 768 px | 1024 px |
| 600 px | 1000 px |
| 390 px | 844 px |
| 375 px | 812 px |
| 320 px | 740 px |

- Sin desbordamiento horizontal en los nueve tamaños.
- Imágenes y tipografía cargadas correctamente, sin solicitudes externas para renderizar el sitio.
- Ningún elemento quedó oculto después de recorrer la página y completar sus animaciones de entrada.
- Captura real local del sitio de la iglesia. Las ilustraciones de ResellManager y TreeRoteGT están identificadas como conceptuales.

## Accesibilidad e interacciones

- Axe-core 4.10.3: cero infracciones automáticas en los grupos WCAG 2 A/AA y WCAG 2.1 A/AA a 1440, 390 y 320 px. Las comprobaciones inconclusas de contraste por fondos con gradientes se complementaron con cálculo de la paleta y revisión visual. Esto es una revisión básica, no una certificación completa de accesibilidad.
- Los diez pares de colores comprobados superan 4.5:1; el menor es 4.57:1 para texto secundario tenue sobre la zona más clara del fondo de contacto. El botón principal tiene 5.56:1 y su estado hover 4.73:1.
- Menú operable con Enter, Tab y Escape. Escape devuelve el foco al botón; seleccionar una sección cierra el menú y mueve el foco al encabezado del contenido.
- Cierre del menú al hacer clic fuera, al salir con el teclado y al cambiar a escritorio.
- Los seis enlaces del menú actualizan `aria-current` al recorrer las secciones, incluido Contacto al llegar al final.
- El enlace «Saltar al contenido» es la primera parada de teclado y enfoca `main`.
- `prefers-reduced-motion` elimina desplazamiento suave, transiciones y contenido oculto por animaciones.
- Sin JavaScript, el menú móvil permanece expandido y todos los contenidos y enlaces siguen disponibles.
- Copiar correo escribe el valor correcto y muestra confirmación en una región de estado accesible.
- Año del footer comprobado contra la fecha del navegador.

## Estructura y recursos

- Un `main`, un `h1`, idioma español y jerarquía de encabezados sin saltos.
- Todos los enlaces de sección apuntan a identificadores existentes.
- Todos los enlaces que abren una pestaña usan `noopener noreferrer`.
- Imágenes con texto alternativo, dimensiones y carga diferida en proyectos.
- JavaScript validado con `node --check`; sin excepciones de navegador ni solicitudes locales fallidas.
- Metadatos title/description, canonical, Open Graph y Twitter Card; portada PNG local de 1200 × 630 px.
- La vista previa usa `/Portafolio/` para comprobar las rutas de un sitio de proyecto de GitHub Pages.

## Enlaces externos

Comprobación HTTP sin iniciar sesión:

- GitHub Pages actual, perfil GitHub, repositorios públicos y sitio de la iglesia: HTTP 200.
- TreeRoteGT: existe y se verificó con la conexión autenticada, pero es privado. GitHub devuelve 404 sin permisos; la tarjeta indica explícitamente que requiere acceso y ofrece contacto por correo.
- LinkedIn: devuelve 999 a la comprobación automática. Se mantuvo el mismo perfil definido en el portafolio original, con el carácter acentuado codificado en la URL. No se afirma haber validado su página mediante una sesión de usuario.

## Privacidad

Se compararon los archivos públicos actuales con el HTML original de `origin/main`: dirección residencial, cuatro coincidencias de teléfono y tres nombres de referencias. Cero coincidencias restantes. También se revisó visualmente que la captura de la iglesia muestra su portada y no datos de contacto privados.

El historial original se conserva. La comprobación se refiere a los archivos de la nueva versión; la versión publicada desde `main` se mantiene hasta una futura integración autorizada.

## Pendientes de contenido

Captura real de TreeRoteGT y CV revisado. Las capturas reales de ResellManager y el enlace al catálogo público se añadieron el 13 de octubre de 2026. Los puntos de reemplazo y el alcance verificado están documentados en `README.md` y `docs/PROJECTS.md`.

## Actualización del 13 de octubre de 2026

Se conserva arriba la revisión histórica del 1 de octubre; sus pruebas de navegador y axe no se presentan como una nueva ejecución.

- Nombre como h1 de la portada y subtítulo profesional; estilos adaptados a los breakpoints existentes.
- Capturas del catálogo y detalle público de ResellManager inspeccionadas visualmente y optimizadas a WebP; ambas conservan 1348 × 926 px, dimensiones explícitas, alt descriptivo, lazy loading y enlaces de ampliación disponibles sin JavaScript.
- Estados y stack contrastados con la documentación actual de los proyectos; se distingue producción, implementación y validación física.
- Comprobaciones estáticas: un h1/main, IDs únicos, destinos internos, recursos locales, símbolos SVG, dimensiones de imágenes, enlaces externos con noopener/noreferrer, sintaxis JavaScript y `git diff --check`. Los nuevos estilos reutilizan los breakpoints de 800 y 600 px; no se afirma haber comprobado su renderizado responsive en esta actualización.
- Límite de verificación: no se repitió QA visual/responsive ni axe del portafolio en navegador. Este entorno no dispone de la habilidad control-browser requerida por la vista previa gestionada. No se arranca un servidor alternativo ni se modifica el despliegue.
- El trabajo se mantiene en `feature/portfolio-v2`; no se fusiona con main ni se cambia Pages.
