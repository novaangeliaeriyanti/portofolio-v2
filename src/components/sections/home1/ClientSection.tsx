'use client';

import Container from '@/components/ui/Container';
import { clients } from '@/data/clients';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface ClientSectionProps {
  logos: string[];
}

export default function ClientSection({ logos }: ClientSectionProps) {
  return (
    <section className="pb-20 pt-10 bg-foreground">
      <Container className=" mx-auto max-w-6xl py-5 md:py-10 rounded-3xl border border-background/20 bg-background/10 backdrop-blur-sm px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center text-background lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{clients.title}</h2>
            <p className="">{clients.desc}</p>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow flex items-center justify-center p-2"
                >
                  <Image
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
