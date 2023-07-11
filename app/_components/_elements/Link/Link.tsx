import NextLink from 'next/link';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_self';
}

export const Link: React.FC<Props> = ({ href, children, className, target, ...props }: Props) => {
  if (target === '_blank') {
    return (
      <a href={href} target="_blank" rel="noopener" className={className} {...props}>
        {children}
      </a>
    );
  }

  if (target === '_self') {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <NextLink href={href} passHref className={className} {...props}>
        {children}
      </NextLink>
    );
  }

  const url = new URL(href);
  url.searchParams.append('utm_source', 'mooniemoo.io');

  return (
    <a href={`${url.toString()}`} target="_blank" rel="noopener" className={className} {...props}>
      {children}
    </a>
  );
};
