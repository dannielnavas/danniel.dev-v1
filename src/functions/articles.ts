import type { IArticle } from "@/shared/models/article.interface";

export async function getArticlesDevto(): Promise<IArticle[]> {
  const url = "https://dev.to/api/articles?username=dannieldev";
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
}
