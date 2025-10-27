'use client';

import Container from '@/components/ui/Container';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type HeroSlide = {
  badgeText?: string;
  title: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  backgroundImageUrl: string;
};

type HeroBannerProps = {
  slides: HeroSlide[];
  autoPlayMs?: number;
};

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

  const activeSlide = slides[activeIndex];

  return (
    <Container className="mx-auto relative z-10">
      <section
        className="relative w-full h-[50vh] lg:h-[60vh] rounded-2xl overflow-hidden"
        tabIndex={0}
        ref={(el) => {
          containerRef.current = el;
        }}
        aria-roledescription="carousel"
        aria-label="Hero banner carousel"
      >
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-12 py-10"
          role="group"
          aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}
        >
          {activeSlide?.badgeText && (
            <span className="inline-flex items-center gap-2 px-3 py-1 text-gray-100 text-[12px] tracking-[0.08em] uppercase">
              {activeSlide.badgeText}
            </span>
          )}
          <h1 className="mt-[14px] mb-[22px] font-extrabold leading-[1.15] text-[40px] md:text-[56px]">
            {activeSlide.title}
          </h1>
          {activeSlide?.ctaLabel && (
            <button
              className="inline-flex items-center px-[18px] py-[12px] rounded-full bg-primary text-white font-bold border-0 cursor-pointer shadow-[0_6px_24px_rgba(255,107,0,0.35)] hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(255,107,0,0.45)] hover:bg-primary transition"
              onClick={activeSlide.onCtaClick}
              aria-label={activeSlide.ctaLabel}
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
            </button>
          )}
        </div>
      </section>
    </Container>
  );
}
