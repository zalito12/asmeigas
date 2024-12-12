import React, { ReactNode } from 'react';
import '../../styles/polaroid.css';
import { cn } from '@/lib/utils';

export interface PolaroidProps {
  className?: string;
  alt?: string;
  src?: string;
  caption?: string;
  children: ReactNode;
}

export default function Polaroid({
  className,
  alt,
  caption,
  children,
}: PolaroidProps) {
  return (
    <div className={cn(className, 'polaroid-item')}>
      <div className="polaroid relative bg-white p-4">
        {children}
        {caption && <div className="mt-2 text-center text-lg">{caption}</div>}
      </div>
    </div>
  );
}
