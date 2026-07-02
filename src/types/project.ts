export type OperatingSystem = 'Windows' | 'Linux' | 'macOS' | 'Portable' | 'Source Code';

export interface Project {
  slug: string;
  name: string;
  description: string;
  repository: string;
  homepage?: string | undefined;
  documentation: string;
  language: string;
  license: string;
  latestVersion: string;
  category: string;
  operatingSystems: OperatingSystem[];
  featured: boolean;
  archived?: boolean | undefined;
  stars?: number | undefined;
  forks?: number | undefined;
  openIssues?: number | undefined;
  updatedAt?: string | undefined;
}

export interface Release {
  projectSlug: string;
  projectName: string;
  version: string;
  publishedAt: string;
  summary: string;
  releaseUrl: string;
  downloadUrl: string;
}
