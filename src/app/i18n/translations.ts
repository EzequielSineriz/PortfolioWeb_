export type Lang = 'es' | 'en';

const es = {
  nav: {
    avatarAlt: 'Avatar de Ezequiel Siñeriz',
    about: 'Sobre mí',
    projects: 'Proyectos',
    studies: 'Estudios',
    contact: 'Contacto',
    downloadCv: 'Descargar CV',
    // Cuando tengas el CV en inglés, cambiá la ruta del lado "en"
    cvFile: 'assets/files/CV_EzequielSineriz.pdf',
  },
  hero: {
    description:
      'Soy un desarrollador Full Stack dedicado a crear aplicaciones web modernas, escalables y seguras.',
  },
  about: {
    title: 'Sobre mí',
    lead: 'Soy <strong>Desarrollador Full Stack / Backend</strong> graduado de la <strong>Universidad Tecnológica Nacional (UTN)</strong>. Me apasiona diseñar y construir soluciones de software robustas, creando un puente eficiente entre arquitecturas modernas en la nube y entornos bancarios/legados de alto rendimiento.',
    p2: 'Mi formación académica me brindó una base sólida en programación orientada a objetos, estructuras de datos, arquitecturas escalables y seguridad informática (autenticación y autorización mediante <strong>JWT</strong>). Además, para complementar mi perfil y acelerar mi crecimiento, mantengo un aprendizaje continuo orientado a dominar las tecnologías más demandadas del mercado, integrando herramientas de IA para optimizar mi flujo de trabajo.',
    focusTitle: 'Mi Enfoque',
    focusText:
      'Mi stack principal se centra en <strong>Java / Spring Boot</strong> para soluciones empresariales y <strong>Angular</strong> en el frontend, así como <strong>NestJS</strong> con <strong>Node.js</strong> y <strong>MongoDB</strong>. Actualmente, enfoco mi especialización en conectar la potencia transaccional del backend moderno con el mundo <strong>Mainframe (COBOL, JCL)</strong>, facilitando la convivencia, migración y consumo de servicios legados a través de APIs REST escalables.',
    devopsTitle: 'Ecosistema, Seguridad y DevOps',
    devopsText:
      'Garantizo la calidad del código mediante testing automatizado con <strong>JUnit</strong>, <strong>Jest</strong> y <strong>Postman</strong>. Implemento seguridad avanzada mediante <strong>JWT</strong> bajo conexiones <strong>HTTPS</strong>. Cuento con experiencia en entornos <strong>Linux</strong>, contenedores con <strong>Docker</strong>, mensajería asíncrona mediante <strong>Apache Kafka / RabbitMQ</strong>, procesamiento batch y la integración de <strong>herramientas de Inteligencia Artificial</strong> para optimizar el ciclo de desarrollo.',
    closing:
      'Para mí, el software de calidad trasciende las tecnologías: se trata de construir puentes técnicos sólidos, modernizar sistemas críticos y aportar valor real y continuo a las personas y a la organización.',
  },
  projects: {
    title: 'Proyectos Desarrollados',
    viewDetails: 'Ver detalles →',
    challenge: 'Desafío',
    solution: 'Mi Solución',
    technologies: 'Tecnologías',
  },
  studies: {
    title: 'Estudios y Formación',
    utnBadge: 'Prestigio Académico',
    utnName: 'Universidad Tecnológica Nacional',
    utnDegree: 'Tecnicatura en Programación',
    utnAchievement: 'Premios ILAN a la Innovación Universitaria',
    utnDescription:
      'Formación integral con un fuerte enfoque en arquitectura de software, gestión de proyectos tecnológicos de alta complejidad y sólidas bases éticas profesionales.',
    utnLink: 'Visitar sitio oficial',
    todoBadge: 'Especialización Tech',
    todoName: 'TodoAcademy',
    todoDegree: 'Full-Stack Developer & Modern Web Architectures',
    todoAchievement: 'Graduado con Honores - Desarrollo Basado en Proyectos Reales',
    todoDescription:
      'Especialización intensiva enfocada en la construcción de aplicaciones web de alto rendimiento utilizando tecnologías modernas de vanguardia, flujos CI/CD y bases de datos escalables.',
    todoLink: 'Plataforma TodoAcademy',
  },
  contact: {
    title: 'Contactame',
    subtitle:
      '¿Listo para hablar sobre tu próximo proyecto o explorar oportunidades de colaboración? Me encantaría saber de ti y explorar cómo podemos construir algo juntos.',
    formTitle: 'Enviame un Mensaje',
    nameLabel: 'Nombre',
    namePlaceholder: 'Nombre o Compañía',
    emailPlaceholder: 'tu_email@gmail.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Hablame de tu proyecto, ideas o cualquier consulta que tengas.',
    sending: 'Enviando...',
    send: 'Enviar Mensaje',
    success: '¡Mensaje enviado con éxito! Gracias por contactarme.',
    error: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
    infoTitle: 'Información de Contacto',
    locationLabel: 'Locación',
    location: 'Buenos Aires, Argentina',
    socialTitle: 'Seguime en mis Redes',
    bannerTitle: 'Abierto a Nuevas Oportunidades',
    bannerText:
      'Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. Hablemos sobre cómo puedo contribuir al éxito de tu equipo.',
  },
};

