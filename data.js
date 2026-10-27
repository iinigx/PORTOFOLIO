// ============================================================
//  AQUÍ EDITAS TODO: tus datos y tus proyectos.
//  No hace falta tocar index.html, style.css ni script.js.
// ============================================================

const PERFIL = {
  nombre: "Iñigo Rojo Crespo",
  titular: "Estudiante de 2º de DAM, me centro en el desarrollo web front-end.",
  bio: [
    "Estudio Desarrollo de Aplicaciones Multiplataforma y me gusta construir webs completas con HTML, CSS y JavaScript.",
    "Aquí voy subiendo los proyectos que hago en clase: Java, Android, desarrollo web y más."
  ],
  datos: [
    { etiqueta: "Estudios", valor: "2º DAM (CFGS)" },
    { etiqueta: "Lenguajes", valor: "Java, JavaScript, Python" },
    { etiqueta: "Me interesa", valor: "Front-end y APIs REST" }
  ],
  contacto: {
    github: "https://github.com/TU-USUARIO",       // pon tu perfil de GitHub
    email: "tu-correo@ejemplo.com",                // pon tu correo
    linkedin: ""                                   // opcional, déjalo vacío si no tienes
  }
};

// Cada proyecto es un bloque { ... }. Copia uno, pégalo arriba y cambia los datos.
// Campos opcionales: repo, demo, imagen (ruta a una captura en la carpeta img/).
const PROYECTOS = [
  {
    titulo: "Analizador multiproceso de texto",
    asignatura: "PSP",
    fecha: "2026-09",
    descripcion: "Un proceso Coordinador lanza varios procesos Trabajador con ProcessBuilder para analizar un texto en paralelo y juntar los resultados.",
    tecnologias: ["Java", "ProcessBuilder"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Hilos y sincronización en Java",
    asignatura: "PSP",
    fecha: "2026-10",
    descripcion: "Práctica con experimentos y ejercicios sobre hilos, condiciones de carrera y mecanismos de sincronización.",
    tecnologias: ["Java", "Hilos"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "HotelApp, sistema de reservas",
    asignatura: "Taller de clase",
    fecha: "2026-10",
    descripcion: "Aplicación de escritorio para gestionar reservas de un hotel, con interfaz hecha en FXML.",
    tecnologias: ["Java", "JavaFX", "FXML"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Recursos y permisos en Android",
    asignatura: "PMDM",
    fecha: "2026-10",
    descripcion: "Práctica con los recursos de res/, la clase R y el permiso de cámara, resuelta con Views (XML) y con Jetpack Compose.",
    tecnologias: ["Android", "Jetpack Compose", "XML"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "El segundo cerebro de Iñigo",
    asignatura: "Proyecto personal",
    fecha: "2026-10",
    descripcion: "Agenda web con tareas con fecha y hora, calendario de clases por la mañana, tareas por la tarde y archivos guardados.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
    imagen: ""
  },
  {
    titulo: "Web de finanzas personales",
    asignatura: "Proyecto personal",
    fecha: "2026-10",
    descripcion: "Gestor de cuentas con flujo de dinero, fondos y formulario para añadir dinero, en tema oscuro y morado.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
    imagen: ""
  }
];
