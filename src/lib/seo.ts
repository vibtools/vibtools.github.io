import { site } from '@/config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoInput {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
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
      logo: `${site.url}/brand/vibtools-icon.png`,
      sameAs: [site.github],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: site.language,
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
