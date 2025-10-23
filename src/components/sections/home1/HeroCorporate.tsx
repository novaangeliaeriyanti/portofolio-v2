'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { hero } from '@/data/hero';
import { counters } from '@/data/about';

export default function HeroCorporate() {
  return (
    <section className="relative bg-foreground bg-cover text-foreground overflow-hidden ">
      <div className="bg-background rounded-b-4xl relative w-full ">
        <div className="absolute top-10 left-10">
          <div className="absolute top-10 left-5 w-40 h-40 rounded-full border border-muted opacity-30" />
          <div
            className="w-28 h-28 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(currentColor 2px, transparent 2px)',
              backgroundSize: '14px 14px',
              color: 'hsl(var(--muted-foreground))',
            }}
          />
        </div>

        <div className="absolute bottom-10 right-10">
          <div className="absolute bottom-10 right-5 w-40 h-40 rounded-full border border-muted opacity-30" />
          <div
            className="w-36 h-36 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(currentColor 2px, transparent 2px)',
              backgroundSize: '14px 14px',
              color: 'hsl(var(--muted-foreground))',
            }}
          />
        </div>
        <Container className="mx-auto pt-24 md:pt-32 pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-14 text-foreground relative z-10 text-center"
          >
            {hero.title}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 pb-12 md:pb-16"
            >
              <p className="text-foreground leading-relaxed">{hero.desc}</p>
              <button className="cursor-pointer px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/50 hover:scale-105 transition-transform">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative flex justify-center items-end pb-0"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute inset-0 flex items-end justify-center pb-5 md:pb-10 z-20"
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

                <Image
                  src="/images/banner/banner-person.png"
                  alt="Team Member"
                  width={380}
                  height={380}
                  className="object-cover block"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-start md:items-end gap-6 text-primary pb-12 md:pb-16"
            >
              {counters?.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className=""
                >
                  <p className="text-5xl font-bold text-primary">{c.value}+</p>
                  <p className="text-muted-foreground">{c.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
