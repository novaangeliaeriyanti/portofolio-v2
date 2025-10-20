'use client';

import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

interface RotatingIconProps {
  size?: number;
  speed?: number;
  className?: string;
}

export default function RotatingIcon({
  size = 40,
  speed = 5,
  className = '',
}: RotatingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: -360 }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: 'linear',
      }}
      style={{ display: 'inline-block' }}
    >
      <Snowflake size={size} className="text-foreground dark:text-accent" />
    </motion.div>
  );
}
