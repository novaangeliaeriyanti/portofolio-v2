'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { industrialCards } from '@/data/solutions';
import { fadeInUp, fadeScale, staggerContainer } from '@/lib/motion';

export default function Solutions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === 'left'
          ? scrollLeft - clientWidth / 1.1
          : scrollLeft + clientWidth / 1.1;
      scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <Container className="py-16 space-y-8">
      <motion.div
        {...fadeInUp}
        className="mx-auto bg-foreground rounded-2xl p-5 md:p-8 lg:p-12"
      >
        <motion.div
          {...fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10"
        >
          <div className="max-w-lg">
            <h2 className="text-3xl text-background font-bold leading-snug">
              Providing <span className="text-orange-500">Smart Solutions</span>{' '}
              <br />
              of Every Kind
            </h2>
            <p className="text-small mt-2">
              Our team provides industrial-grade services — from precision
              manufacturing to automated systems and equipment setup.
            </p>
          </div>

          <div className="flex gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              className="cursor-pointer p-2 rounded-full text-white bg-primary hover:bg-primary/50 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="cursor-pointer p-2 rounded-full text-white bg-primary hover:bg-primary/50 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={scrollRef}
          {...staggerContainer}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory pb-4 select-none"
        >
          {industrialCards.map((card, i) => (
            <motion.div
              key={i}
              {...fadeScale}
              className="min-w-[300px] max-w-[320px] bg-background border-2 border-background rounded-2xl overflow-hidden shadow-lg snap-start flex-shrink-0 group transition-transform duration-300 relative"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-body font-semibold mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="text-small">{card.desc}</p>
              </div>

              <div className="absolute top-4 right-4 bg-primary w-3 h-3 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
