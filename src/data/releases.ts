import type { Release } from '@/types/project';

export const releases: Release[] = [
  {
    projectSlug: 'portable-account-browser',
    projectName: 'PortableAccountBrowser',
    version: 'v1.3.1',
    publishedAt: '2026-06-28',
    summary:
      'Professional Windows x64 release with portable multi-account browser workflows and release packaging.',
    releaseUrl: 'https://github.com/vibtools/PortableAccountBrowser/releases',
    downloadUrl: 'https://github.com/vibtools/PortableAccountBrowser/releases/latest',
  },
  {
    projectSlug: 'vibtools-open-source-hub',
    projectName: 'VibTools Open Source Hub',
    version: 'v1.0.0',
    publishedAt: '2026-07-01',
    summary:
      'Initial production release of the official VibTools open-source developer ecosystem website.',
    releaseUrl: 'https://github.com/vibtools/vibtools.github.io/releases',
    downloadUrl: 'https://github.com/vibtools/vibtools.github.io/archive/refs/heads/main.zip',
  },
];
