'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageTitle from '@/components/ui/PageTitle';
import Card from '@/components/ui/Card';
import { blogPosts, categories } from '@/data/posts';
import SidebarBlog from '@/components/sections/shared/SidebarBlog';

export default function BlogPage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <PageTitle
        title="Our Blog"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      <section className="container mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-[2fr_1fr] gap-10">
        <div className="space-y-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${'modern-brand-strategy'}`} className="block">
                <Card
                  key={i}
                  image={post.image}
                  name={post.title}
                  description={post.excerpt}
                  subdesc={post.date}
                  variant="blog"
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <SidebarBlog recentPosts={recentPosts} categories={categories} />
      </section>
    </>
  );
}
