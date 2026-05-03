import logoImg from '../assets/logo.png';
import logoImg2 from '../assets/logo2.jpg';
import inspector from '../assets/inspector.png';
import { HardHat, Building2, Wrench, Home, Hammer, PenTool, Sun, RefreshCw, ShieldCheck } from 'lucide-react';

import bg1 from '../assets/slider/bg1.jpg';
import bg2 from '../assets/slider/bg2.jpg';
import bg3 from '../assets/slider/bg3.jpg';
import bg4 from '../assets/slider/bg4.jpg';
import bg5 from '../assets/slider/bg5.jpg';

import proj1 from '../assets/projects/project1.jpg';
import proj2 from '../assets/projects/project2.jpg';
import proj3 from '../assets/projects/project3.jpg';
import proj4 from '../assets/projects/project4.jpg';
import proj5 from '../assets/projects/project5.jpg';
import proj6 from '../assets/projects/project6.jpg';

// Remodeling images
import remod1 from '../assets/projects/Remodeling/Screenshot_20220911-121302_WhatsAppBusiness.jpg';
import remod2 from '../assets/projects/Remodeling/Screenshot_20220911-121558_WhatsAppBusiness.jpg';
import remod3 from '../assets/projects/Remodeling/Screenshot_20220911-121730_WhatsAppBusiness.jpg';
import remod4 from '../assets/projects/Remodeling/Screenshot_20220911-121847_WhatsAppBusiness~2.jpg';

// Trailer House images
import trailer1 from '../assets/projects/TrailerHouse/1766099185650.jpg';
import trailer2 from '../assets/projects/TrailerHouse/1766450458571.jpg';
import trailer3 from '../assets/projects/TrailerHouse/1767054001228.jpg';
import trailer4 from '../assets/projects/TrailerHouse/20251128_065811.jpg';
import trailer5 from '../assets/projects/TrailerHouse/20251213_144205.jpg';
import trailer6 from '../assets/projects/TrailerHouse/20251215_210740.jpg';
import trailer7 from '../assets/projects/TrailerHouse/20251215_210752.jpg';
import trailer8 from '../assets/projects/TrailerHouse/20251215_210757.jpg';
import trailer9 from '../assets/projects/TrailerHouse/20251215_210951.jpg';
import trailer10 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51.jpg';
import trailer11 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51_1.jpg';
import trailer12 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51_2.jpg';
import trailer13 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51_3.jpg';
import trailer14 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51_4.jpg';
import trailer15 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-51_5.jpg';
import trailer16 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-52.jpg';
import trailer17 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-52_1.jpg';
import trailer18 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-52_2.jpg';
import trailer19 from '../assets/projects/TrailerHouse/PHOTO-2026-04-04-10-45-52_3.jpg';

