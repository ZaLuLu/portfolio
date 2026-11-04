import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'deep' | 'interactive' | 'outline';
}

/**
 * Clean structural frame without artificial glassmorphism or neon glows.
 */
export const Card: React.FC<CardProps> = ({
  className,
  variant = 'surface',
  children,
  ...props
}) => {
  const variants = {
    surface: 'bg-[#1E131A] border border-[#D8CFC2]/15',
    deep: 'bg-[#1E131A] border border-[#D8CFC2]/10',
    interactive:
      'bg-[#1E131A] border border-[#D8CFC2]/15 hover:border-[#EB0E31]/40 transition-colors',
    outline: 'bg-transparent border border-[#D8CFC2]/20',
  }[variant];

  return (
    <div
      className={cn('rounded p-6 sm:p-8 text-[#D8CFC2]', variants, className)}
      {...props}
    >
      {children}
    </div>
  );
};
