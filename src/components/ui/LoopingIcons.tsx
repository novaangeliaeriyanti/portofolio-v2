'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LoopingIconsProps {
  icon: LucideIcon;
  count?: number;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  size?: number;
  opacity?: number;
  description?: string;
}

export default function LoopingIcons({
  icon: Icon,
  count = 10,
  speed = 15,
  direction = 'left',
  className = '',
  size = 24,
  opacity = 0.4,
  description,
}: LoopingIconsProps) {
  const icons = Array.from({ length: count });

  const sequence = icons.flatMap(() =>
    description ? ['icon', 'desc'] : ['icon']
  );

  const looped = [...sequence, ...sequence, ...sequence];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className="inline-flex gap-4 items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
      >
        {looped.map((type, i) =>
          type === 'icon' ? (
            <Icon
              key={i}
              style={{
                width: size,
                height: size,
                opacity,
              }}
              className="text-foreground dark:text-background"
            />
          ) : (
            <span
              key={i}
              className="text-body text-foreground dark:text-background opacity-70 whitespace-nowrap"
            >
              {description}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}
