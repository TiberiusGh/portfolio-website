export type ExperienceEntry = {
  role: string
  company: string
  start: string
  end: string
  location: string
  description: string
  previousRole?: {
    title: string
    period: string
  }
}

export type SkillCategory = {
  label: string
  items: string[]
}

export type EducationEntry = {
  institution: string
  program: string
  period: string
}

export type ContactLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email'
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  links: ProjectLink[]
}

export const profile = {
  name: 'tiberius gherac',
  location: 'Kalmar, Sweden',
  github: 'https://github.com/TiberiusGh',
  linkedin: 'https://www.linkedin.com/in/tiberius-gh',
  email: 'tiberius.gherac@gmail.com',
  repoUrl: 'https://github.com/TiberiusGh/portfolio-website'
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Developer',
    company: 'Sourceful Energy',
    start: 'Sept 2025',
    end: 'Jan 2026',
    location: 'Kalmar, Sweden',
    description:
      'Contributed to mobile app development supporting the mission to build the coordination layer for the world’s distributed energy system.'
  },
  {
    role: 'Registered Nurse',
    company: 'Region Kalmar län — BUP Akutavdelning',
    start: 'June 2021',
    end: 'Present',
    location: 'Kalmar, Sweden',
    description:
      'Inpatient pediatric psychiatric emergency care. Coordinating with social services and schools alongside medical care for children and adolescents.',
    previousRole: {
      title: 'Skötare (nursing assistant)',
      period: 'Dec 2019 – June 2021'
    }
  }
]

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python']
  },
  {
    label: 'Frameworks & libraries',
    items: ['React', 'Web Components', 'Node.js', 'Astro']
  },
  {
    label: 'Tools & infra',
    items: ['Git', 'Docker', 'Firebase', 'npm', 'GitHub Actions']
  },
  {
    label: 'Currently learning',
    items: ['React', 'TypeScript', 'Astro']
  }
]

export const education: EducationEntry[] = [
  {
    institution: 'Linnéuniversitetet',
    program: 'BSc Computer Science — Web Programming specialization, 180 HP',
    period: '2024–2027'
  },
  {
    institution: 'Linnéuniversitetet',
    program: 'BSc Nursing, 180 HP',
    period: '2018–2021'
  }
]

export const educationNote =
  'I like learning across fields. Before settling on web development, I also took standalone university courses in Generative Programming (Blekinge Tekniska Högskola), Argumentation Analysis (Stockholms universitet), and Basic Finance (Göteborgs universitet) — exploring different ways of thinking before choosing a path.'

export const projects: Project[] = [
  {
    name: 'Screams',
    tagline:
      'Live room loudness from an newbon through ESP32 — no raw audio stored.',
    description:
      'An ESP32-H2 samples a microphone at ~2 kHz and reduces it to one RMS value per second before publishing over MQTT — so the database holds a loudness curve, not reconstructible audio. Telegraf, InfluxDB 3 and Grafana run in Docker on a homeserver; Caddy fronts the dashboard with Cloudflare Access gating owner-only paths for an MQTT-over-WebSocket buzz button.',
    tech: ['C', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'Docker'],
    links: [
      { label: 'Live', href: 'https://screams.tiberiusgh.com' },
      { label: 'GitHub', href: 'https://github.com/TiberiusGh/1dv027-iot' }
    ]
  },
  {
    name: 'Medistat',
    tagline:
      "Personal medication tracking, enriched with Sweden's national prescription statistics.",
    description:
      'Full-stack GraphQL platform over ~46 million rows of open prescription data from Socialstyrelsen. NestJS + Apollo API, a hand-built React 19 dashboard with SVG visualisations (no chart library), Python ETL, GitHub-OAuth-with-PKCE login. Self-hosted behind a Cloudflare tunnel with CI/CD, smoke tests and automatic rollback via GitHub Actions.',
    tech: [
      'TypeScript',
      'NestJS',
      'Apollo',
      'React 19',
      'PostgreSQL',
      'Python',
      'Docker'
    ],
    links: [
      { label: 'Live', href: 'https://medistat.tiberiusgh.com' },
      { label: 'Docs', href: 'https://medistat.tiberiusgh.com/docs/' },
      { label: 'GitHub', href: 'https://github.com/Medistat-Tiberiusgh' }
    ]
  },
  {
    name: 'Memora',
    tagline:
      'Flashcard app with vanilla Web Components and multi-provider auth.',
    description:
      'A flashcard SPA built entirely with native Web Components and Shadow DOM — no framework. Multi-provider Firebase Auth (Google, GitHub, Facebook) with account linking, public and private collections, and Docker-packaged frontend + backend.',
    tech: ['JavaScript', 'Web Components', 'Firebase', 'Vite', 'Docker'],
    links: [
      { label: 'Live', href: 'https://memora.tiberiusgh.com' },
      { label: 'GitHub', href: 'https://github.com/Memora-Tiberiusgh' }
    ]
  },
  {
    name: 'Magic Wand',
    tagline: 'Wave-controlled smart-plug IoT — spouse-approved.',
    description:
      'A battery-powered ESP32-C3 wand that toggles Tuya smart plugs over ESP-NOW in under 200 ms. Hardware-interrupt motion detection on the MPU-6050 keeps the wand asleep at 5–10 µA until you wave it. A USB-serial receiver forwards commands to a Python homeserver that handles scheduling and debouncing. My first soldering project.',
    tech: ['C++', 'ESP32', 'PlatformIO', 'Python', 'Docker'],
    links: [
      { label: 'GitHub', href: 'https://github.com/TiberiusGh/magic-wand' }
    ]
  },
  {
    name: 'Personal Web Desktop',
    tagline: 'macOS-inspired desktop environment in the browser.',
    description:
      'A single-page app where draggable, stackable windows host mini-applications (memory game, WebSocket chat, trivia quiz). Built entirely from custom elements with lazy-loaded modules, offline support via a service worker, and PWA installability.',
    tech: ['JavaScript', 'Web Components', 'WebSockets', 'Service Worker'],
    links: [
      { label: 'Live', href: 'https://pwd.tiberiusgh.com' },
      {
        label: 'GitHub',
        href: 'https://github.com/TiberiusGh/Personal-Web-Desktop-PWD'
      }
    ]
  },
  {
    name: 'CRUD Snippets',
    tagline: 'Code-snippet manager with session auth.',
    description:
      'Express + MongoDB app for managing code snippets with full CRUD, session-based auth, owner-only edit and delete, and private-snippet support. Runs in Docker alongside MongoDB via compose.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Docker'],
    links: [
      { label: 'Live', href: 'https://crud.tiberiusgh.com' },
      { label: 'GitHub', href: 'https://github.com/TiberiusGh/crud' }
    ]
  }
]

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' }
]
