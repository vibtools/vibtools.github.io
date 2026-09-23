import { site } from '@/config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SoftwareApplicationData {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string[];
  codeRepository?: string;
  license?: string;
  version?: string;
}

export interface ItemListItem {
  name: string;
  url: string;
  description?: string;
}

export interface SeoInput {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type?: 'website' | 'article' | undefined;
  breadcrumbs?: BreadcrumbItem[] | undefined;
  softwareApplication?: SoftwareApplicationData | undefined;
  itemList?: ItemListItem[] | undefined;
}

function safeJson(value: unknown): string {
  return JSON.stringify(value)
    .replaceAll('&', '\\u0026')
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029');
}

export function createStructuredData(input: SeoInput): string {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/brand/vibtools-icon.png`,
        caption: `${site.name} Logo`,
      },
      sameAs: [site.github],
      description: site.description,
      email: site.email,
      knowsAbout: [
        'Open Source Software',
        'Developer Tools',
        'Desktop Applications',
        'QA Automation',
        'Self-Hosted Infrastructure',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: site.language,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${site.url}/projects/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': input.type === 'article' ? 'Article' : 'WebPage',
      '@id': `${input.canonical}#webpage`,
      url: input.canonical,
      name: input.title,
      description: input.description,
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
      inLanguage: site.language,
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: input.image,
      },
    },
  ];

  if (input.softwareApplication) {
    graph.push({
      '@type': 'SoftwareApplication',
      '@id': `${input.canonical}#software`,
      name: input.softwareApplication.name,
      description: input.softwareApplication.description,
      applicationCategory: input.softwareApplication.applicationCategory,
      operatingSystem: input.softwareApplication.operatingSystem.join(', '),
      ...(input.softwareApplication.codeRepository
        ? { codeRepository: input.softwareApplication.codeRepository }
        : {}),
      ...(input.softwareApplication.license ? { license: input.softwareApplication.license } : {}),
      ...(input.softwareApplication.version
        ? { softwareVersion: input.softwareApplication.version }
        : {}),
      publisher: { '@id': `${site.url}/#organization` },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    });
  }

  if (input.itemList && input.itemList.length > 0) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${input.canonical}#itemlist`,
      name: input.title,
      numberOfItems: input.itemList.length,
      itemListElement: input.itemList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
        ...(item.description ? { description: item.description } : {}),
      })),
    });
  }

  if (input.breadcrumbs && input.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: input.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  return safeJson({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}
