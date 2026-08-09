# For My Online CV

Currículum web personal de **Pedro Barrante Vázquez** — Técnico Informático (Sevilla, España).

Adaptación deliberada del **sistema de diseño del sitio real [manixh.dev](https://manixh.dev)** (`ig-imanish/manixh`) al contenido e identidad de Pedro Barrante Vázquez: dark-only, minimal, técnico y compacto. HTML + CSS + JavaScript puros, sin frameworks ni build system, desplegable en GitHub Pages tal cual.

> No se copia contenido, identidad ni código de manixh: se reproduce su lenguaje visual (layout, proporciones, componentes, interacciones) con implementación propia.

## Estructura

```
├── index.html            # Home: hero, skills (marquee), experiencia, proyecto destacado, contacto
├── about.html            # About: trayectoria SMR→DAM, formación, objetivos, áreas, contexto
├── lab.html              # Lab: experimentos y proyectos en desarrollo (estado terminado/en curso)
├── css/
│   └── styles.css        # Design system (tokens, componentes, animaciones)
├── js/
│   ├── data.js           # Fuente única de contenido (perfil, skills, experiencia, about, lab, proyectos…)
│   └── scripts.js        # Render de secciones, marquee, reveal, reloj, ClickSpark
├── assets/               # favicon, foto de perfil, sonidos
└── PortfolioENG/         # Versión en inglés con la misma estructura y diseño
    ├── index.html / about.html / lab.html
    ├── css/styles.css
    ├── js/data.js / scripts.js
    └── assets/           # favicon, foto de perfil, sonidos
```

> Cada página tiene una función distinta: **Home** es el escaparate del perfil, **About** el perfil profesional en profundidad (sin repetir la experiencia de Home) y **Lab** el espacio técnico de experimentos. El contacto está integrado en Home, por eso la navbar es `Inicio · Sobre mí · Lab · GitHub`.

## Cómo editar el contenido

Todo el contenido se edita en `js/data.js` (y `PortfolioENG/js/data.js` para la versión inglesa):

- `profile` → nombre, rol, bio, email, teléfono, enlaces
- `skills` → las tres categorías + `skillIcons` (mapa de iconos por habilidad)
- `experience` / `education` → entradas de la timeline / formación
- `about` → trayectoria (`journey`), `goals`, `areas` y `context` de la página About
- `lab` → experimentos de la página Lab (`items` con `status: 'done' | 'wip'`, `category`, tech, enlaces)
- `projects` → proyectos destacados de Home
- `languages`, `footer`, `labels` → textos de la interfaz

Las secciones de las páginas se renderizan desde estos datos; no hace falta tocar el HTML para cambiar contenido.

> **Nota sobre el hero/perfil:** el texto del hero (nombre, rol, bio, ubicación, estado) se mantiene estático en el HTML de cada página por SEO y accesibilidad (funciona sin JavaScript). Los campos correspondientes de `profile` en `data.js` son la referencia documentada; lo renderizado desde datos son email, teléfono, redes sociales, marquee, timeline, proyectos y contacto.

## SEO

Cada página incluye: `title`, meta description, keywords, author, robots, canonical, Open Graph (`og:site_name`, `og:image`…), Twitter Cards (`summary_large_image`) y JSON-LD `Person` en las portadas ES/EN (name, jobTitle, url, email, sameAs, address, knowsAbout) — todo con datos reales de Pedro Barrante Vázquez.

## Sonido de clic

Al hacer clic en elementos interactivos (enlaces, botones, contacto, proyectos…) se reproduce `assets/sounds/click.mp3`, siguiendo el comportamiento del sonido de clic de manixh.dev: instancia de audio única, volumen moderado y reinicio en clics rápidos (sin solapamiento).

- **Archivos:** `assets/sounds/click.mp3` (ES) y `PortfolioENG/assets/sounds/click.mp3` (EN).
- **Configuración:** constante `CLICK_SOUND` en `js/scripts.js` → ajusta `volume` (0–1), `src` o `selector` (qué elementos suenan).
- **Comportamiento:** suena en **cada clic** del usuario, en cualquier parte de la página — nunca al cargar ni al pasar el ratón —, respeta el autoplay de los navegadores y `prefers-reduced-motion`.

Además, el clic dispara un **ClickSpark** (chispas radiales + anillo de expansión en el punto del clic) que también respeta `prefers-reduced-motion`.

## Fuentes

- Figtree (UI) y JetBrains Mono (elementos técnicos), vía Google Fonts.
- Iconos SVG inline (sin dependencias externas).

## Despliegue

Compatible con GitHub Pages sin pasos extra: publicar la rama `main` es suficiente.