export const INITIAL_DATA = {
  company: {
    name: "BlackRock Guayana",
    logo: logoImg, 
    logo2: logoImg2, 
    phone: "+58 416-4568611",
    email: "blackrockguayana@gmail.com",
    rif: "J-50798099-5",
    address: "Unare 2 Bloque 2, Piso 3, Apto 03-07, Ciudad Guayana, Bolívar, Venezuela",
    about: "BLACK ROCK GUAYANA C.A. es otorgar a nuestros clientes, servicios de construcción, remodelación e inspección en general mediante un equipo humano comprometido y de primer nivel en cuanto a lo profesional. Cumplir con el más amplio estándar de calidad en cada detalle de lo construido, es y será nuestro sello distintivo. Convirtiéndose en una Empresa de prestigio en el mercado nacional de la construcción e inspección. Para eso, nuestras energías están puestas en otorgar la mayor calidad posible en cada paso y en cada persona involucrada en el proceso de nuestra labor como empresa. Por encontrarnos en el inicio de operaciones en Venezuela, aun no poseemos referencias al respecto, pero nuestro personal, posee una amplia experiencia en obras en Venezuela, Chile y Estados Unidos.",
    vision: "Nuestra visión es que BLACK ROCK GUAYANA C.A. sea un referente en materia de construcción, remodelación e inspección gracias a sus diseños innovadores y su compromiso con el medio ambiente y con la armonía de los espacios.",
    goals: "Alcanzar un sitio preferencial con las diferentes empresas de la región y ayudar en el crecimiento país a través de la creación de fuentes de empleo e introducir mejoras en la prestación de servicios",
    registrationDate: "3 de Febrero del 2026",
    registrationPlace: "Registro Mercantil Primero del Estado Bolívar bajo el Número 14 del Tomo 7-A"
  },
  inspector: inspector,
  tsServices: [
    { title: 'Construcción de viviendas', desc: 'Construcción de viviendas residenciales con los más altos estándares.', icon: 'Home' },
    { title: 'Remodelaciones de edificios', desc: 'Remodelaciones comerciales e industriales con enfoque en calidad y plazo.', icon: 'Building2' },
    { title: 'Diseño de interiores', desc: 'Diseño interior funcional y estético para transformar cualquier espacio.', icon: 'ts-service-box-img' },
    { title: 'Diseño exterior', desc: 'Diseño exterior y paisajismo con soluciones modernas y duraderas.', icon: 'Wrench' },
    { title: 'Renovación', desc: 'Renovaciones completas para actualizar infraestructuras existentes.', icon: 'HardHat' },
    { title: 'Gestión de la seguridad', desc: 'Gestión de seguridad integral para obras libres de riesgos.', icon: 'ShieldCheck' },
  ],
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
  servicesDescription: "Somos BLACK ROCK GUAYANA C.A., una Empresa de Construcción, Remodelación e Inspección, con un personal altamente calificado con más de 30 años de experiencia en el sector, especializada en obras civiles, construcción de viviendas y edificaciones, proyectos comerciales, reparación de fallas en servicios PREVENTIVOS Y CORRECTIVOS, electricidad, PLOMERIA ,GASFITERIA,PINTURA ,áreas verdes y paisajismo, remodelaciones en general servicios de piscina; Inspección de obras civiles, reparación y remodelación de tráiler, iniciando operaciones en el País. A lo largo de la trayectoria de nuestro personal hemos trabajado en: obras civiles en general, proyectos comerciales, reparación de fallas en servicios, reparación de piscinas y jacuzzi, inspección de obras civiles, siempre comprometidos con la calidad, la seguridad y el cumplimiento de los plazos establecidos. Nuestro equipo está formado por profesionales altamente calificados a nivel internacional y utilizamos materiales de la más alta calidad para garantizar resultados duraderos y satisfactorios para nuestros clientes.",
  servicesList: [
    "Construcción de viviendas y edificación en general",
    "Diseño de proyectos",
    "Dirección, supervisión e inspección de obras en general para asegurar el cumplimiento de las normativas vigentes y los estándares de calidad",
    "Remodelación y mantenimiento en edificaciones existentes",
    "Mantenimiento preventivo y correctivo a bienes inmuebles",
    "Mantenimiento de obras e infraestructuras",
    "Servicios de electricidad",
    "Servicios mecánicos, herrería, plomería",
    "Servicios generales de restauración y remodelación de edificaciones y fachadas",
    "Servicio de pintura y mantenimiento de áreas verdes",
    "Mantenimiento de carreteras y avenidas, aceras y brocales",
    "Servicios de Asesoría e inspección",
    "Desarrollo de Proyectos habitacionales y comerciales",
    "Reparación y remodelación de casas tráiler",
    "Desarrollo y mantenimiento de áreas verdes",
    "Formación y capacitaciones para Inspectores de Obras, inspección de cuatro puntos, de casa tráiler, spa, piscina y jacuzzi",
    "Aire acondicionado y refrigeración industrial y comercial y residencial"
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
    { id: 1, title: "Complejo Industrial Sur", category: "Industria", img: proj1 },
    { id: 2, title: "Planta Procesadora", category: "Industria", img: proj2 },
    { id: 3, title: "Centro de Distribución", category: "Industria", img: proj3 },
    { id: 4, title: "Fábrica de Manufactura", category: "Industria", img: proj4 },
    { id: 5, title: "Instalaciones Industriales", category: "Industria", img: proj5 },
    { id: 6, title: "Complejo Logístico", category: "Industria", img: proj6 },
    { id: 7, title: "Remodelación Residencial Moderna", category: "Remodelación", img: remod1 },
    { id: 8, title: "Renovación Cocina y Baño", category: "Remodelación", img: remod2 },
    { id: 9, title: "Ampliación de Espacios", category: "Remodelación", img: remod3 },
    { id: 10, title: "Reforma Integral", category: "Remodelación", img: remod4 },
    { id: 11, title: "Casa Tráiler Personalizada 1", category: "Casas Trailes", img: trailer1 },
    { id: 12, title: "Casa Tráiler Personalizada 2", category: "Casas Trailes", img: trailer2 },
    { id: 13, title: "Casa Tráiler Personalizada 3", category: "Casas Trailes", img: trailer3 },
    { id: 14, title: "Casa Tráiler Personalizada 4", category: "Casas Trailes", img: trailer4 },
    { id: 15, title: "Casa Tráiler Personalizada 5", category: "Casas Trailes", img: trailer5 },
    { id: 16, title: "Casa Tráiler Personalizada 6", category: "Casas Trailes", img: trailer6 },
    { id: 17, title: "Casa Tráiler Personalizada 7", category: "Casas Trailes", img: trailer7 },
    { id: 18, title: "Casa Tráiler Personalizada 8", category: "Casas Trailes", img: trailer8 },
    { id: 19, title: "Casa Tráiler Personalizada 9", category: "Casas Trailes", img: trailer9 },
    { id: 20, title: "Casa Tráiler Personalizada 10", category: "Casas Trailes", img: trailer10 },
    { id: 21, title: "Casa Tráiler Personalizada 11", category: "Casas Trailes", img: trailer11 },
    { id: 22, title: "Casa Tráiler Personalizada 12", category: "Casas Trailes", img: trailer12 },
    { id: 23, title: "Casa Tráiler Personalizada 13", category: "Casas Trailes", img: trailer13 },
    { id: 24, title: "Casa Tráiler Personalizada 14", category: "Casas Trailes", img: trailer14 },
    { id: 25, title: "Casa Tráiler Personalizada 15", category: "Casas Trailes", img: trailer15 },
    { id: 26, title: "Casa Tráiler Personalizada 16", category: "Casas Trailes", img: trailer16 },
    { id: 27, title: "Casa Tráiler Personalizada 17", category: "Casas Trailes", img: trailer17 },
    { id: 28, title: "Casa Tráiler Personalizada 18", category: "Casas Trailes", img: trailer18 },
    { id: 29, title: "Casa Tráiler Personalizada 19", category: "Casas Trailes", img: trailer19 },
    { id: 30, title: "Casa Familiar Contemporánea", category: "Casas", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600" },
    { id: 31, title: "Residencia Moderna", category: "Casas", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600" },
    { id: 32, title: "Centro Empresarial Orinoco", category: "Edificios", img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=600" },
    { id: 33, title: "Edificio Corporativo", category: "Edificios", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" },
  ],
  testimonials: [
    { id: 1, name: 'Gabriel Denis', role: 'Chairman, OKT', quote: 'Excelente servicio y ejecución de obra. Nuestro proyecto se entregó a tiempo y con alta calidad.', img: logoImg2 },
    { id: 2, name: 'Weldon Cash', role: 'CFO, First Choice', quote: 'Profesionales en cada fase del proyecto. Comunicación clara, entregables puntuales y soporte continuo.', img: logoImg },
    { id: 3, name: 'Minter Puchan', role: 'Director, AKT', quote: 'Recomiendo BlackRock Guayana por su experiencia técnica y compromiso con la seguridad y el detalle.', img: logoImg2 },
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
    ],
    
  },
  team: [
    {
      id: 1,
      name: "Juan Pérez",
      role: "Director General",
      experience: "15 años",
      specialization: "Obras Civiles",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "María González",
      role: "Jefa de Inspección",
      experience: "12 años",
      specialization: "Inspección de Obras",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      role: "Supervisor de Construcción",
      experience: "10 años",
      specialization: "Construcción Residencial",
      image: "/api/placeholder/300/300"
    }
  ]
};

export const QUIZ_QUESTIONS = [
  { question: "¿Cuál es el ensayo principal para determinar la resistencia a la compresión del concreto?", options: ["Ensayo Proctor", "Rotura de cilindros a los 28 días", "Ensayo de tracción indirecta", "Prueba de asentamiento (Slump)"], correct: 1 },
  { question: "En la inspección de soldaduras estructurales, ¿cuál es un método no destructivo (END) comúnmente utilizado?", options: ["Líquidos Penetrantes", "Prueba de flexión", "Macrografía", "Ensayo de impacto Charpy"], correct: 0 },
];