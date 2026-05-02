import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: ReactNode;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  type = 'button',
  className, 
  icon 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-md',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:border-brand-500 hover:text-brand-600',
  };
  
  const baseStyle = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200';
  
  if (href) {
    return (
      <a href={href} className={cn(baseStyle, variants[variant], className)}>
        {icon && icon}
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} type={type} className={cn(baseStyle, variants[variant], className)}>
      {icon && icon}
      {children}
    </button>
  );
};