export const site = {
  name: 'VibTools',
  tagline: 'The Official Open Source Developer Ecosystem',
  description:
    'The official VibTools open source developer hub for projects, releases, downloads, templates, developer tools, and community contribution.',
  url: 'https://vibtools.github.io',
  github: 'https://github.com/vibtools',
  email: 'design@vib.tools',
  locale: 'en_US',
  language: 'en',
} as const;

export const navigation = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Downloads', href: '/downloads/' },
  { label: 'Templates', href: '/templates/' },
  { label: 'Developer Tools', href: '/tools/' },
  { label: 'Releases', href: '/releases/' },
  { label: 'Community', href: '/community/' },
] as const;

export const footerNavigation = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Downloads', href: '/downloads/' },
  { label: 'GitHub', href: site.github, external: true },
  { label: 'License', href: '/license/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Contact', href: `mailto:${site.email}`, external: true },
] as const;
