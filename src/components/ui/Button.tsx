import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'signature' | 'outline' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'signature',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer min-h-[44px] min-w-[44px] active:scale-[0.98]';

    const variants = {
      signature:
        'bg-[#EB0E31] text-white hover:bg-[#FF2B4D] active:bg-[#C40A27] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EB0E31] shadow-sm',
      outline:
        'border border-[#D8CFC2]/30 text-[#D8CFC2] bg-transparent hover:bg-[#3E2936] hover:border-[#D8CFC2]/60 active:bg-[#4B3342] focus-visible:ring-2 focus-visible:ring-[#D8CFC2]',
      ghost:
        'text-[#D8CFC2] bg-transparent hover:bg-[#3E2936]/60 hover:text-white active:bg-[#3E2936] focus-visible:ring-2 focus-visible:ring-[#EB0E31]',
      terminal:
        'font-mono text-xs uppercase tracking-widest border border-[#EB0E31]/40 bg-[#1E131A] text-[#D8CFC2] hover:border-[#EB0E31] hover:text-white hover:shadow-[0_0_12px_rgba(235,14,49,0.3)] active:bg-[#33212C] focus-visible:ring-2 focus-visible:ring-[#EB0E31]',
    }[variant];

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-sm gap-1.5',
      md: 'px-5 py-2.5 text-sm rounded-md gap-2',
      lg: 'px-6 py-3 text-base rounded-md gap-2.5',
    }[size];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants, sizes, className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
