import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant = 'primary', href, onClick, className }: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-md',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:border-brand-500 hover:text-brand-600',
  };
  
  const baseStyle = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200';
  
  if (href) {
    return <a href={href} className={cn(baseStyle, variants[variant], className)}>{children}</a>;
  }
  
  return <button onClick={onClick} className={cn(baseStyle, variants[variant], className)}>{children}</button>;
};