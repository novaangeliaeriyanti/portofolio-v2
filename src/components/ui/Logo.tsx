'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  href?: string;
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  href = '/',
  size = 32,
  showText = true,
  className = '',
}: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <Link href={href} className="flex items-center gap-2">
        <Image
          src="/images/logo/ladybug.png"
          alt="Ladybug Logo"
          width={size}
          height={size}
          className="rounded-md"
        />
        {showText && (
          <span className="text-xl font-semibold tracking-tight">Ladybug</span>
        )}
      </Link>
    </motion.div>
  );
}
