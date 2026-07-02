const dateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

function parseDate(value: string | Date): Date {
  if (value instanceof Date) return value;
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00Z`) : new Date(value);
}

export function formatDate(value: string | Date): string {
  const date = parseDate(value);
  return Number.isNaN(date.getTime()) ? 'Unknown date' : dateFormatter.format(date);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en').format(value);
}
