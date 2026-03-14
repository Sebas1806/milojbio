# Biografía - Milo J

Sitio web tributo y biográfico dedicado a **Milo J** (Camilo Joaquín Villarruel), el fenómeno de la escena urbana argentina. Esta landing page (página de aterrizaje) de una sola página (Single Page Application - SPA style) incluye secciones sobre su vida, su evolución musical, los logros más destacados de su carrera, una galería fotográfica y un formulario de contacto.

## 🚀 Características principales

- **Hero Section**: Introducción impactante con imagen de fondo y título principal.
- **Biografía y Línea de Tiempo**: Relato sobre la vida del artista y los hitos más importantes de su carrera desde 2006 hasta la actualidad.
- **Logros Destacados**: Sección de tarjetas (cards) resaltando sus nominaciones (Grammy) y éxitos en plataformas como Spotify.
- **Galería Fotográfica**: Collage visual con fotos de conciertos, estudio y colaboraciones.
- **Contacto / Booking**: Formulario de contacto funcional para eventos o consultas.
- **Componentes modulares**: Uso de scripts para cargar dinámicamente el encabezado (`header`) y pie de página (`footer`) desde archivos separados.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica del contenido.
- **CSS3 / Bootstrap 5.2.3**: Sistema de grillas, diseño responsivo y componentes de UI preconstruidos.
- **Google Fonts**: Uso de familias tipográficas *Montserrat* y *Oswald*.
- **Vanilla JavaScript**: Lógica básica de la página, manejo del DOM estático y carga de componentes (`js/main.js`).

## 📁 Estructura del Proyecto

```text
rubrica desarrollo/
│
├── components/          # Fragmentos de HTML reutilizables (ej. header.html, footer.html)
├── images/              # Fotografías e imágenes de la biografía y la galería
├── js/                  # Scripts de Javascript (main.js)
├── logos/               # Logotipos e íconos utilizados en la web
├── styles/              # Hojas de estilo personalizadas (styles.css)
└── index.html           # Archivo HTML principal
```

## ⚙️ Cómo ejecutar el proyecto

Para visualizar este proyecto localmente:

1. Clona o descarga el repositorio en tu máquina local.
2. Abre la carpeta del proyecto en tu editor de código favorito (ej. VS Code).
3. Para asegurar que los componentes del `header` y `footer` se carguen correctamente de forma dinámica usando JavaScript, te recomendamos usar un servidor local (como la extensión **Live Server** de VS Code) en lugar de abrir el archivo `index.html` directamente en el navegador haciendo doble clic.
4. Una vez levantado el servidor local, la página estará disponible en `http://127.0.0.1:5500/` (o el puerto que te asigne la herramienta).

## 🎨 Diseño y UI

El proyecto utiliza un esquema de colores oscuros (`bg-darker`, `capa-oscura`), dándole un aspecto moderno y urbano, acorde al estilo del artista. Las animaciones sutiles y el manejo de transparencias y sombras (`shadow-lg`, `bg-transparent`) aportan profundidad y elegancia a la interfaz.

## Autores

- [Sebastian](https://github.com/Sebas1806)