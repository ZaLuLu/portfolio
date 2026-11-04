import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'deep' | 'interactive' | 'outline';
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'surface',
  children,
  ...props
}) => {
  const variants = {
    surface: 'bg-[#3E2936]/80 border border-[#D8CFC2]/15 shadow-sm backdrop-blur-sm',
    deep: 'bg-[#1E131A] border border-[#D8CFC2]/10',
    interactive:
      'bg-[#3E2936]/80 border border-[#D8CFC2]/15 hover:border-[#EB0E31]/50 hover:bg-[#47303E] transition-all duration-200 cursor-pointer group shadow-sm',
    outline: 'bg-transparent border border-[#D8CFC2]/20',
  }[variant];

  return (
    <div
      className={cn('rounded-md p-6 text-[#D8CFC2]', variants, className)}
      {...props}
    >
      {children}
    </div>
  );
};
