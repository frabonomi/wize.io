'use client';

import { useState } from 'react';

import styles from './CodeBlock.module.css';

export function CopyCodeButton({ code }: { code: string }) {
  const [label, setLabel] = useState('Copy');

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setLabel('Copied');
      window.setTimeout(() => setLabel('Copy'), 2000);
    } catch {
      setLabel('Unavailable');
    }
  }

  return (
    <button
      aria-label="Copy code to clipboard"
      className={styles.copyButton}
      onClick={copyCode}
      type="button"
    >
      {label}
    </button>
  );
}
