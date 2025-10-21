'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardProps {
  image: string;
  name: string;
  description: string;
  stack?: string[];
  className?: string;
  subdesc?: string;
}

export default function Card({
  image,
  name,
  description,
  stack,
  className,
  subdesc,
}: CardProps) {
  return (
    <div
      className={cn(
        'group border border-foreground/10 rounded-xl overflow-hidden hover:shadow-lg transition bg-white',
        className
      )}
    >
      <div className="relative h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5 space-y-2 rounded-t-2xl bg-white -mt-4 relative z-10">
        <p className="text-xs text-muted-foreground mt-3">{subdesc}</p>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-accent text-background"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
