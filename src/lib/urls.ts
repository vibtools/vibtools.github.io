export function normalizePath(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function isExternalUrl(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
}

export function absoluteUrl(path: string, base: URL): string {
  return new URL(path, base).toString();
}
