# Isaac Aifan — Portafolio v2

Portafolio estático con HTML5, CSS3 y JavaScript vanilla. Compatible con GitHub Pages, sin framework, dependencias de ejecución ni proceso de compilación.

## Vista previa local

Con Node.js instalado:

```sh
node scripts/serve.mjs
```

Abrir <http://127.0.0.1:4317/Portafolio/>. El servidor escucha únicamente en la máquina local. También se puede usar cualquier servidor de archivos estáticos.

## Estructura

```text
index.html                Contenido, navegación y metadatos
css/styles.css            Variables, componentes y responsive
js/main.js                Menú, observadores, año y copiar correo
assets/fonts/             Manrope variable y licencia OFL
assets/icons/             Favicon e iconos SVG locales
assets/images/            Ilustraciones, captura y Open Graph
docs/PROJECTS.md          Fuentes y alcance de los proyectos
docs/QA.md                Validación de la implementación
scripts/serve.mjs          Vista previa local sin dependencias
```

Las rutas de los recursos son relativas para funcionar en un sitio de proyecto como `/Portafolio/`. La fuente, los iconos y las imágenes se sirven desde este repositorio; no hay solicitudes a terceros para renderizar el portafolio.

## Editar contenidos

- Proyectos, experiencia, educación y contacto: `index.html`.
- Paleta, tipografía y espaciado: variables al principio de `css/styles.css`.
- Cada proyecto usa `.project-card`, `.feature-list` y `.tech-tags`. Se pueden añadir características o tarjetas reutilizando esas clases.
- Mantener el mismo identificador en cada sección y su enlace del menú.
- Las animaciones respetan `prefers-reduced-motion`. Sin JavaScript, contenido y enlaces siguen visibles; el menú se muestra expandido.
- Tailwind aparece únicamente como tecnología del proyecto de la iglesia. No se utiliza para construir este portafolio.

## Pendientes de contenido

1. **ResellManager:** sustituir `assets/images/resellmanager-preview.svg` por una captura real sin datos de clientes; actualizar `src`, dimensiones, `alt` y leyenda. La ilustración actual está identificada como vista conceptual. Añadir una demo solo si existe un entorno público: la producción requiere autenticación.
2. **TreeRoteGT:** sustituir `assets/images/treerotegt-preview.svg` cuando haya una captura de la interfaz. Actualmente el proyecto es privado; su enlace requiere acceso. La interfaz, los grafos y las rutas siguen en desarrollo y se presentan de esa forma.
3. **CV:** al disponer de un PDF revisado, guardarlo como `assets/cv/Isaac-Aifan-CV.pdf` y añadir un enlace con `download` en `.hero-actions`. El punto de inserción está comentado; no hay un botón que apunte a un archivo inexistente.
4. Si cambia el dominio del portafolio, actualizar `canonical`, `og:url`, `og:image` y `twitter:image` en `index.html`, además de `robots.txt` y `sitemap.xml`.

La imagen Open Graph es `assets/images/og-cover.png`; su fuente editable es `og-cover.svg`. La captura del sitio de la iglesia se guardó localmente el 1 de octubre de 2026.

## GitHub Pages

La URL de proyecto configurada es <https://newton0608.github.io/Portafolio/>. La nueva interfaz se desarrolla en `feature/portfolio-v2`. Subir esa rama no cambia el sitio publicado desde `main`. Este trabajo no fusiona ramas ni cambia la configuración de Pages.

El sitio público contiene solo contacto profesional: correo, GitHub y LinkedIn. No reintroducir dirección residencial, teléfonos de referencias ni referencias personales al añadir contenido, imágenes o un CV.

## Recursos

Manrope se distribuye con la licencia SIL Open Font License incluida en `assets/fonts/OFL.txt`. Los iconos e ilustraciones de esta versión son SVG locales. No se utiliza una biblioteca de iconos ni imágenes enlazadas desde servicios externos.
