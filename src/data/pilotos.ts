// data/pilotos.ts
export interface Piloto {
    id: number;
    nombre: string;
    rol: 'piloto' | 'copiloto';
    edad: number;
    experiencia: string;
    victorias: number;
    imagen: string;
    nacionalidad: string;
    descripcionCorta: string;
    descripcionCompleta: string;
    logros: string[];
}

export const pilotos: Piloto[] = [
    {
        id: 1,
        nombre: "Gustavo Saba",
        rol: "piloto",
        edad: 32,
        experiencia: "10 años",
        victorias: 15,
        imagen: "/pilotos/saba.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Campeón nacional de rally 2023",
        descripcionCompleta: "Carlos Santos es uno de los pilotos más experimentados del equipo Petrobras Rally. Con una década de experiencia en competencias nacionales e internacionales, ha demostrado su excelencia en las pistas más desafiantes de Sudamérica.",
        logros: [
            "Campeón Nacional de Rally 2023",
            "3 veces ganador del Rally de São Paulo",
            "Subcampeón Sudamericano 2022"
        ]
    },
    {
        id: 2,
        nombre: "Diego Domínguez",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/diego.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 3,
        nombre: "Alejandro Galanti",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/alejandro-galanti.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 4,
        nombre: "Miguel Zaldívar",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/zaldivar-miguel.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 5,
        nombre: "Fabrizio Zaldívar",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/fabrizio-zaldivar.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 6,
        nombre: "Fabricio Galanti",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/fabi-galanti.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 7,
        nombre: "Juan Martín Masi",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/juan.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 8,
        nombre: "Augusto Bestard",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/augusto.webp",
        nacionalidad: "Paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
    {
        id: 9,
        nombre: "H Zaldívar",
        rol: "piloto",
        edad: 28,
        experiencia: "7 años",
        victorias: 12,
        imagen: "/pilotos/zaldivarh.webp",
        nacionalidad: "paraguay",
        descripcionCorta: "Navegante experto en terrenos difíciles",
        descripcionCompleta: "Ana Silva se ha convertido en una de las copilotos más respetadas en el circuito de rally brasileño. Su precisión en la navegación y capacidad para mantener la calma en situaciones extremas la han convertido en un elemento crucial del equipo.",
        logros: [
            "Mejor copiloto del año 2023",
            "12 victorias en competencias nacionales",
            "Reconocimiento especial por navegación en Rally Amazonas"
        ]
    },
]