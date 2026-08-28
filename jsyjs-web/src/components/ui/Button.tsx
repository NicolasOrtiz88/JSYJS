import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  id?: string;
}

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
  secondary:
    'bg-surface text-primary border-2 border-primary hover:bg-primary hover:text-white',
  outline:
    'bg-transparent text-primary border-2 border-border hover:border-primary hover:bg-primary-50',
  ghost:
    'bg-transparent text-primary hover:bg-primary-50',
  accent:
    'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  id,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          id={id}
        >
          {icon}
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} id={id}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
    >
      {icon}
      {children}
    </button>
  );
}
