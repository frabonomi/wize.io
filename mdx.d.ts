declare module '*.mdx' {
  import type { ArticleMetadata } from './content/articles/types';

  export { default } from '*.mdx';
  export const article: ArticleMetadata;
}
