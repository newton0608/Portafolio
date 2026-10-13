# Fuentes y alcance de los proyectos

Revisión actualizada el 13 de octubre de 2026. Los datos de educación, intereses y experiencia complementaria proceden del encargo. El correo y LinkedIn se conservaron del portafolio original.

## ResellManager

[Repositorio público](https://github.com/newton0608/ResellManager).

Fuentes revisadas: `README.md`, `CHANGELOG.md` de `main` (blob `bea18bc76485bc3b8758006c62002c0033200626`), arquitectura y catálogo público de Virtuosa Store.

- V1.4 está integrada en main/develop y el changelog confirma el despliegue en producción del 12 de octubre de 2026; sigue sin tag/Release propio. La tarjeta describe la versión funcional, no inventa un tag.
- C#, .NET 10, Blazor, EF Core, SQLite e Identity. La migración a .NET 10 está documentada desde v1.2.0.
- Compras, inventario, pedidos internos, ventas/pagos, scanner y búsqueda asistida están implementados.
- Catálogo público: galerías, zoom, filtros por categorías/subcategorías y marcas, carga incremental y consulta opcional por WhatsApp. No se anuncia checkout ni creación de pedidos web.
- Se enlaza al catálogo público `https://virtuosagt.com/`; la administración sigue privada.
- `resellmanager-catalogo.webp` y `resellmanager-detalle.webp`: capturas reales del 13 de octubre, 1348 × 926 px, convertidas a WebP sin recortar ni alterar la interfaz. La primera muestra Salud y bienestar; la segunda el producto Centrum Silver Men 50+ (`https://virtuosagt.com/producto/15`). Los importes Q0.00 son los que mostraba el catálogo en ese momento.
- La revisión visual de las capturas confirma que muestran solo datos públicos de productos, sin clientes, credenciales o información administrativa.

## Iglesia de Cristo Palabra Viva y Eficaz

[Repositorio público](https://github.com/newton0608/Pagina-Iglesia) · [Sitio publicado](https://www.palabravivayeficaz.org/).

Fuentes: `README.md`, `package.json`, `scripts/site.js` y sitio publicado, abierto correctamente con HTTP 200. El README documenta la integración de discipulado con YouTube Data API, el cálculo de próxima reunión y GitHub Pages con dominio propio.

- HTML5, Tailwind CSS y JavaScript vanilla corresponden a este proyecto, no al portafolio.
- La captura WebP incluida muestra el sitio real y se guarda en este repositorio.
- Mantenimiento y despliegue se presentan también como experiencia complementaria según el encargo.

## TreeRoteGT

[Repositorio privado](https://github.com/newton0608/TreeRoteGT), consultado con la conexión autorizada. No se publica su código en este portafolio.

Fuentes: `Estructuras/ABB.cs`, `Estructuras/AVL.cs`, `Negocio/Gestores/`, `Pruebas/Program.cs`, proyecto WPF y ViewModels. Árboles genéricos, rotaciones AVL, búsqueda, recorridos y gestores de departamentos/municipios están implementados. La revisión del commit `8678804` y de `Presentación/Controls/TreeVisualizerControl.xaml.cs` confirma un visualizador de nodos con zoom y desplazamiento. `ABBViewModel.cs` sigue siendo una base vacía; no se anuncian una interfaz integrada completa ni algoritmos de rutas implementados.

- C#, .NET 8, WPF y arquitectura por capas.
- Estado visible: en desarrollo. Se reconoce el visualizador implementado y se distingue de la integración de interfaz, rutas y grafos pendientes.
- El enlace de código está marcado como privado y requiere acceso. Se ofrece contacto por correo como alternativa accesible al visitante.
- El diagrama es conceptual y no simula una captura de una interfaz terminada.

## Ferre502SA

[Repositorio público 502FerreSA](https://github.com/newton0608/502FerreSA).

Fuentes: `README.md`, solución y estructura `CapaDatos`, `CapaLogica`, `CapaPresentacion`. SQL Server está documentado; el código incluye formularios de inventario, ventas, clientes y envíos. Se presenta como sistema de escritorio con C#/WinForms/SQL Server, sin atribuir una demo web.

## Currency Converter

[Repositorio público](https://github.com/newton0608/currency-converter).

Fuente: `README.md` y estructura `main.py`/`gui.py`. Documenta Python, API de tasas de cambio, consola y Tkinter. Se presenta como otro repositorio relevante sin añadir funcionalidades ajenas a su documentación.

## DeployManager, Atril y StreamConsole

Se revisaron los README actuales de los tres repositorios privados con la conexión autorizada. El portafolio describe su propósito y stack sin publicar código, configuraciones ni enlaces con sesiones privadas.

| Proyecto | Estado presentado | Alcance verificado |
| --- | --- | --- |
| DeployManager | Motor implementado | Python/FastAPI/SQLite, CLI y API local, Git/Docker, historial, health checks y rollback. El README de main no incluye un panel web. |
| Atril | En validación | Electron/React/TypeScript, ventanas de Control y Display, preview, Social Stream, Streamlabs y tiempo de OBS WebSocket. El README requiere verificación física en la PC de producción. |
| StreamConsole | Demo funcional; validación física pendiente | .NET 8, API REST/SSE, macros y proveedores OBS/ATEM/Holyrics; control 320 × 568. El README distingue pruebas con mocks de equipos reales. |

Ferre502SA se marca como proyecto académico; Currency Converter como implementado, sin atribuir despliegue o mantenimiento continuo no documentado.
