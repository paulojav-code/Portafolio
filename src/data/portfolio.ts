// ─────────────────────────────────────────────
//  portfolio/src/data/portfolio.ts
//  Edita este archivo para personalizar tu info
// ─────────────────────────────────────────────

// Prefijo base para imágenes en public/ — funciona tanto en dev como en GitHub Pages
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const img = (path: string) => (path ? `${base}${path}` : "");

export const siteData = {
  // ── NAV ──────────────────────────────────────
  name: "Tu Nombre.",

  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos",  href: "#trabajos"  },
  ],

  // ── HERO ─────────────────────────────────────
  hero: {
    eyebrow: "Introducción",
    firstName: "Paulo",
    lastName: "Lamadrid.",
    role: "Programador Web.",
    roleHighlight: "desarrollador",      // palabra que va en blanco
    description:
      "Ayudo a las personas a desarollar ideas digitales para sus negocios y asi generar un impacto positivo a la hora de dar a conocer sus marcas",
    ctaLabel: "Mi historia →",
    ctaHref: "#sobre-mi",
    photo: img("/Perfil.jpg"),
    socials: {
      
    },
  },

  // ── CLIENTES / STRIP ─────────────────────────
  clients: [],

  // ── TRABAJOS ─────────────────────────────────
  // cover  → imagen principal que aparece en la tarjeta
  // images → todas las fotos del proyecto (incluye cover + extras)
  //          deja el array vacío [] si aún no tienes fotos
  works: [
    {
      title: "Sistema de Almacen",
      tags: "Aplicacion ",
      cover: img("/p1/cover.jpeg"),
      images: [
        img("/p1/cover.jpeg"),
        img("/p1/2.jpeg"),
        img("/p1/3.jpeg"),
      ],
      description: "Proyecto simpre hecho con React y mySQL, para facilitar el manejo de producto la venta del mismo y la creacion de notas de venta y tickets",    // texto opcional que aparece en el modal
    },
    {
      title: "Pagina distribuidor de ceras",
      tags: "Pagina Web",
      cover: img("/p2/cover.png"),
      images: [
        img("/p2/cover.png"),
        img("/p2/2.png"),
        img("/p2/3.png"),
        img("/p2/4.png"),
      ],
      description: "Pagina hecha con react que funcionaba como tienda de ceraas,carton y otros productos",
    },
    {
      title: "Distribuidor de herramientas detanles",
      tags: "Pagina Web",
      cover: img("/p3/cover.jpeg"),
      images: [
        img("/p3/2.jpeg"),
        img("/p3/3.jpeg"),
        img("/p3/4.jpeg"),
        img("/p3/5.jpeg"),
      ],
      description: "",
    },
    {
      title: "Proyecto Cuatro",
      tags: "Producto, Estrategia",
      cover: "",
      images: [],
      description: "",
    },
  ],

  // ── CONTACTO + STATS ─────────────────────────
  contactInfo: {
    eyebrow: "Contacto",
    heading: "Cualquier tipo de consulta y conversación.",
    description:
      "Escríbeme si tienes un proyecto en mente, una idea a medio armar o simplemente quieres saludar.",
    email: "paulo_lamadrid@hotmail.com",
  },

  quote: "",
  quoteDesc: "",

  stats: [
    { num: "2",  label: "Años de\nexperiencia" },
    { num: "", label: "" },
  ],

  // ── SERVICIOS ────────────────────────────────
  services: [
    { label: "Diseño de producto.", count: "", highlighted: true  },
    { label: "Branding.",           count: "", highlighted: false },
    { label: "Desarrollo Full Stack.", count: "XX proyectos", highlighted: false },
  ],

  // ── TESTIMONIAL ──────────────────────────────
  testimonial: {
    quote:
      "Escribe aquí una reseña real de un cliente, breve y concreta, sobre cómo fue trabajar contigo.",
    name: "Nombre del cliente",
    role: "Cargo, Empresa",
    avatar: "",   // ruta a la imagen del cliente, ej: "/avatar.jpg"
  },

  // ── BLOG ─────────────────────────────────────
  posts: [
    { date: "Mes DD · Blog", title: "Título de tu primera entrada",          href: "#" },
    { date: "Mes DD · Blog", title: "Cómo organizas el tiempo en tus proyectos", href: "#" },
    { date: "Mes DD · Blog", title: "Empatía y ego en el diseño",            href: "#" },
  ],

  // ── FOOTER ───────────────────────────────────
  footer: {
    ctaHeading: "¿Tienes un proyecto?\nHablemos.",
    ctaDesc: "Cuéntame un poco de lo que necesitas y te responderé lo antes posible.",
    formHeading: "Cuéntame de tu proyecto.",
    thanks: "Gracias por llegar hasta aquí, eso es todo.",
  },
};
