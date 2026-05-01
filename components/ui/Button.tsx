import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export const Button = ({ children, variant = 'primary', href, onClick, className = '', icon }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition flex items-center gap-2";
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-md",
    outline: "border-2 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-600"
  };
  
  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };
  
  return (
    <Component {...props} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {icon && icon}
      {children}
    </Component>
  );
};