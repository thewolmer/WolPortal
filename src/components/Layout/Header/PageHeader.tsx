import React, { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const PageHeader = ({ children, className, ...props }: Props) => (
  <section className="flex h-[50vh] w-full items-center justify-center">
    <div className={cn('flex h-full w-full max-w-8xl flex-col justify-center space-y-4 px-10', className)} {...props}>
      {children}
    </div>
  </section>
);
