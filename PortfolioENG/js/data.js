/**
 * Pedro Barrante Vázquez — CV data (English)
 * Single source of content. Based on the provided résumé.
 * Page sections are rendered from this data.
 */
window.CV = {
  profile: {
    name: 'Pedro Barrante Vázquez',
    handle: '@cxctxs_jxck',
    role: 'Computer Technician | Development & Technical Support',
    location: 'Seville, Spain',
    status: 'Seeking my first professional opportunity',
    bio: 'Computer technician specialized in Microcomputer Systems and Networks (SMR), with higher education in Cross-Platform Application Development (DAM). Practical experience in Windows systems support and configuration, as well as in software development and technical documentation. Seeking my first professional opportunity to apply my problem-solving skills and keep growing in the tech sector.',
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
    sistemas: ['Windows Administration', 'PC Assembly', 'Networking'],
    programacion: ['Java', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'XML'],
    herramientas: ['Unity', 'VSCode', 'Git', 'Microsoft Office', 'AI Tools'],
  },

  // Icon (scripts.js key) per skill
  skillIcons: {
    'Windows Administration': 'windows',
    'PC Assembly': 'pc',
    'Networking': 'network',
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
    'AI Tools': 'ai',
  },

  // Category titles (used by the résumé page)
  skillsGroups: [
    { id: 'sistemas', title: 'Systems & Infrastructure' },
    { id: 'programacion', title: 'Programming' },
    { id: 'herramientas', title: 'Tools & Environments' },
  ],

  marquee: [
    { label: 'Systems & Programming', group: ['sistemas', 'programacion'] },
    { label: 'Tools', group: ['herramientas'], reverse: true },
  ],

  experience: [
    {
      company: 'Fundación MEDAC',
      role: 'Unity & C# Developer',
      type: 'DAM Internship',
      badge: 'Internship',
      dates: 'Mar 2025 — Jun 2025',
      location: 'Seville',
      status: 'past',
      bullets: [
        'Writing detailed technical documentation about the project development processes.',
        'Collaborating within the development team workflow using Unity.',
        'Developing user interface elements through C# scripting.',
      ],
    },
    {
      company: 'DIGI Alcosa',
      role: 'Computer Technician',
      type: 'SMR Internship',
      badge: 'Internship',
      dates: 'Oct 2022 — Dec 2022',
      location: 'Seville',
      status: 'past',
      bullets: [
        'Software configuration and installation of Windows operating systems and user applications.',
        'Basic technical support and resolution of common software issues on office equipment.',
        'Support with inventory management and administrative tasks in the IT department.',
      ],
    },
  ],

  education: [
    {
      tag: 'CFGS',
      title: 'Cross-Platform Application Development',
      school: 'Davante MEDAC Sevilla Este',
      dates: '2023 — 2025',
    },
    {
      tag: 'CFGM',
      title: 'Microcomputer Systems and Networks',
      school: 'IES Ramón del Valle Inclán',
      dates: '2019 — 2022',
    },
    {
      tag: 'ESO',
      title: 'Compulsory Secondary Education',
      school: 'C.C. Santa María de los Reyes',
      dates: '2019',
    },
  ],

  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Intermediate (no official certification)' },
  ],

  // ── About (professional profile page) ─────────────────────────────────
  about: {
    intro:
      'Professional profile of Pedro Barrante Vázquez: a path from systems (SMR) to application development (DAM), with a hybrid profile between technical support and software development.',
    journey: [
      {
        period: '2019',
        title: 'ESO — C.C. Santa María de los Reyes',
        desc: 'Basic education in Seville.',
      },
      {
        period: '2019 – 2022',
        title: 'CFGM — Microcomputer Systems and Networks (SMR)',
        desc: 'IES Ramón del Valle Inclán. Foundation in systems, networking and technical support.',
      },
      {
        period: '2022',
        title: 'Computer Technician — SMR Internship',
        desc: 'DIGI Alcosa. Windows systems support and configuration in office environments.',
      },
      {
        period: '2023 – 2025',
        title: 'CFGS — Cross-Platform Application Development (DAM)',
        desc: 'Davante MEDAC Sevilla Este. The leap into software development.',
      },
      {
        period: '2025',
        title: 'Unity & C# Developer — DAM Internship',
        desc: 'Fundación MEDAC. UI development with C# and technical documentation in a team.',
      },
      {
        period: 'Now',
        title: 'Seeking my first professional opportunity',
        desc: 'Goal: applying the combination of technical support and development in the tech sector.',
      },
    ],
    goals: [
      'Land my first professional opportunity in the tech sector.',
      'Apply my problem-solving skills in real environments.',
      'Keep growing in technical support and software development.',
    ],
    areas: [
      { title: 'Systems & Infrastructure', skills: ['Windows Administration', 'PC Assembly', 'Networking'] },
      { title: 'Programming', skills: ['Java', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'XML'] },
      { title: 'Tools & Environments', skills: ['Unity', 'VSCode', 'Git', 'Microsoft Office', 'AI Tools'] },
    ],
    context:
      'Technical profile with dual education: microcomputer systems (SMR) and application development (DAM). Practical experience in Windows support (DIGI Alcosa) and in development with Unity and C# (Fundación MEDAC). A combination of technical support, documentation and software development.',
  },

  // ── Lab (technical space: experiments and in-development projects) ────
  lab: {
    intro:
      'A technical space for experiments, automations and in-development projects. Each entry shows whether it is finished or in progress.',
    items: [
      {
        id: 'python-bot',
        name: 'Python Bot',
        status: 'wip',
        category: 'Automation',
        desc: 'Development of automations using a Python bot. Ongoing project, developed with AI tool assistance.',
        tech: ['Python', 'Automation', 'AI'],
        repo: 'https://github.com/LostSleepy/cxctxsjxckbot',
        live: null,
      },
      {
        id: 'wiki-jjk',
        name: 'Jujutsu Kaisen Wiki',
        status: 'done',
        category: 'Web',
        desc: 'Personal fan-made wiki of the Jujutsu Kaisen universe (by Gege Akutami): characters, cursed techniques and the world timeline.',
        tech: ['HTML', 'CSS', 'GitHub Pages'],
        repo: 'https://github.com/LostSleepy/LostSleepy.github.io',
        live: 'https://lostsleepy.github.io/',
      },
      // ── Hardware / ESP32 ──────────────────────────────────────────────
      // Awaiting a real project (status, description, technologies) before
      // documenting it without inventing anything. When data is available,
      // add an entry like the ones above, for example:
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
      // Awaiting real information (status, technologies, features).
    ],
  },

  // Featured projects (Home page)
  projects: [
    {
      id: 'web-cv',
      name: 'Personal Web-CV',
      banner: 'lostsleepy.github.io/pagina-web-cv',
      desc: 'Personal résumé website published on GitHub Pages, demonstrating publishing and technical documentation skills, with a design optimized using AI tools.',
      tech: ['HTML', 'CSS', 'GitHub Pages', 'AI'],
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
    projectsDir: '~/projects/',
    techLabel: 'Built with',
    code: 'code',
    demo: 'demo',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    whatsapp: 'WhatsApp',
    labDone: 'Done',
    labWip: 'In development',
    labView: 'View lab',
    copyYear: '© {year} Pedro Barrante Vázquez',
  },
};
