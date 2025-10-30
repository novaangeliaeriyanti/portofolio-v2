'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { articles } from '@/data/news';
import { fadeInUp, fadeScale, staggerContainer, fadeIn } from '@/lib/motion';
import { useRouter } from 'next/navigation';

export default function NewsList() {
  const router = useRouter();
  return (
    <Container className="pb-16 space-y-8">
      <motion.div {...staggerContainer} className="mx-auto">
        <motion.div
          {...fadeInUp}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10"
        >
          <h2 className="text-3xl font-bold">Recent news and events</h2>
          <a
            href="#"
            className="text-primary hover:text-primary/50 font-medium flex items-center gap-1 mt-3 sm:mt-0"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article, i) => (
            <motion.div
              key={i}
              {...fadeScale}
              className="bg-foreground border-2 border-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-52 lg:h-72 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary text-tiny text-foreground font-semibold px-3 py-1 rounded-md">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-tiny mb-1">{article.date}</p>
                <h3 className="text-lg font-semibold text-background mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-small line-clamp-5">{article.desc}</p>

                <motion.div
                  {...fadeIn}
                  className="mt-5 inline-flex items-center gap-2 w-fit"
                >
                  <Button onClick={() => router.push('/blogs/123')}>
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
