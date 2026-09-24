export type ArticleMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  draft: boolean;
  ogImage?: string;
  toc?: { id: string; label: string }[];
};