// Obliga a que "en" tenga EXACTAMENTE las mismas claves que "es"
export type Translations = typeof es;

const en: Translations = {
  nav: {
    avatarAlt: 'Ezequiel Siñeriz avatar',
    about: 'About me',
    projects: 'Projects',
    studies: 'Education',
    contact: 'Contact',
    downloadCv: 'Download CV',
    // Cuando tengas el CV en inglés, poné acá su ruta (ej: 'assets/files/CV_EzequielSineriz_EN.pdf')
    cvFile: 'assets/files/CV_EzequielSineriz.pdf',
  },
  hero: {
    description:
      "I'm a Full Stack developer dedicated to building modern, scalable and secure web applications.",
  },
  about: {
    title: 'About me',
    lead: "I'm a <strong>Full Stack / Backend Developer</strong> who graduated from the <strong>National Technological University (UTN)</strong>. I'm passionate about designing and building robust software solutions, creating an efficient bridge between modern cloud architectures and high-performance banking/legacy environments.",
    p2: 'My academic background gave me a solid foundation in object-oriented programming, data structures, scalable architectures and software security (authentication and authorization using <strong>JWT</strong>). To complement my profile and accelerate my growth, I keep learning continuously to master the most in-demand technologies on the market, integrating AI tools to optimize my workflow.',
    focusTitle: 'My Focus',
    focusText:
      'My main stack centers on <strong>Java / Spring Boot</strong> for enterprise solutions and <strong>Angular</strong> on the frontend, as well as <strong>NestJS</strong> with <strong>Node.js</strong> and <strong>MongoDB</strong>. I am currently focusing my specialization on connecting the transactional power of the modern backend with the <strong>Mainframe (COBOL, JCL)</strong> world, enabling coexistence, migration and consumption of legacy services through scalable REST APIs.',
    devopsTitle: 'Ecosystem, Security & DevOps',
    devopsText:
      'I ensure code quality through automated testing with <strong>JUnit</strong>, <strong>Jest</strong> and <strong>Postman</strong>. I implement advanced security using <strong>JWT</strong> over <strong>HTTPS</strong> connections. I have experience with <strong>Linux</strong> environments, <strong>Docker</strong> containers, asynchronous messaging with <strong>Apache Kafka / RabbitMQ</strong>, batch processing, and the integration of <strong>Artificial Intelligence tools</strong> to optimize the development cycle.',
    closing:
      'To me, quality software goes beyond technologies: it is about building solid technical bridges, modernizing critical systems and delivering real, ongoing value to people and organizations.',
  },
  projects: {
    title: 'Featured Projects',
    viewDetails: 'View details →',
    challenge: 'Challenge',
    solution: 'My Solution',
    technologies: 'Technologies',
  },
  studies: {
    title: 'Education & Training',
    utnBadge: 'Academic Excellence',
    utnName: 'National Technological University (UTN)',
    utnDegree: 'Associate Degree in Programming',
    utnAchievement: 'ILAN Awards for University Innovation',
    utnDescription:
      'Comprehensive training with a strong focus on software architecture, management of highly complex technology projects and solid professional ethics.',
    utnLink: 'Visit official website',
    todoBadge: 'Tech Specialization',
    todoName: 'TodoAcademy',
    todoDegree: 'Full-Stack Developer & Modern Web Architectures',
    todoAchievement: 'Graduated with Honors - Real-World, Project-Based Development',
    todoDescription:
      'Intensive specialization focused on building high-performance web applications using cutting-edge modern technologies, CI/CD pipelines and scalable databases.',
    todoLink: 'TodoAcademy Platform',
  },
  contact: {
    title: 'Contact Me',
    subtitle:
      "Ready to talk about your next project or explore collaboration opportunities? I'd love to hear from you and discuss how we can build something great together.",
    formTitle: 'Send Me a Message',
    nameLabel: 'Name',
    namePlaceholder: 'Name or Company',
    emailPlaceholder: 'your_email@gmail.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about your project, ideas or any questions you have.',
    sending: 'Sending...',
    send: 'Send Message',
    success: 'Message sent successfully! Thank you for reaching out.',
    error: 'There was an error sending the message. Please try again.',
    infoTitle: 'Contact Information',
    locationLabel: 'Location',
    location: 'Buenos Aires, Argentina',
    socialTitle: 'Follow Me',
    bannerTitle: 'Open to New Opportunities',
    bannerText:
      "I'm currently available for freelance projects and full-time opportunities. Let's talk about how I can contribute to your team's success.",
  },
};

export const TRANSLATIONS: Record<Lang, Translations> = { es, en };
