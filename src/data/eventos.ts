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
  banderaUrl: string;
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
    ubicacion: "Mónaco",
    resumen: "El legendario rally que abre la temporada del rally paraguayo en los caminos de Nueva Alborda, Trinidad y Hoenau esta de vuelta.",
    descripcion: "El Rally de Monte Carlo es uno de los eventos más antiguos y prestigiosos en el mundo del rally. Conocido por sus condiciones climáticas impredecibles y sus carreteras desafiantes, este rally pone a prueba la habilidad de los pilotos en asfalto, nieve y hielo. Los competidores navegan por las estrechas y sinuosas carreteras de montaña en los Alpes franceses, enfrentándose a cambios repentinos en la superficie y la visibilidad.",
    rutaMapaUrl: "/lascolonias.png",
    banderaUrl: "/images/monaco-flag.png",
    galeriaFotos: [
      "/images/monte-carlo-1.jpg",
      "/images/monte-carlo-2.jpg",
      "/images/monte-carlo-3.jpg",
    ],
    detallesTecnicos: "Distancia total: 324.39 km, Etapas cronometradas: 17, Superficie: Asfalto/Nieve",
    patrocinadores: ["Pirelli", "Red Bull", "Citroën"]
  },
  {
    id: 2,
    slug: "rally-suecia-2024",
    nombre: "Rally de Suecia",
    fecha: "15-18 Febrero, 2024",
    ubicacion: "Umeå, Suecia",
    resumen: "El único rally completamente de nieve en el calendario del WRC, famoso por sus altas velocidades.",
    descripcion: "El Rally de Suecia es el único evento completamente invernal en el calendario del Campeonato Mundial de Rally. Los pilotos compiten en carreteras cubiertas de nieve y hielo, utilizando neumáticos especiales con clavos para obtener tracción. Este rally es conocido por sus altas velocidades y los espectaculares saltos sobre los bancos de nieve. La estrategia y la gestión de los neumáticos son cruciales, ya que las condiciones pueden variar significativamente a lo largo del evento.",
    rutaMapaUrl: "/images/sweden-route.jpg",
    banderaUrl: "/images/sweden-flag.png",
    galeriaFotos: [
      "/images/sweden-1.jpg",
      "/images/sweden-2.jpg",
      "/images/sweden-3.jpg",
    ],
    detallesTecnicos: "Distancia total: 301.18 km, Etapas cronometradas: 18, Superficie: Nieve/Hielo",
    patrocinadores: ["Volkswagen", "Michelin", "Škoda"]
  },
];