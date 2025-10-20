'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CardOne from './cards/CardOne';
import CardTwo from './cards/CardTwo';
import CardThree from './cards/CardThree';
import CardFour from './cards/CardFour';

const cardComponents = [CardOne, CardTwo, CardThree, CardFour];

export default function CardScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setViewportHeight(window.innerHeight);

    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => setScrollTop(container.scrollTop);
    container.addEventListener('scroll', onScroll);

    const onResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', onResize);

    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll scroll-smooth"
        style={{ scrollSnapType: 'none' }}
      >
        {cardComponents.map((CardComponent, index) => {
          return (
            <div
              key={index}
              className="h-screen flex items-center justify-center snap-start"
            >
              <CardComponent />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll scroll-smooth"
      style={{ scrollSnapType: 'none' }}
    >
      {cardComponents.map((CardComponent, index) => {
        const cardOffsetTop = index * viewportHeight;
        const distance = scrollTop - cardOffsetTop;

        const normalizedDistance = Math.min(
          Math.abs(distance) / viewportHeight,
          1
        );
        const scale = 1 - normalizedDistance * 0.3;

        const translateY =
          Math.min(Math.max(distance, -viewportHeight), viewportHeight) / 5;

        return (
          <motion.div
            key={index}
            className="h-screen flex items-center justify-center snap-start"
            style={{
              scale,
              translateY,
            }}
          >
            <CardComponent />
          </motion.div>
        );
      })}
    </div>
  );
}
