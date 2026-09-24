import { type ComponentProps, type ReactNode, isValidElement } from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import swift from 'react-syntax-highlighter/dist/esm/languages/prism/swift';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

import styles from './CodeBlock.module.css';
import { CopyCodeButton } from './CopyCodeButton';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('swift', swift);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('ts', typescript);

type CodeElementProps = {
  className?: string;
  children?: ReactNode;
};

export function CodeBlock({ children }: ComponentProps<'pre'>) {
  if (!isValidElement<CodeElementProps>(children)) {
    return <pre className={styles.fallback}>{children}</pre>;
  }

  const code = String(children.props.children ?? '').replace(/\n$/, '');
  const language = children.props.className?.match(/language-([\w-]+)/)?.[1];

  return (
    <div className={styles.codePanel}>
      <div className={styles.toolbar}>
        <CopyCodeButton code={code} />
        <span className={styles.language}>{language ?? 'Text'}</span>
      </div>
      <SyntaxHighlighter
        className={styles.codePre}
        codeTagProps={{ className: styles.codeText }}
        language={language ?? 'text'}
        useInlineStyles={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
