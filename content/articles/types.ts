type ArticleMetadataBase = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  tags: string[];
  slugOverride?: string;
  ogImage?: string;
  toc?: { id: string; label: string }[];
};

export type ArticleMetadata = ArticleMetadataBase &
  (
    | { draft: true; publishedAt?: string }
    | { draft: false; publishedAt: string }
  );
