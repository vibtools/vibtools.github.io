import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'tester-zepto-pro',
    name: 'Tester Zepto Pro',
    description:
      'Open-source Windows desktop QA automation for authorized Razorpay Test Mode invite-flow testing with Playwright, exact-recipient verification, fail-closed safety controls, reports, and portable x64 builds.',
    repository: 'https://github.com/vibtools/Tester-Zepto-Pro-open-source-code',
    homepage: 'https://github.com/vibtools/Tester-Zepto-Pro-open-source-code',
    documentation: 'https://github.com/vibtools/Tester-Zepto-Pro-open-source-code#readme',
    language: 'Python',
    license: 'GPL-3.0-only',
    latestVersion: 'v1.0.6',
    category: 'Desktop Applications',
    operatingSystems: ['Windows', 'Portable', 'Source Code'],
    featured: true,
  },
  {
    slug: 'portable-account-browser',
    name: 'PortableAccountBrowser',
    description:
      'Open-source portable multi-account Chromium browser for Gmail, WhatsApp Web, Telegram, social media, and web applications on Windows.',
    repository: 'https://github.com/vibtools/PortableAccountBrowser',
    homepage: 'https://github.com/vibtools/PortableAccountBrowser',
    documentation: 'https://github.com/vibtools/PortableAccountBrowser#readme',
    language: 'Python',
    license: 'MIT',
    latestVersion: 'v1.3.1',
    category: 'Desktop Applications',
    operatingSystems: ['Windows', 'Portable', 'Source Code'],
    featured: true,
    stars: 4,
    forks: 2,
  },
  {
    slug: 'vibmail-open-source',
    name: 'VibMail Open Source',
    description:
      'Self-hosted open-source email server built with Postfix, Dovecot, and Django for repeatable VPS deployment.',
    repository: 'https://github.com/vibtools/vibmail-open-source',
    homepage: 'https://github.com/vibtools/vibmail-open-source',
    documentation: 'https://github.com/vibtools/vibmail-open-source#readme',
    language: 'Python',
    license: 'AGPL-3.0',
    latestVersion: 'Source',
    category: 'Server Infrastructure',
    operatingSystems: ['Linux', 'Source Code'],
    featured: true,
    stars: 1,
    forks: 2,
  },
  {
    slug: 'vib-id-account-portal',
    name: 'Vib ID Account Portal',
    description:
      'The VibTools account portal repository maintained as part of the open-source ecosystem.',
    repository: 'https://github.com/vibtools/vib-id-account-portal',
    homepage: 'https://github.com/vibtools/vib-id-account-portal',
    documentation: 'https://github.com/vibtools/vib-id-account-portal#readme',
    language: 'Python',
    license: 'Repository license',
    latestVersion: 'Source',
    category: 'Identity and Access',
    operatingSystems: ['Linux', 'Source Code'],
    featured: false,
  },
  {
    slug: 'vibtools-open-source-hub',
    name: 'VibTools Open Source Hub',
    description:
      'The official static developer portal for the VibTools open-source ecosystem, built with Astro and TypeScript.',
    repository: 'https://github.com/vibtools/vibtools.github.io',
    homepage: 'https://vibtools.github.io',
    documentation: 'https://github.com/vibtools/vibtools.github.io#readme',
    language: 'Astro',
    license: 'MIT',
    latestVersion: 'v1.0.0',
    category: 'Web Platform',
    operatingSystems: ['Source Code'],
    featured: true,
  },
];

export const projectCategories = [
  {
    name: 'Desktop Applications',
    description: 'Portable developer-focused software for local workflows.',
  },
  {
    name: 'Server Infrastructure',
    description: 'Self-hosted services and deployment-ready infrastructure projects.',
  },
  {
    name: 'Identity and Access',
    description: 'Account and access components maintained within the ecosystem.',
  },
  {
    name: 'Web Platform',
    description: 'Open-source web properties and ecosystem infrastructure.',
  },
] as const;
