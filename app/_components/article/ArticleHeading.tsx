import { type ComponentProps, type ReactNode, isValidElement } from 'react';

function headingText(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(headingText).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return headingText(children.props.children);
  }

  return '';
}

export function ArticleHeading({
  children,
  id,
  ...props
}: ComponentProps<'h2'>) {
  const anchor =
    id ??
    headingText(children)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  return (
    <h2 id={anchor} {...props}>
      <a href={`#${anchor}`}>{children}</a>
    </h2>
  );
}
