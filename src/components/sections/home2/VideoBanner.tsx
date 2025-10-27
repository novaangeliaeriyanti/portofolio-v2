'use client';

import Container from '@/components/ui/Container';
import { Play } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
type HeroSlide = {
  thumbnail: string;
  videoUrl: string;
};

type HeroBannerProps = {
  videos: HeroSlide[];
  autoPlayMs?: number;
};

export default function VideoBanner({
  videos,
  autoPlayMs = 5000,
}: HeroBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = useMemo(
    () => Math.max(0, videos.length - 1),
    [videos.length]
  );
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
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

  function goTo(index: number) {
    if (index < 0 || index > maxIndex) return;
    setActiveIndex(index);
  }

  function handleMouseEnter() {
    stopAutoPlay();
  }
  function handleMouseLeave() {
    startAutoPlay();
  }
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowRight') {
      goTo(activeIndex >= maxIndex ? 0 : activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      goTo(activeIndex <= 0 ? maxIndex : activeIndex - 1);
    }
  }

  const activeSlide = videos[activeIndex];

  return (
    <Container className="mx-auto relative z-10">
      <section
        className="relative w-full h-[50vh] lg:h-[60vh] rounded-2xl overflow-hidden flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={(el) => {
          containerRef.current = el;
        }}
        aria-roledescription="carousel"
        aria-label="Hero banner carousel"
      >
        <div className="absolute inset-0">
          {videos.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center saturate-[1.05] contrast-[1.05] transition-opacity duration-400 ease-linear ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${slide.thumbnail})` }}
              aria-hidden={idx !== activeIndex}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-6 bg-background/20"
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
      </section>
    </Container>
  );
}
