import { cn } from '@/lib/utils';

export const Paragraph = ({ children, className, size = 'base' }: { children: React.ReactNode; className?: string; size?: 'sm' | 'base' | 'lg' }) => {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };
  return <p className={cn(sizes[size], 'text-neutral-700 leading-relaxed', className)}>{children}</p>;
};