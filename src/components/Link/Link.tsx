import NextLink from 'next/link';

import { siteConfig } from '@/config/site';

interface Props extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  children: React.ReactNode;
  target?: '_blank' | '_self';
  prefetch?: boolean;
}

export const Link = ({ href, children, className, target, prefetch = true, ...props }: Props) => {
  if (!href) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

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
      <NextLink href={href} passHref className={className} prefetch={prefetch} {...props}>
        {children}
      </NextLink>
    );
  }

  const url = new URL(href);
  const domain = new URL(siteConfig.url).hostname;
  url.searchParams.append('utm_source', domain);

  return (
    <a href={`${url.toString()}`} target="_blank" rel="noopener" className={className} {...props}>
      {children}
    </a>
  );
};
