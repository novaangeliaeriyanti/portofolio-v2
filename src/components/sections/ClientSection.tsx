'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface ClientSectionProps {
  logos: string[];
}

export default function ClientSection({ logos }: ClientSectionProps) {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              We&apos;re Trusted by 2500+ Customers
            </h2>
            <p className="text-gray-600">
              Our clients span various industries and countries. They trust us
              for our professionalism, quality, and innovative solutions.
            </p>
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
      </div>
    </section>
  );
}
