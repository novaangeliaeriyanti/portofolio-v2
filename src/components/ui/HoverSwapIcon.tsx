'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HoverSwapIconProps {
  icon: LucideIcon;
  hoverIcon?: LucideIcon;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function HoverSwapIcon({
  icon: Icon,
  hoverIcon: HoverIcon,
  size = 24,
  className,
  onClick,
}: HoverSwapIconProps) {
  const containerVariants = {
    rest: {},
    hover: {},
  };

  const iconVariants = {
    rest: { y: 0, opacity: 1 },
    hover: { y: -40, opacity: 0 },
  };

  const iconNewVariants = {
    rest: { y: 40, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <motion.a
      onClick={onClick}
      rel="noopener noreferrer"
      className={`relative flex justify-center items-center overflow-hidden hover:bg-accent hover:text-foreground hover:dark:text-background  transition-colors duration-300 ${className}`}
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        className="absolute"
        variants={iconVariants}
        transition={{ duration: 0.5 }}
      >
        <Icon size={size} className="" />
      </motion.div>

      <motion.div
        className="absolute"
        variants={iconNewVariants}
        transition={{ duration: 0.5 }}
      >
        {HoverIcon ? (
          <HoverIcon size={size} className="" />
        ) : (
          <Icon size={size} className="" />
        )}
      </motion.div>
    </motion.a>
  );
}
