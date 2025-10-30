'use client';

import Container from '@/components/ui/Container';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroBackgroundVariants, heroContentVariants } from '@/lib/motion';
import { HeroBannerProps } from '@/types/types';

export default function HeroBanner({
  slides,
  autoPlayMs = 5000,
}: HeroBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = useMemo(
    () => Math.max(0, slides.length - 1),
    [slides.length]
  );
  const timerRef = useRef<number | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = window.setTimeout(() => {
      setActiveIndex((idx) => (idx >= maxIndex ? 0 : idx + 1));
    }, autoPlayMs);
  }, [autoPlayMs, maxIndex, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [activeIndex, startAutoPlay, stopAutoPlay]);

  const goTo = (index: number) => {
    if (index < 0 || index > maxIndex) return;
    setActiveIndex(index);
  };

  const activeSlide = slides[activeIndex];

  return (
    <Container className="mx-auto relative z-10">
      <section
        className="relative w-full h-[50vh] lg:h-[80vh] rounded-2xl overflow-hidden"
        tabIndex={0}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={heroBackgroundVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-cover bg-center saturate-[1.05] contrast-[1.05]"
              style={{
                backgroundImage: `url(${activeSlide.backgroundImageUrl})`,
              }}
            />
          </AnimatePresence>
        </div>

        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 80% at 50% 70%, rgba(255,145,0,0.55) 0%, rgba(255,145,0,0.15) 35%, rgba(0,0,0,0.45) 60%), linear-gradient(90deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.35) 45%, rgba(15,23,42,0.05) 100%)',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex + '-content'}
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-12 py-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          >
            {activeSlide?.badgeText && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-gray-100 text-[12px] tracking-[0.08em] uppercase border border-white/30 backdrop-blur-[6px]">
                {activeSlide.badgeText}
              </span>
            )}
            <h1 className="mt-[14px] mb-[22px] font-extrabold leading-[1.15] text-[40px] md:text-[56px]">
              {activeSlide.title}
            </h1>
            {activeSlide?.ctaLabel && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-[18px] py-[12px] rounded-full bg-primary text-white font-bold border-0 cursor-pointer shadow-[0_6px_24px_rgba(255,107,0,0.35)] hover:bg-primary transition"
                onClick={activeSlide.onCtaClick}
              >
                {activeSlide.ctaLabel}
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-[10px] p-4 bg-background rounded-l-xl"
          role="tablist"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-[10px] h-[10px] rounded-full bg-foreground border border-white/90 transition hover:scale-[1.1] ${
                idx === activeIndex
                  ? 'bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.15)]'
                  : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === activeIndex}
              role="tab"
              onClick={() => goTo(idx)}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
      </section>
    </Container>
  );
}
