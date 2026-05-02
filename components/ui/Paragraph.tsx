import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export const Paragraph = ({ children, className, size = 'base' }: ParagraphProps) => {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };
  return <p className={cn(sizes[size], 'text-neutral-700 leading-relaxed', className)}>{children}</p>;
};