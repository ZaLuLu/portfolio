import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'crimson' | 'yellow' | 'coral' | 'outline' | 'mono';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-[#3E2936] text-[#D8CFC2] border border-[#D8CFC2]/15',
    crimson: 'bg-[#EB0E31]/15 text-[#FF6B81] border border-[#EB0E31]/30',
    yellow: 'bg-[#E7C75A]/15 text-[#F0D57E] border border-[#E7C75A]/30',
    coral: 'bg-[#FDA2AC]/15 text-[#FDA2AC] border border-[#FDA2AC]/30',
    outline: 'border border-[#D8CFC2]/30 text-[#D8CFC2] bg-transparent',
    mono: 'font-mono uppercase tracking-wider text-[11px] bg-[#1E131A] text-[#D8CFC2]/90 border border-[#D8CFC2]/20',
  }[variant];

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] rounded',
    md: 'px-2.5 py-1 text-xs rounded-sm',
  }[size];

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium select-none',
        variants,
        sizes,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
