import type { IProject } from "@/shared/models/project.interface";

export async function getProjectsGithub(): Promise<IProject[]> {
  const url = "https://api.github.com/users/DannielNavas/repos?per_page=100";
  const response = await fetch(url);
  const projects = await response.json();
  return projects;
}
