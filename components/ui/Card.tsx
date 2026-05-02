import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div className={cn(
      'bg-white rounded-2xl border border-neutral-200 p-6 transition-all duration-300',
      hover && 'hover:shadow-xl hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  );
};