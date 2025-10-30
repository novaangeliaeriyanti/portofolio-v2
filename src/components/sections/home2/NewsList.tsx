'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { articles } from '@/data/news';
import { fadeIn, fadeInUp } from '@/lib/motion';
import { useRouter } from 'next/navigation';

export default function NewsList() {
  const router = useRouter();
  return (
    <Container className="py-16 space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto"
      >
        <motion.div
          {...fadeInUp}
          className="flex flex-col justify-center items-center mb-10"
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

        <motion.div
          {...fadeIn}
          className="flex flex-col justify-center md:flex-row md:justify-between gap-10 mb-8"
        >
          {articles[0] && (
            <motion.div
              {...fadeInUp}
              className="flex-2 rounded-2xl overflow-hidden relative min-h-[250px]"
            >
              <div className="relative h-64 md:h-full w-full">
                {articles[0]?.image && (
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title || 'Headline image'}
                    fill
                    className="object-cover"
                  />
                )}
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md">
                  HEADLINE
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 w-fit bg-black/50 backdrop-blur-md p-4 rounded-lg text-white">
                <p className="text-tiny mb-2">{articles[0].date}</p>
                <h2 className="font-bold text-xl line-clamp-2">
                  {articles[0].title}
                </h2>
              </div>
            </motion.div>
          )}

          <motion.div {...fadeInUp} className="flex-1 space-y-6">
            <h3 className="text-xl font-bold">Popular</h3>
            {articles.map((a, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl font-bold text-primary">{i + 1}</span>
                <p className="text-sm font-medium leading-tight line-clamp-2">
                  {a.title}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div {...fadeIn} className="grid md:grid-cols-3 gap-8">
          {articles.slice(1, 4).map((article, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="border-2 border-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-52 lg:h-72 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary text-tiny text-white font-semibold px-3 py-1 rounded-md">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-tiny mb-1">{article.date}</p>
                <h3 className="block text-xl font-semibold mb-2 text-foreground border-t pt-2 border-foreground line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-small line-clamp-3">{article.desc}</p>

                <Button
                  onClick={() => router.push('/blogs/123')}
                  className="mt-5 inline-flex items-center gap-2 w-fit"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
