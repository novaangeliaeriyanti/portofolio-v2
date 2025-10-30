'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface SidebarBlogProps {
  categories: string[];
  recentPosts: { title: string; slug?: string }[];
}

export default function SidebarBlog({
  categories,
  recentPosts,
}: SidebarBlogProps) {
  return (
    <aside className="space-y-6 h-full lg:border-l lg:pl-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6"
      >
        <h3 className="text-lg font-semibold mb-3">Search</h3>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full bg-card rounded-lg px-4 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="px-6"
      >
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li
              key={i}
              className="text-muted-foreground hover:text-primary cursor-pointer transition"
            >
              {cat}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="px-6"
      >
        <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post, i) => (
            <li key={i}>
              <Link
                href={`/blog/${post.slug ?? 'modern-brand-strategy'}`}
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}
