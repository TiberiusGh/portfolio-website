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
}

export const profile = {
  name: 'Tiberius Gherac',
  location: 'Kalmar, Sweden',
  photo: '/img/profile.jpeg',
  github: 'https://github.com/TiberiusGh',
  linkedin: 'https://www.linkedin.com/in/tiberius-gh',
  email: 'tiberius.gherac@gmail.com',
  repoUrl: 'https://github.com/TiberiusGh/portfolio-website',
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Junior Developer',
    company: 'Sourceful Energy',
    start: 'Sept 2025',
    end: 'Jan 2026',
    location: 'Kalmar, Sweden',
    description:
      'Contributed to mobile app development supporting the mission to build the coordination layer for the world’s distributed energy system.',
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
      period: 'Dec 2019 – June 2021',
    },
  },
]

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'],
  },
  {
    label: 'Frameworks & libraries',
    items: ['React', 'Web Components', 'Node.js', 'Astro'],
  },
  {
    label: 'Tools & infra',
    items: ['Git', 'Docker', 'Firebase', 'npm', 'GitHub Actions'],
  },
  {
    label: 'Currently learning',
    items: ['React', 'TypeScript', 'Astro'],
  },
]

export const education: EducationEntry[] = [
  {
    institution: 'Linnéuniversitetet',
    program: 'BSc Web Programming, 180 HP',
    period: '2024–2027',
  },
  {
    institution: 'Linnéuniversitetet',
    program: 'BSc Nursing, 180 HP',
    period: '2018–2021',
  },
]

export const educationNote =
  'I like learning across fields. Before settling on web development, I also took standalone university courses in Generative Programming (Blekinge Tekniska Högskola), Argumentation Analysis (Stockholms universitet), and Basic Finance (Göteborgs universitet) — exploring different ways of thinking before choosing a path.'

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
]
