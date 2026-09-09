# 📦 Documentación del Portafolio — Componentes

Este proyecto es una plantilla de portafolio construida con **React + TypeScript + Tailwind CSS** y Vite como bundler.
Toda la información personalizable está centralizada en un solo archivo de datos para que puedas llenar tu info sin tocar los componentes.

---

## 🗂️ Estructura de archivos

```
portfolio/
├── src/
│   ├── data/
│   │   └── portfolio.ts        ← ✏️  EDITA AQUÍ tu información personal
│   ├── components/
│   │   ├── Navbar.tsx           ← Barra de navegación superior
│   │   ├── Hero.tsx             ← Sección de presentación principal
│   │   ├── ClientStrip.tsx      ← Franja de logos/clientes
│   │   ├── Portfolio.tsx        ← Grid de proyectos
│   │   ├── ServicesContact.tsx  ← Servicios + estadísticas + contacto rápido
│   │   ├── BlogTestimonial.tsx  ← Blog + testimonial de cliente
│   │   └── Footer.tsx           ← Footer con formulario de contacto
│   ├── App.tsx                  ← Composición de todos los componentes
│   ├── main.tsx                 ← Punto de entrada de React
│   └── index.css                ← Estilos globales + variables CSS
```

---

## ✏️ Cómo personalizar tu info

**Solo necesitas editar `src/data/portfolio.ts`.**

El archivo exporta un objeto `siteData` con todas las secciones. Cambia los textos, URLs, números y rutas de imágenes ahí y cada componente los reflejará automáticamente.

| Clave en `siteData`  | Qué controla                                        |
|----------------------|-----------------------------------------------------|
| `name`               | Tu nombre en el logo del navbar                     |
| `nav`                | Links del menú de navegación                        |
| `hero`               | Nombre, rol, descripción, foto, redes sociales      |
| `clients`            | Nombres en la franja de clientes/empresas           |
| `works`              | Proyectos del grid (título, tags, enlace)           |
| `contactInfo`        | Encabezado y email de la sección de contacto rápido |
| `quote` / `quoteDesc`| Frase filosófica y su descripción                   |
| `stats`              | Números (años de experiencia, clientes, etc.)       |
| `services`           | Tarjetas de servicios (nombre, cantidad, destacada) |
| `testimonial`        | Cita, nombre y cargo del cliente                    |
| `posts`              | Entradas del blog (fecha, título, enlace)           |
| `footer`             | Textos del CTA y formulario del footer              |

### Agregar tu foto

En `siteData.hero.photo` pon la ruta a tu imagen, por ejemplo:

```ts
photo: "/mi-foto.jpg",   // coloca el archivo en /public/mi-foto.jpg
```

Si el campo está vacío (`""`), se muestra un placeholder con texto guía.

---

## 🧩 Descripción de cada componente

---

### `Navbar.tsx`

**Propósito:** Barra de navegación fija en la parte superior de la página.

- Se mantiene visible al hacer scroll (`sticky top-0`).
- Tiene efecto **glassmorphism** (`backdrop-blur` + fondo semi-transparente).
- Muestra: logo con marca circular dorada, links de sección y botón CTA "Contáctame".
- En móvil los links y el CTA se ocultan (responsive).

**Lee de `siteData`:** `name`, `nav`.

---

### `Hero.tsx`

**Propósito:** Primera sección visible — la presentación principal de la persona.

- Grid de **dos columnas**: texto a la izquierda, foto a la derecha.
- La palabra destacada en el rol se subraya en blanco usando `roleHighlight`.
- Si no hay foto configurada, muestra un placeholder con ícono.
- Incluye íconos de redes sociales (Dribbble, Instagram, LinkedIn) con hover dorado.
- En pantallas pequeñas el grid pasa a una columna.

**Lee de `siteData`:** `hero`.

---

### `ClientStrip.tsx`

**Propósito:** Franja horizontal con los nombres de clientes o empresas con las que has trabajado.

- Diseño flexible (`flex-wrap`) que se adapta a diferentes cantidades de nombres.
- Texto grande, tenue y en mayúscula para efecto de "logos en gris".

**Lee de `siteData`:** `clients`.

---

### `Portfolio.tsx`

**Propósito:** Grid de proyectos seleccionados.

- Dos columnas en desktop, una en móvil.
- Las tarjetas de posición par tienen un offset vertical para crear un efecto de mosaico escalonado (igual al original HTML).
- Cada tarjeta muestra un thumbnail con ícono placeholder, el título y las etiquetas del proyecto.
- Al hover: elevación sutil (`-translate-y-1`) y borde dorado.

**Lee de `siteData`:** `works`.

---

### `ServicesContact.tsx`

**Propósito:** Sección combinada con tres bloques: contacto rápido, frase + estadísticas, y tarjetas de servicios.

- Grid de dos columnas en la parte superior: CTA de contacto a la izquierda, frase filosófica con números a la derecha.
- Las **tarjetas de servicios** se renderizan en un grid de 3 columnas.
- La tarjeta con `highlighted: true` se pinta de dorado (acento) en lugar del fondo oscuro.
- Íconos SVG asignados por posición (producto, branding, desarrollo).

**Lee de `siteData`:** `contactInfo`, `quote`, `quoteDesc`, `stats`, `services`.

---

### `BlogTestimonial.tsx`

**Propósito:** Sección dividida entre el testimonial de un cliente y la lista de entradas del blog.

- **Columna izquierda:** Encabezado de blog + bloque de testimonial con avatar, cita entrecomillada y nombre del cliente. Los dots decorativos de navegación son estáticos (visual solamente).
- **Columna derecha:** Lista de posts con fecha, título y flecha de navegación. Cada ítem tiene hover dorado.
- Si el avatar del testimonial está vacío, muestra un ícono de persona placeholder.

**Lee de `siteData`:** `testimonial`, `posts`.

---

### `Footer.tsx`

**Propósito:** Cierre de página con CTA de contacto, formulario y barra inferior.

- Grid de dos columnas: mensaje de contacto a la izquierda, formulario a la derecha.
- El formulario tiene campos controlados con `useState` (nombre, email, mensaje).
- Al enviar muestra un `alert` — **reemplaza esa lógica** con un servicio real (EmailJS, Formspree, tu propio backend, etc.).
- La barra inferior muestra la marca, texto de cierre y redes sociales.

**Lee de `siteData`:** `footer`, `contactInfo`, `hero.socials`.

---

## 🚀 Cómo correr el proyecto

```bash
# Instalar dependencias (ya instaladas si seguiste la creación)
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

---

## 🎨 Paleta de colores (variables CSS)

Definidas en `src/index.css` como variables CSS nativas:

| Variable       | Valor        | Uso                              |
|----------------|--------------|----------------------------------|
| `--bg`         | `#24252f`    | Fondo principal                  |
| `--bg-alt`     | `#1c1d26`    | Fondo alternativo (secciones)    |
| `--card`       | `#2c2d39`    | Fondo de tarjetas                |
| `--card-2`     | `#33343f`    | Fondo de tarjetas secundario     |
| `--accent`     | `#f5a623`    | Color dorado de acento           |
| `--accent-ink` | `#2a2200`    | Texto oscuro sobre acento dorado |
| `--text`       | `#f4f4f6`    | Texto principal                  |
| `--text-dim`   | `#a3a4b3`    | Texto secundario                 |
| `--text-faint` | `#6f7080`    | Texto tenue / placeholders       |
| `--line`       | `rgba(255,255,255,0.08)` | Bordes y divisores    |

Para cambiar el esquema de color del portafolio, basta con editar estas variables en `index.css`.
