import logoImg from '../assets/logo.png';
import logoImg2 from '../assets/logo2.jpg';
import { HardHat, Building2, Wrench, Home, Hammer, PenTool, Sun, RefreshCw, ShieldCheck } from 'lucide-react';

import bg1 from '../assets/slider/bg1.jpg';
import bg2 from '../assets/slider/bg2.jpg';
import bg3 from '../assets/slider/bg3.jpg';
import bg4 from '../assets/slider/bg4.jpg';
import bg5 from '../assets/slider/bg5.jpg';

import proj1 from '../assets/projects/project1.jpg';
import proj2 from '../assets/projects/project2.jpg';
import proj3 from '../assets/projects/project3.jpg';

export const INITIAL_DATA = {
  company: {
    name: "BlackRock Guayana",
    logo: logoImg, 
    logo2: logoImg2, 
    phone: "+58 416-4568611",
    email: "contacto@blackrockguayana.com",
    address: "Ciudad Guayana, Bolívar, Venezuela",
    about: "Líderes en construcción, movimiento de tierras y capacitación de personal en la región de Guayana. Con maquinaria pesada de última generación y un equipo altamente capacitado, garantizamos la ejecución de obras con los más altos estándares."
  },
  heroSlides: [
    { id: 1, img: bg1, title: "Construimos el futuro de Guayana", subtitle: "Ingeniería de Alto Nivel" },
    { id: 2, img: bg2, title: "Maquinaria de Última Generación", subtitle: "Movimiento de tierras a gran escala" },
    { id: 3, img: bg3, title: "Infraestructura Industrial", subtitle: "Obras que impulsan el desarrollo" },
    { id: 4, img: bg4, title: "Capacitación Profesional", subtitle: "Formando a los mejores operadores" },
    { id: 5, img: bg5, title: "Compromiso con la Calidad", subtitle: "Resultados que superan expectativas" }
    
  ],
  services: [
    { iconName: "HardHat", title: "Movimiento de Tierras", desc: "Excavaciones y nivelaciones con precisión milimétrica." },
    { iconName: "Building2", title: "Obras Civiles", desc: "Infraestructuras comerciales e industriales robustas." },
    { iconName: "Wrench", title: "Mantenimiento", desc: "Servicios preventivos y correctivos especializados." },
    { iconName: "FileText", title: "Inspección", desc: "Control de calidad y supervisión técnica rigurosa." }
  ],
  projects: [
    {
      id: 1,
      title: "Complejo Industrial Sur",
      category: "Industrial",
      img: proj1,
      description: "Proyecto de instalaciones industriales con estructuras metálicas, pavimentos y sistemas logísticos integrados.",
      location: "Ciudad Guayana",
      year: "2026",
      details: [
        "Cimentación profunda y estructura metálica",
        "Sistema de drenaje industrial",
        "Supervisión técnica y control de calidad"
      ]
    },
    {
      id: 2,
      title: "Vialidad Troncal 10",
      category: "Infraestructura",
      img: proj2,
      description: "Rehabilitación y ampliación de una vía troncal clave, con obras de drenaje, pavimento y señalización de seguridad.",
      location: "Región Sur",
      year: "2025",
      details: [
        "Mejoras en la geometría vial",
        "Refuerzo de subrasante y carpeta asfáltica",
        "Instalaciones de obras hidráulicas"
      ]
    },
    {
      id: 3,
      title: "Centro Empresarial",
      category: "Comercial",
      img: proj3,
      description: "Desarrollo de centro empresarial premium, con espacios de oficinas, comercio y zonas comunes sostenibles.",
      location: "Distrito Comercial",
      year: "2024",
      details: [
        "Diseño arquitectónico corporativo",
        "Acabados de alta gama",
        "Eficiencia energética y seguridad"
      ]
    }
  ],
  specialties: [
    { id: 1, title: "Construcción de viviendas", icon: Home, desc: "Edificación de espacios residenciales con los más altos estándares de calidad." },
    { id: 2, title: "Remodelaciones", icon: Hammer, desc: "Transformamos tus espacios actuales para darles nueva vida y funcionalidad." },
    { id: 3, title: "Diseño de interiores", icon: PenTool, desc: "Creación de ambientes internos estéticos, modernos y altamente funcionales." },
    { id: 4, title: "Diseño exterior", icon: Sun, desc: "Paisajismo, optimización de fachadas y acondicionamiento de áreas externas." },
    { id: 5, title: "Renovación", icon: RefreshCw, desc: "Actualización de infraestructuras antiguas con acabados de primera." },
    { id: 6, title: "Gestión de la seguridad", icon: ShieldCheck, desc: "Protocolos estrictos para garantizar obras sin riesgos laborales." }
  ],
  portfolio: [
    { id: 1, title: "Autopista Sur", category: "Vialidad", img: "https://images.unsplash.com/photo-1541888086925-0c1332207fd1?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Complejo Industrial Sidor", category: "Edificaciones", img: "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "Terraza Residencial", category: "Movimiento de Tierras", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" },
    { id: 4, title: "Represa Hidroeléctrica", category: "Obras Hidráulicas", img: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=600" },
    { id: 5, title: "Centro Comercial Orinoco", category: "Comercial", img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=600" },
    { id: 6, title: "Mantenimiento Planta Aluminio", category: "Industrial", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
  ],
  stats: { visitors: 1250, leads: 45, projects: 12, pendingQuotes: 8 },
  recentQuotes: [
    { id: "BRQ-101", client: "Constructora del Sur", date: "2026-04-01", status: "pending", amount: "$15,000" },
    { id: "BRQ-100", client: "Inversiones ACME", date: "2026-03-28", status: "sent", amount: "$42,000" },
    { id: "BRQ-099", client: "Alcaldía Caroní", date: "2026-03-25", status: "approved", amount: "$120,000" },
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