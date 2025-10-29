'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[110px] md:text-[140px] font-extrabold leading-none text-primary relative z-10"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold mt-2 relative z-10"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mt-3 max-w-md relative z-10"
      >
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or go back to the homepage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>

      <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl bottom-1/2 left-1/2 animate-pulse" />
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-1/2 left-1/2 animate-pulse" />
    </div>
  );
}
