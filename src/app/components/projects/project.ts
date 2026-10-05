import { Project } from './interfaces/projects.interfaces';

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: 'assets/proyectos/agenda.avif',
    image_carrusel: ['assets/carrusel/agenda/agenda_1.jpeg', 'assets/carrusel/agenda/agenda_2.jpeg', 'assets/carrusel/agenda/agenda_3.jpeg', 'assets/carrusel/agenda/agenda_4.jpeg', 'assets/carrusel/agenda/agenda_5.jpeg', 'assets/carrusel/agenda/agenda_6.jpeg', 'assets/carrusel/agenda/agenda_7.jpeg', 'assets/carrusel/agenda/agenda_8.jpeg'],
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'JWT', 'MySQL', 'Docker', 'FullCalendar', 'Postman', 'Swagger', 'JPA', 'Hibernate'],
    github: 'https://github.com/EzequielSineriz/Back-Estetica-Agenda-Suscripciones',
    featured: true,
    demo: 'https://healthestetica.com/auth/login',
    i18n: {
      es: {
        title: 'Agenda Virtual',
        subtitle: 'Sistema de gestión de turnos, cursos y clientes',
        description: 'Aplicación web para administrar inscripcion a cursos de estetica y turnos integrando Mercadopago y notificaciones por correo electrónico.',
        challenge: [
          'Evitar la superposición de turnos y mantener la consistencia de la agenda.',
          'Vincular clientes con sus turnos de manera eficiente y segura.',
          'Implementar nuevas librerías (FullCalendar) y frameworks (Spring Boot) para implementar la solución.',
        ],
        solution: 'Implementé reglas de negocio en Spring Boot para validar disponibilidad y gestionar relaciones entre clientes y turnos.',
      },
      en: {
        title: 'Virtual Agenda',
        subtitle: 'Appointment, course and client management system',
        description: 'Web application to manage aesthetics course enrollment and appointments, integrating Mercado Pago and email notifications.',
        challenge: [
          'Avoiding overlapping appointments and keeping the schedule consistent.',
          'Linking clients to their appointments efficiently and securely.',
          'Learning and adopting new libraries (FullCalendar) and frameworks (Spring Boot) to build the solution.',
        ],
        solution: 'I implemented business rules in Spring Boot to validate availability and manage the relationships between clients and appointments.',
      },
    },
  },
  {
    id: 2,
    image: 'assets/proyectos/alien.jpg',
    image_carrusel: ['assets/carrusel/paranormal/paranormal_1.png', 'assets/carrusel/paranormal/paranormal_2.png', 'assets/carrusel/paranormal/paranormal_3.png', 'assets/carrusel/paranormal/paranormal_4.png', 'assets/carrusel/paranormal/paranormal_5.png', 'assets/carrusel/paranormal/paranormal_6.png', 'assets/carrusel/paranormal/paranormal_7.png', 'assets/carrusel/paranormal/paranormal_8.png'],
    technologies: ['Angular', 'Node', 'TypeScript', 'Nest.js', 'JWT', 'MongoDB', 'TailwindCSS', 'Postman', 'Mongoose', 'PWA'],
    github: 'https://github.com/EzequielSineriz/Ezequiel-Si-eriz-TP2-PROG4-2026-C1',
    featured: true,
    demo: 'https://red-social-front-swart.vercel.app/auth/login',
    i18n: {
      es: {
        title: 'Paranormal Social Network',
        subtitle: 'Comunidad de eventos y mitos urbanos',
        description: 'Red social interactiva dedicada a la discusión, reporte y mapeo de fenómenos paranormales y leyendas urbanas.',
        challenge: [
          'Mantener una navegación fluida y reactiva al cargar hilos de discusión densos.',
          'Configuracion de Permisos para usuarios y moderadores, asegurando la integridad de la comunidad.',
          'Panel Administrativo para gestionar reportes, usuarios y contenido de manera eficiente.',
          'Lograr una experiencia de usuario inmersiva y atractiva, con un diseño visual que refleje la temática paranormal.',
        ],
        solution: 'Implementé una arquitectura basada en componentes reactivos de Angular, utilizando estados optimizados y un diseño visual con efectos neón y animaciones sutiles para sumergir al usuario en la temática.',
      },
      en: {
        title: 'Paranormal Social Network',
        subtitle: 'Community for paranormal events and urban myths',
        description: 'Interactive social network dedicated to discussing, reporting and mapping paranormal phenomena and urban legends.',
        challenge: [
          'Keeping navigation smooth and reactive when loading dense discussion threads.',
          'Configuring permissions for users and moderators, ensuring the integrity of the community.',
          'Building an admin panel to manage reports, users and content efficiently.',
          'Delivering an immersive and engaging user experience, with a visual design that reflects the paranormal theme.',
        ],
        solution: 'I implemented an architecture based on reactive Angular components, using optimized state and a visual design with neon effects and subtle animations to immerse the user in the theme.',
      },
    },
  },
  {
    id: 3,
    image: 'assets/proyectos/banking.jpg',
    image_carrusel: ['assets/carrusel/bank/bank1.png', 'assets/carrusel/bank/bank2.png', 'assets/carrusel/bank/bank3.png'],
    technologies: ['Mainframe', 'Cobol', 'Java', 'JCL', 'Spring Boot', 'Angular'],
    github: 'https://github.com/EzequielSineriz/Core-Banking-Batch-Advanced',
    featured: true,
    i18n: {
      es: {
        title: 'Core Banking Batch & Audit System (COBOL)',
        subtitle: 'Flujo End-to-End de Modernización de Core Banking',
        description: 'Este proyecto demuestra un flujo End-to-End de Modernización de Core Banking, integrando sistemas batch legados de procesamiento transaccional en COBOL/JCL con microservicios en Java 21 / Spring Boot bajo Arquitectura Hexagonal, expuestos hacia un dashboard de auditoría y monitoreo reactivo en Angular con Signals..',
        challenge: [
          'Gestionar la lectura en tiempo real del estado de saldos y trazabilidad de auditoria.',
        ],
        solution: 'Implementar el ambiente de SpringBoot para servir de utileria para leer los datos previamente transaccionados.',
      },
      en: {
        title: 'Core Banking Batch & Audit System (COBOL)',
        subtitle: 'End-to-End Core Banking Modernization Flow',
        description: 'This project demonstrates an End-to-End Core Banking Modernization flow, integrating legacy transactional batch systems written in COBOL/JCL with Java 21 / Spring Boot microservices following a Hexagonal Architecture, exposed to a reactive audit and monitoring dashboard built in Angular with Signals.',
        challenge: [
          'Handling real-time reading of account balances and audit traceability.',
        ],
        solution: 'I set up a Spring Boot environment that works as a utility service to read previously processed transactional data.',
      },
    },
  },
  {
    id: 4,
    image: 'assets/proyectos/dualplay.webp',
    image_carrusel: ['assets/carrusel/dualplay/dualplay_2.png', 'assets/carrusel/dualplay/dualplay_4.png', 'assets/carrusel/dualplay/dualplay_5.png', 'assets/carrusel/dualplay/dualplay_6.png'],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'SQLite', 'Express', 'EJS', 'TailwindCSS', 'Zod'],
    github: 'https://github.com/EzequielSineriz/DualPlayTP',
    featured: true,
    i18n: {
      es: {
        title: 'DualPlay',
        subtitle: 'E-commerce de videojuegos y mesa',
        description: 'Plataforma integral para la preventa y venta de videojuegos digitales y juegos de mesa físicos con catálogo dinámico.',
        challenge: [
          'Estructurar un modelo de datos flexible para productos con características totalmente distintas (licencias digitales vs. stock físico).',
        ],
        solution: 'Diseñé e implementé un sistema de gestión minorista con persistencia relacional con sqlite, modelando eficientemente las entidades de Productos, Clientes y Ventas.',
      },
      en: {
        title: 'DualPlay',
        subtitle: 'Video game and board game e-commerce',
        description: 'Comprehensive platform for pre-sale and sale of digital video games and physical board games with a dynamic catalog.',
        challenge: [
          'Structuring a flexible data model for products with completely different characteristics (digital licenses vs. physical stock).',
        ],
        solution: 'I designed and implemented a retail management system with relational persistence in SQLite, efficiently modeling the Products, Customers and Sales entities.',
      },
    },
  },
  {
    id: 5,
    image: 'assets/proyectos/tuapp.jpg',
    image_carrusel: ['assets/carrusel/tuapp/tuapp_1.png', 'assets/carrusel/tuapp/tuapp_2.png', 'assets/carrusel/tuapp/tuapp_3.png', 'assets/carrusel/tuapp/tuapp_4.png', 'assets/carrusel/tuapp/tuapp_5.png'],
    technologies: ['Angular', 'Javascript', 'CSS3', 'TailwindCSS', 'Hostinger', 'Responsive Design', 'SEO'],
    github: '',
    featured: true,
    demo: 'https://tuappweb.com/',
    i18n: {
      es: {
        title: 'TUAPP Web',
        subtitle: 'Landing Page Corporativa',
        description: 'Sitio web corporativo e institucional enfocado en la conversión y presentación de servicios de desarrollo de software.',
        challenge: [
          'Lograr una excelente velocidad de carga, posicionamiento SEO óptimo y una interfaz moderna de alto impacto visual.',
        ],
        solution: 'Desarrollé una interfaz altamente optimizada implementando componentes modulares en Angular, estilos personalizados con estética glassmorphic y despliegue exitoso mediante configuraciones de servidor .htaccess.',
      },
      en: {
        title: 'TUAPP Web',
        subtitle: 'Corporate Landing Page',
        description: 'Corporate and institutional website focused on conversion and on presenting software development services.',
        challenge: [
          'Achieving excellent loading speed, optimal SEO ranking and a modern, high-impact visual interface.',
        ],
        solution: 'I developed a highly optimized interface using modular Angular components, custom glassmorphic styling and a successful deployment through .htaccess server configuration.',
      },
    },
  },
  {
    id: 6,
    image: 'assets/proyectos/estetica.jpg',
    image_carrusel: ['assets/carrusel/health/health_1.jpeg', 'assets/carrusel/health/health_2.jpeg', 'assets/carrusel/health/health_3.jpeg'],
    technologies: ['Angular', 'Javascript', 'CSS3', 'TailwindCSS', 'Responsive Design', 'SEO'],
    github: 'https://github.com/EzequielSineriz/AgendaVirtual-y-Landing',
    featured: true,
    demo: 'https://healthestetica.com/home',
    i18n: {
      es: {
        title: 'Health Estética',
        subtitle: 'Landing Page & Conversión',
        description: 'Sitio web corporativo y de captura de leads desarrollado para una clínica de estética y bienestar, enfocado en destacar tratamientos y optimizar el agendamiento de consultas.',
        challenge: [
          'Diseñar una interfaz de alta gama, limpia y minimalista que transmita confianza y profesionalismo, garantizando una carga ultra rápida y adaptabilidad móvil total.',
        ],
        solution: 'Desarrollé la landing page implementando una arquitectura modular, optimizando los recursos visuales para mejorar la velocidad de carga y asegurando un diseño completamente responsive e intuitivo para los pacientes.',
      },
      en: {
        title: 'Health Estética',
        subtitle: 'Landing Page & Conversion',
        description: 'Corporate and lead-capture website developed for an aesthetics and wellness clinic, focused on highlighting treatments and optimizing appointment booking.',
        challenge: [
          'Designing a high-end, clean and minimalist interface that conveys trust and professionalism, ensuring ultra-fast loading and full mobile adaptability.',
        ],
        solution: 'I built the landing page with a modular architecture, optimizing visual assets to improve loading speed and ensuring a fully responsive, intuitive design for patients.',
      },
    },
  },
  {
    id: 7,
    image: 'assets/carrusel/space/portada_1.jpg',
    image_carrusel: ['assets/carrusel/space/space_1.png', 'assets/carrusel/space/space_2.png', 'assets/carrusel/space/space_3.png', 'assets/carrusel/space/space_4.png', 'assets/carrusel/space/space_5.png', 'assets/carrusel/space/space_6.png'],
    technologies: ['Angular', 'Supabase', 'TypeScript', 'WebSockets', 'CSS Animations'],
    github: 'https://github.com/EzequielSineriz/EzequielSineriz-TP1-PROG4-2026-C1',
    featured: true,
    i18n: {
      es: {
        title: 'Space Odyssey GAMES',
        subtitle: 'Sistema de mensajeria en tiempo real para comunidad gamer, y 4 juegos interactivos',
        description: 'Plataforma y red social temática para la comunidad gamer con interacciones y mensajería en tiempo real.',
        challenge: [
          'Gestionar la sincronización instantánea de datos y estados de la comunidad sin sobrecargar el servidor.',
        ],
        solution: 'Implementé un servicio de chat e interacciones en vivo utilizando los canales en tiempo real de Supabase (Realtime Subscriptions).',
      },
      en: {
        title: 'Space Odyssey GAMES',
        subtitle: 'Real-time messaging system for the gamer community, plus 4 interactive games',
        description: 'Themed platform and social network for the gamer community with real-time interactions and messaging.',
        challenge: [
          'Managing instant synchronization of community data and state without overloading the server.',
        ],
        solution: 'I implemented a live chat and interactions service using Supabase real-time channels (Realtime Subscriptions).',
      },
    },
  },
];
