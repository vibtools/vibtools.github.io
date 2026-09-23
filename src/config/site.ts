export const site = {
  name: 'VibTools',
  tagline: 'The Official Open Source Developer Ecosystem',
  description:
    'The official VibTools open source developer hub for projects, releases, downloads, templates, developer tools, and community contribution.',
  url: 'https://vibtools.github.io',
  github: 'https://github.com/vibtools',
  email: 'hello@vib.tools',
  locale: 'en_US',
  language: 'en',
} as const;

export const navigation = [
  {
    label: 'Projects',
    href: '/projects/',
    description: 'Open-source desktop & server software',
    icon: 'PackageOpen',
  },
  {
    label: 'Downloads',
    href: '/downloads/',
    description: 'Binaries & packages for Win, Linux, Mac',
    icon: 'Download',
  },
  {
    label: 'Tools',
    href: '/tools/',
    description: 'Desktop utilities & automation testing',
    icon: 'Terminal',
  },
  {
    label: 'Templates',
    href: '/templates/',
    description: 'Official repository starter kits',
    icon: 'FileCode',
  },
  {
    label: 'Releases',
    href: '/releases/',
    description: 'Changelogs & published binary builds',
    icon: 'Sparkles',
  },
  {
    label: 'Community',
    href: '/community/',
    description: 'Contribution channels & issue tracker',
    icon: 'Users',
  },
  {
    label: 'AI Index',
    href: '/ai-index/',
    description: 'Machine-readable context & llms.txt',
    icon: 'Bot',
  },
] as const;

export const footerNavigation = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Downloads', href: '/downloads/' },
  { label: 'AI Index', href: '/ai-index/' },
  { label: 'GitHub', href: site.github, external: true },
  { label: 'License', href: '/license/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Contact', href: `mailto:${site.email}`, external: true },
] as const;
