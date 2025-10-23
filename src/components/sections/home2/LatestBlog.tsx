'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { blogPosts } from '@/data/posts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function LatestBlog() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(2);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(blogPosts.length / cardsPerView);
  const startIdx = current * cardsPerView;
  const visibleCards = blogPosts.slice(startIdx, startIdx + cardsPerView);

  const next = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6 space-y-16">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog</h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.8, ease: 'easeInOut' }}
              className={`grid gap-8 ${
                cardsPerView === 3
                  ? 'grid-cols-3'
                  : cardsPerView === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1'
              }`}
            >
              {visibleCards.map((post, i) => (
                <Card
                  key={i}
                  image={post.image}
                  name={post.title}
                  description={post.excerpt}
                  subdesc={post.date}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
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

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-foreground/10 rounded-full p-2 hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-background border border-foreground/10 rounded-full p-2 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
