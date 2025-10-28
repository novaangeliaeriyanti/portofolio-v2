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
        className="relative w-full h-[50vh] lg:h-[80vh] rounded-2xl overflow-hidden flex justify-end p-4"
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
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center saturate-[1.05] contrast-[1.05] transition-opacity duration-400 ease-linear ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${slide.backgroundImageUrl})` }}
              aria-hidden={idx !== activeIndex}
            />
          ))}
        </div>
        <div
          className="relative bg-foreground/50 rounded-2xl w-1/2 z-10 h-full flex flex-col items-center justify-center text-background text-center px-12 py-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          role="group"
          aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}
        >
          {activeSlide?.badgeText && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/20 text-background text-[12px] tracking-[0.08em] uppercase border border-white/30 backdrop-blur-[6px]">
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

        <div
          className="absolute left-0 top-1/2 z-20 flex flex-col gap-[10px] p-4 bg-background rounded-r-xl"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-[10px] h-[10px] rounded-full bg-foreground border border-white/90 transition hover:scale-[1.1] ${idx === activeIndex ? 'bg-primary shadow-[0_0_0_4px_rgba(255,255,255,0.15)]' : ''}`}
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
