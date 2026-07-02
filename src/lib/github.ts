import { projects as fallbackProjects } from '@/data/projects';
import type { Project } from '@/types/project';

interface GitHubRepository {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  archived: boolean;
  fork: boolean;
  updated_at: string;
  license: { spdx_id: string | null } | null;
}

let cachedProjects: Promise<Project[]> | undefined;

function repositoryName(url: string): string {
  return url.split('/').filter(Boolean).at(-1) ?? '';
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === 'string';
}

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== 'object' || value === null) return false;

  const repository = value as Record<string, unknown>;
  const license = repository.license;
  const validLicense =
    license === null ||
    (typeof license === 'object' &&
      license !== null &&
      isNullableString((license as Record<string, unknown>).spdx_id));

  return (
    typeof repository.name === 'string' &&
    typeof repository.html_url === 'string' &&
    isNullableString(repository.homepage) &&
    isNullableString(repository.description) &&
    isNullableString(repository.language) &&
    typeof repository.stargazers_count === 'number' &&
    typeof repository.forks_count === 'number' &&
    typeof repository.open_issues_count === 'number' &&
    typeof repository.archived === 'boolean' &&
    typeof repository.fork === 'boolean' &&
    typeof repository.updated_at === 'string' &&
    validLicense
  );
}

function applyRepositoryData(project: Project, repository: GitHubRepository): Project {
  return {
    ...project,
    description: repository.description?.trim() || project.description,
    homepage: repository.homepage?.trim() || project.homepage,
    language: repository.language?.trim() || project.language,
    license: repository.license?.spdx_id?.trim() || project.license,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    openIssues: repository.open_issues_count,
    archived: repository.archived,
    updatedAt: repository.updated_at,
  };
}

async function requestProjects(): Promise<Project[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);

  try {
    const token = import.meta.env.GITHUB_TOKEN as string | undefined;
    const response = await fetch(
      'https://api.github.com/users/vibtools/repos?per_page=100&sort=updated',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: controller.signal,
      },
    );

    if (!response.ok) return fallbackProjects;

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return fallbackProjects;

    const ownedRepositories = payload
      .filter(isGitHubRepository)
      .filter((repository) => !repository.fork);

    return fallbackProjects.map((project) => {
      const name = repositoryName(project.repository).toLowerCase();
      const repository = ownedRepositories.find((item) => item.name.toLowerCase() === name);
      return repository ? applyRepositoryData(project, repository) : project;
    });
  } catch {
    return fallbackProjects;
  } finally {
    clearTimeout(timeout);
  }
}

export function getProjects(): Promise<Project[]> {
  cachedProjects ??= requestProjects();
  return cachedProjects;
}
