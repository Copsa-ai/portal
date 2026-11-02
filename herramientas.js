// =====================================================================
//  PORTAL COPSA - LISTA DE HERRAMIENTAS
//  Para sumar una herramienta: copiá una línea y cambiá los datos.
//
//  nombre       Título de la tarjeta
//  descripcion  Una línea de qué hace
//  link         URL del monitor (tipo "web") o ruta del archivo (tipo "bat",
//               ej: "scripts/pre-ruteo.bat", guardado en la carpeta scripts)
//  tipo         "web" (abre en pestaña nueva) | "bat" (se descarga)
//  sector       Agrupa las tarjetas. Si escribís un sector nuevo, aparece solo.
//  responsable  Quién lo mantiene
//  icono        ruta | usuario | reclamo | balanza | monitor | script | camion | documento | credito | cobranza
//  ayuda        (opcional) link extra debajo de la tarjeta: { texto: "...", link: "mailto:..." }
//  estado       (opcional) "Nuevo" | "En desarrollo" (en desarrollo = tarjeta sin link, dice "Próximamente")
// =====================================================================

const HERRAMIENTAS = [
  { nombre: "Monitor de Ruteo",   descripcion: "Seguimiento del ruteo diario de repartos.",           link: "https://copsa-ai.github.io/Copsa-Ruteo/", tipo: "web", sector: "Logística",      responsable: "Sandra · SAC",      icono: "ruta" },
  { nombre: "Altas de Clientes",  descripcion: "Bandeja de altas de clientes: cada uno ve lo que le toca.", link: "https://script.google.com/a/macros/petroleracopsa.com.ar/s/AKfycbzNjWFLZNV9EkJK9l88P__apOhgAupyQvGvN2s8ma5pHmrHAIsFJtJ-HLRHjVkaIJp2cw/exec?p=bandeja", tipo: "web", sector: "SAC",            responsable: "Sandra · SAC",      icono: "usuario" },
  { nombre: "Reclamos",           descripcion: "Registro y seguimiento de reclamos.",                 link: "#",                              tipo: "web", sector: "SAC",            responsable: "Sandra · SAC",      icono: "reclamo", estado: "Nuevo" },
  { nombre: "Conciliador YPF",    descripcion: "Conciliación de movimientos con YPF.",                link: "https://monitor-ypf.vercel.app/", tipo: "web", sector: "Contable",       responsable: "Sandra · SAC",      icono: "balanza" },
  { nombre: "Monitor de Pedidos", descripcion: "Pedidos derivados a Créditos: aprobados, rechazados, pendientes y motivos.", link: "https://copsa-monitor.pages.dev/", tipo: "web", sector: "SAC", responsable: "Sergio · SAC", icono: "monitor" },
  { nombre: "Aprobación de Créditos", descripcion: "Seguimiento de solicitudes de aprobación de crédito.", link: "#", tipo: "web", sector: "Créditos y Cobranzas",  responsable: "A definir", icono: "credito",  estado: "En desarrollo" },
  { nombre: "Monitor de Cobranzas",   descripcion: "Seguimiento de cobranzas.",                            link: "#", tipo: "web", sector: "Créditos y Cobranzas", responsable: "A definir", icono: "cobranza", estado: "En desarrollo" },
  { nombre: "Buscador de COAs", descripcion: "Buscá certificados de análisis por número de lote.", link: "https://script.google.com/a/macros/petroleracopsa.com.ar/s/AKfycbwjPTSzUQuRdJuotJOBTVhmiim-f76pcvQ5tiwBalIWx_YmgMUcGEpDquCGLSYYXyic/exec", tipo: "web", sector: "Laboratorio", responsable: "Sergio · SAC", icono: "documento",
    ayuda: { texto: "¿No encontrás tu COA? Escribile a Laboratorio", link: "mailto:laboratorio@petroleracopsa.com.ar?cc=pedidos@petroleracopsa.com.ar&subject=COA%20no%20encontrado&body=Hola%2C%0A%0ANo%20encuentro%20el%20COA%20de%3A%0A%0ALote%3A%20%0AProducto%3A%20%0ACliente%3A%20%0A%0AGracias." } },
];
