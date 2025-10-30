'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import SidebarBlog from '@/components/sections/shared/SidebarBlog';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { blogDetail } from '@/data/news';
import { articles, categories } from '@/data/news';
import { Calendar, User } from 'lucide-react';

export default function DetailBlogs() {
  if (!blogDetail) {
    return (
      <Container className="py-40 text-center">
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </Container>
    );
  }
  return (
    <Container className="py-20">
      <div className="grid lg:grid-cols-4 gap-12">
        <motion.div {...fadeIn} className="lg:col-span-3 space-y-10">
          <div className="space-y-4">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={blogDetail.image}
                alt={blogDetail.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md">
                {blogDetail.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {blogDetail.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blogDetail.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogDetail.author.name}</span>
              </div>
            </div>

            <div
              className="prose prose-zinc max-w-none text-body leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogDetail.content }}
            />
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Related Posts</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogDetail.relatedPosts.map((post, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  className="rounded-xl overflow-hidden border border-foreground/10 hover:shadow-md transition"
                >
                  <div key={i} className="relative h-40 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <h4 className="font-semibold text-sm line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="lg:col-span-1 space-y-10">
          <SidebarBlog
            recentPosts={articles.slice(0, 3)}
            categories={categories}
          />
        </motion.div>
      </div>
    </Container>
  );
}
