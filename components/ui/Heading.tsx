import { cn } from '@/lib/utils';
import { createElement, ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export const Heading = ({ children, level = 2, className }: HeadingProps) => {
  const styles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    2: 'text-3xl md:text-4xl font-bold tracking-tight',
    3: 'text-2xl md:text-3xl font-semibold tracking-tight',
  };
  
  return createElement(
    `h${level}`,
    { className: cn(styles[level], 'text-neutral-900', className) },
    children
  );
};