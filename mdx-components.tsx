import type { MDXComponents } from 'mdx/types';

import { ArticleHeading } from './app/_components/article/ArticleHeading';
import {
  ArticleImage,
  VideoEmbed,
} from './app/_components/article/ArticleMedia';
import { CodeBlock } from './app/_components/article/CodeBlock';

const components: MDXComponents = {
  h2: ArticleHeading,
  pre: CodeBlock,
  ArticleImage,
  VideoEmbed,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
