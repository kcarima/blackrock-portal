import logoImg from '../assets/logo.png';

import bg1 from '../assets/slider/bg1.jpg';
import bg2 from '../assets/slider/bg2.jpg';
import bg3 from '../assets/slider/bg3.jpg';

import proj1 from '../assets/projects/project1.jpg';
import proj2 from '../assets/projects/project2.jpg';
import proj3 from '../assets/projects/project3.jpg';

export const INITIAL_DATA = {
  company: {
    name: "BlackRock Guayana",
    logo: logoImg, 
    phone: "+58 416-4568611",
    email: "contacto@blackrockguayana.com",
    address: "Ciudad Guayana, Bolívar, Venezuela",
    about: "Líderes en construcción, movimiento de tierras y capacitación de personal en la región de Guayana. Con maquinaria pesada de última generación y un equipo altamente capacitado, garantizamos la ejecución de obras con los más altos estándares."
  },
  heroSlides: [
    { id: 1, img: bg1, title: "Construimos el futuro de Guayana", subtitle: "Ingeniería de Alto Nivel" },
    { id: 2, img: bg2, title: "Maquinaria de Última Generación", subtitle: "Movimiento de tierras a gran escala" },
    { id: 3, img: bg3, title: "Infraestructura Industrial", subtitle: "Obras que impulsan el desarrollo" }
  ],
  services: [
    { iconName: "HardHat", title: "Movimiento de Tierras", desc: "Excavaciones y nivelaciones con precisión milimétrica." },
    { iconName: "Building2", title: "Obras Civiles", desc: "Infraestructuras comerciales e industriales robustas." },
    { iconName: "Wrench", title: "Mantenimiento", desc: "Servicios preventivos y correctivos especializados." },
    { iconName: "FileText", title: "Inspección", desc: "Control de calidad y supervisión técnica rigurosa." }
  ],
  projects: [
    { id: 1, title: "Complejo Industrial Sur", category: "Industrial", img: proj1 },
    { id: 2, title: "Vialidad Troncal 10", category: "Infraestructura", img: proj2 },
    { id: 3, title: "Centro Empresarial", category: "Comercial", img: proj3 }
  ],
  academy: {
    title: "BlackRock Academy",
    description: "Formamos a la próxima generación de expertos. Capacitación profesional y certificación en el manejo de maquinaria pesada, obras civiles y seguridad industrial.",
    courses: [
      { id: 1, title: "Operador de Maquinaria Pesada", duration: "120 Horas", icon: "HardHat" },
      { id: 2, title: "Seguridad Industrial y Riesgos", duration: "40 Horas", icon: "ShieldCheck" },
      { id: 3, title: "Mantenimiento Preventivo", duration: "60 Horas", icon: "Wrench" }
    ]
  }
};

export const QUIZ_QUESTIONS = [
  { question: "¿Cuál es el ensayo principal para determinar la resistencia a la compresión del concreto?", options: ["Ensayo Proctor", "Rotura de cilindros a los 28 días", "Ensayo de tracción indirecta", "Prueba de asentamiento (Slump)"], correct: 1 },
  { question: "En la inspección de soldaduras estructurales, ¿cuál es un método no destructivo (END) comúnmente utilizado?", options: ["Líquidos Penetrantes", "Prueba de flexión", "Macrografía", "Ensayo de impacto Charpy"], correct: 0 },
];