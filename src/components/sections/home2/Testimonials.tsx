'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import testimonials from '@/data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIdx = current * cardsPerView;
  const visibleCards = testimonials.slice(startIdx, startIdx + cardsPerView);
  return (
    <section className="relative py-20 bg-white overflow-hidden">
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
      <Container className="max-w-6xl mx-auto space-y-20 relative z-10">
        <h2 className="heading-3 text-4xl font-bold text-center mb-12">
          What Do Our Clients Say?
        </h2>
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1.2,
              }}
              className={`grid gap-8 ${
                cardsPerView === 3
                  ? 'grid-cols-3'
                  : cardsPerView === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1'
              }`}
            >
              {visibleCards.map((t, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-foreground/10 rounded-xl shadow-sm min-h-[250px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={t.image}
                        alt={t.client}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h4 className="font-medium">{t.client}</h4>
                        <p className="text-tiny text-muted-foreground">
                          ⭐ {t.rating}
                        </p>
                      </div>
                    </div>
                    <p className="text-body italic">&quot;{t.feedback}&quot;</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
