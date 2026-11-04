import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: 'editorial' | 'standard' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  width = 'standard',
  className,
  ...props
}) => {
  const widthClasses = {
    editorial: 'max-w-[65ch]',
    standard: 'max-w-5xl',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  }[width];

  return (
    <div
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', widthClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
};
