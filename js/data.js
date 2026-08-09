/**
 * Pedro Barrante Vázquez — Datos del CV (español)
 * Fuente única de contenido. Basado en el CV proporcionado.
 * Las secciones de las páginas se renderizan desde estos datos.
 */
window.CV = {
  profile: {
    name: 'Pedro Barrante Vázquez',
    handle: '@cxctxs_jxck',
    role: 'Técnico Informático | Desarrollo y Soporte Técnico',
    location: 'Sevilla, España',
    status: 'Busco mi primera oportunidad profesional',
    bio: 'Técnico informático especializado en Sistemas Microinformáticos y Redes (SMR), con formación superior en Desarrollo de Aplicaciones Multiplataforma (DAM). Experiencia práctica en soporte y configuración de sistemas Windows, así como en desarrollo de software y documentación técnica. Busco mi primera oportunidad profesional para aplicar mis habilidades de resolución de problemas y seguir creciendo en el sector tecnológico.',
    avatar: 'assets/profile.png',
    email: 'pedrobarrantevazquez@gmail.com',
    phone: '+34 667 249 043',
    github: 'https://github.com/LostSleepy',
    linkedin: 'https://www.linkedin.com/in/pedrobarrantevazquez/',
    cv: 'https://lostsleepy.github.io/pagina-web-cv',
  },

  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/LostSleepy', icon: 'github' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/pedrobarrantevazquez/', icon: 'linkedin' },
    { id: 'email', label: 'Email', url: 'mailto:pedrobarrantevazquez@gmail.com', icon: 'mail' },
  ],

  skills: {
    sistemas: ['Administración de Windows', 'Montaje de PC', 'Redes'],
    programacion: ['Java', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'XML'],
    herramientas: ['Unity', 'VSCode', 'Git', 'Microsoft Office', 'Herramientas de IA'],
  },

  // Icono (clave de scripts.js) por habilidad
  skillIcons: {
    'Administración de Windows': 'windows',
    'Montaje de PC': 'pc',
    'Redes': 'network',
    'Java': 'java',
    'C#': 'csharp',
    'SQL': 'sql',
    'HTML': 'html',
    'CSS': 'css',
    'JavaScript': 'javascript',
    'XML': 'xml',
    'Unity': 'unity',
    'VSCode': 'vscode',
    'Git': 'git',
    'Microsoft Office': 'office',
    'Herramientas de IA': 'ai',
  },

  // Títulos de las categorías (los usa la página CV)
  skillsGroups: [
    { id: 'sistemas', title: 'Sistemas e infraestructura' },
    { id: 'programacion', title: 'Programación' },
    { id: 'herramientas', title: 'Herramientas y entornos' },
  ],

  marquee: [
    { label: 'Sistemas & Programación', group: ['sistemas', 'programacion'] },
    { label: 'Herramientas', group: ['herramientas'], reverse: true },
  ],

  experience: [
    {
      company: 'Fundación MEDAC',
      role: 'Desarrollador Unity y C#',
      type: 'Prácticas DAM',
      badge: 'Prácticas',
      dates: 'Mar 2025 — Jun 2025',
      location: 'Sevilla',
      status: 'past',
      bullets: [
        'Redacción de documentación técnica detallada sobre los procesos de desarrollo del proyecto.',
        'Colaboración dentro del flujo de trabajo del equipo de desarrollo utilizando Unity.',
        'Desarrollo de elementos de interfaz de usuario mediante scripting en C#.',
      ],
    },
    {
      company: 'DIGI Alcosa',
      role: 'Técnico Informático',
      type: 'Prácticas SMR',
      badge: 'Prácticas',
      dates: 'Oct 2022 — Dic 2022',
      location: 'Sevilla',
      status: 'past',
      bullets: [
        'Configuración de software e instalación de sistemas operativos Windows y aplicaciones de usuario.',
        'Soporte técnico básico y resolución de incidencias habituales de software en equipos de oficina.',
        'Apoyo en gestión de inventario y tareas administrativas del departamento de TI.',
      ],
    },
  ],

  education: [
    {
      tag: 'CFGS',
      title: 'Desarrollo de Aplicaciones Multiplataforma',
      school: 'Davante MEDAC Sevilla Este',
      dates: '2023 — 2025',
    },
    {
      tag: 'CFGM',
      title: 'Sistemas Microinformáticos y Redes',
      school: 'IES Ramón del Valle Inclán',
      dates: '2019 — 2022',
    },
    {
      tag: 'ESO',
      title: 'Educación Secundaria Obligatoria',
      school: 'C.C. Santa María de los Reyes',
      dates: '2019',
    },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio (sin certificación oficial)' },
  ],

  // ── About (página de perfil profesional) ──────────────────────────────
  about: {
    intro:
      'Perfil profesional de Pedro Barrante Vázquez: trayectoria desde sistemas (SMR) hasta el desarrollo de aplicaciones (DAM), con un perfil híbrido entre soporte técnico y desarrollo de software.',
    journey: [
      {
        period: '2019',
        title: 'ESO — C.C. Santa María de los Reyes',
        desc: 'Formación básica en Sevilla.',
      },
      {
        period: '2019 – 2022',
        title: 'CFGM — Sistemas Microinformáticos y Redes (SMR)',
        desc: 'IES Ramón del Valle Inclán. Base en sistemas, redes y soporte técnico.',
      },
      {
        period: '2022',
        title: 'Técnico Informático — Prácticas SMR',
        desc: 'DIGI Alcosa. Soporte y configuración de sistemas Windows en entornos de oficina.',
      },
      {
        period: '2023 – 2025',
        title: 'CFGS — Desarrollo de Aplicaciones Multiplataforma (DAM)',
        desc: 'Davante MEDAC Sevilla Este. Salto al desarrollo de software.',
      },
      {
        period: '2025',
        title: 'Desarrollador Unity y C# — Prácticas DAM',
        desc: 'Fundación MEDAC. Desarrollo de UI con C# y documentación técnica en equipo.',
      },
      {
        period: 'Actualidad',
        title: 'Buscando mi primera oportunidad profesional',
        desc: 'Objetivo: aplicar la combinación de soporte técnico y desarrollo en el sector tecnológico.',
      },
    ],
    goals: [
      'Conseguir mi primera oportunidad profesional en el sector tecnológico.',
      'Aplicar mis habilidades de resolución de problemas en entornos reales.',
      'Seguir creciendo en soporte técnico y desarrollo de software.',
    ],
    areas: [
      { title: 'Sistemas e infraestructura', skills: ['Administración de Windows', 'Montaje de PC', 'Redes'] },
      { title: 'Programación', skills: ['Java', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'XML'] },
      { title: 'Herramientas y entornos', skills: ['Unity', 'VSCode', 'Git', 'Microsoft Office', 'Herramientas de IA'] },
    ],
    context:
      'Perfil técnico con formación dual: sistemas microinformáticos (SMR) y desarrollo de aplicaciones (DAM). Experiencia práctica en soporte de Windows (DIGI Alcosa) y en desarrollo con Unity y C# (Fundación MEDAC). Combinación de soporte técnico, documentación y desarrollo de software.',
  },

  // ── Lab (espacio técnico: experimentos y proyectos en desarrollo) ─────
  lab: {
    intro:
      'Espacio técnico para experimentos, automatizaciones y proyectos en desarrollo. Cada entrada indica si está terminada o en curso.',
    items: [
      {
        id: 'python-bot',
        name: 'Python Bot',
        status: 'wip',
        category: 'Automatización',
        desc: 'Desarrollo de automatizaciones mediante un bot de Python. Proyecto en curso, desarrollado con asistencia de herramientas de IA.',
        tech: ['Python', 'Automatización', 'IA'],
        repo: 'https://github.com/LostSleepy/cxctxsjxckbot',
        live: null,
      },
      {
        id: 'wiki-jjk',
        name: 'Wiki Jujutsu Kaisen',
        status: 'done',
        category: 'Web',
        desc: 'Wiki personal fan-made del universo de Jujutsu Kaisen (obra de Gege Akutami): personajes, técnicas malditas y cronología del mundo.',
        tech: ['HTML', 'CSS', 'GitHub Pages'],
        repo: 'https://github.com/LostSleepy/LostSleepy.github.io',
        live: 'https://lostsleepy.github.io/',
      },
      // ── Hardware / ESP32 ──────────────────────────────────────────────
      // Pendiente de un proyecto real (estado, descripción y tecnologías)
      // para documentarlo sin inventar nada. Cuando haya datos, añade una
      // entrada como las anteriores, por ejemplo:
      // {
      //   id: 'esp32-lab',
      //   name: '…',
      //   status: 'wip',
      //   category: 'Hardware',
      //   desc: '…',
      //   tech: ['ESP32', '…'],
      //   repo: '…',
      //   live: null,
      // },
      // ── JobRadar AI ───────────────────────────────────────────────────
      // Pendiente de información real (estado, tecnologías y funcionalidades).
    ],
  },

  // Proyectos destacados (página Home)
  projects: [
    {
      id: 'web-cv',
      name: 'Personal Web-CV',
      banner: 'lostsleepy.github.io/pagina-web-cv',
      desc: 'Sitio web de currículum personal publicado en GitHub Pages, que demuestra capacidades de publicación y documentación técnica, con un diseño optimizado mediante herramientas de IA.',
      tech: ['HTML', 'CSS', 'GitHub Pages', 'IA'],
      repo: 'https://github.com/LostSleepy/pagina-web-cv',
      live: null,
      badge: null,
    },
  ],

  footer: {
    city: 'SEV',
    timezone: 'Europe/Madrid',
  },

  labels: {
    projectsDir: '~/proyectos/',
    techLabel: 'Tecnologías',
    code: 'código',
    demo: 'demo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    whatsapp: 'WhatsApp',
    labDone: 'Terminado',
    labWip: 'En desarrollo',
    labView: 'Ver laboratorio',
    copyYear: '© {year} Pedro Barrante Vázquez',
  },
};
