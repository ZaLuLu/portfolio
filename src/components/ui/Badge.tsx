import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'crimson' | 'yellow' | 'coral' | 'outline' | 'mono';
  size?: 'sm' | 'md';
}

/**
 * Editorial inline label. Replaces generic SaaS pill badges with restrained typographic metadata.
 */
export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'text-[#D8CFC2]/75',
    crimson: 'text-[#EB0E31]',
    yellow: 'text-[#E7C75A]',
    coral: 'text-[#FDA2AC]',
    outline: 'text-[#D8CFC2]/80',
    mono: 'text-[#857A6E]',
  }[variant];

  return (
    <span
      className={cn(
        'font-mono text-xs tracking-normal select-none',
        variants,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
