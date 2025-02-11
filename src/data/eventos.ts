// Archivo: src/data/eventos.ts

export interface Evento {
  id: number;
  slug: string;
  nombre: string;
  fecha: string;
  ubicacion: string;
  resumen: string;
  descripcion: string;
  rutaMapaUrl: string;
  galeriaFotos: string[];
  detallesTecnicos: string;
  patrocinadores: string[];
}

export const eventos: Evento[] = [
  {
    id: 1,
    slug: "rally-las-colonias-2024",
    nombre: "Rally las Colonias",
    fecha: "24-30 Enero, 2024",
    ubicacion: "Itapúa",
    resumen: "El legendario rally que abre la temporada del rally paraguayo en los caminos de Nueva Alborda, Trinidad y Hoenau esta de vuelta.",
    descripcion: "El Rally de las colonias es uno de los eventos más antiguos y prestigiosos en el Paraguay. Conocido por impredecibles carreteras desafiantes, este rally pone a prueba la habilidad de los pilotos. Los competidores navegan por las estrechas y sinuosas carreteras, enfrentándose a cambios repentinos en la superficie y la visibilidad.",
    rutaMapaUrl: "/eventos/img1.webp",
    galeriaFotos: [
      "/eventos/img1.webp",
      "/eventos/img2.webp",
      "/eventos/img3.webp",
      "/eventos/img4.webp",
      "/eventos/img5.webp",
      "/eventos/img6.webp"
    ],
    detallesTecnicos: "Distancia total: 324.39 km, Etapas cronometradas: 17, Superficie: Asfalto/Nieve",
    patrocinadores: ["Pirelli", "Red Bull", "Citroën"]
  },
  {
    id: 2,
    slug: "rally-chaco-2025",
    nombre: "Rally del Chaco",
    fecha: "03-06 Febrero, 2025",
    ubicacion: "Región Occidental, Paraguay",
    resumen: "El Rally del Chaco vuelve más fuerte que nunca para desafiar a los pilotos de todo Paraguay, con sus caminos de arena, tierra y el calor extremo característico de la región.",
    descripcion: "El Rally del Chaco es una de las competencias más icónicas de Paraguay y una de las más exigentes del calendario nacional. Los pilotos enfrentan terrenos variados que incluyen arena, tierra y caminos con temperaturas extremas. Este rally es conocido por su resistencia y la habilidad requerida para dominar los duros tramos del Chaco paraguayo. La estrategia, la preparación técnica y la resistencia física y mental son claves para el éxito.",
    rutaMapaUrl: "/eventos/img2.webp",
    galeriaFotos: [
      "/eventos/img3.webp",
      "/eventos/img4.webp",
      "/eventos/img5.webp",
      "/eventos/img6.webp"
    ],
    detallesTecnicos: "Distancia total: 1,200 km, Etapas cronometradas: 25, Superficie: Arena/Tierra",
    patrocinadores: ["Petropar", "Banco Nacional de Fomento", "Cervepar", "Ueno Bank"]
  },
  {
    id: 4,
    slug: "rally-itapua-2025",
    nombre: "Rally Trans Itapúa",
    fecha: "22-24 Marzo, 2025",
    ubicacion: "Encarnación, Itapúa, Paraguay",
    resumen: "El Rally Trans Itapúa, uno de los eventos más esperados del automovilismo nacional, regresa con etapas llenas de adrenalina y paisajes espectaculares de la región sur del Paraguay.",
    descripcion: "El Rally Trans Itapúa es reconocido como una de las competencias más emocionantes del calendario automovilístico paraguayo. Con tramos que cruzan colinas, caminos rurales y áreas boscosas, este rally ofrece un desafío único tanto para pilotos como para sus equipos. Este evento es también parte del Campeonato Nacional y atrae a miles de espectadores, quienes disfrutan de la velocidad y el espectáculo en medio de los hermosos paisajes de Itapúa.",
    rutaMapaUrl: "/eventos/img5.webp",
    galeriaFotos: [
      "/eventos/img2.webp",
      "/eventos/img6.webp"
    ],
    detallesTecnicos: "Distancia total: 900 km, Etapas cronometradas: 18, Superficie: Tierra/Grava",
    patrocinadores: ["Petrobras", "Cervepar", "ABC Color", "Turismo SENATUR"]
  }
];
