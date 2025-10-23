'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Play } from 'lucide-react';
import { hero } from '@/data/hero';
export default function HeroStartup() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 h-1/2 md:h-screen md:py-32 -translate-y-[70px] text-foreground"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        clipPath: 'ellipse(120% 90% at 50% 0%)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative text-center max-w-4xl mx-auto px-6 flex flex-col justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-200 mb-8"
        >
          {hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black hover:bg-white hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-60 group-hover:opacity-80" />
            <Play className="w-6 h-6" />
            <span className="sr-only">Play Video</span>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
