import BlogList from '@/components/sections/shared/BlogList';
import SidebarBlog from '@/components/sections/shared/SidebarBlog';
import { blogPosts, categories } from '@/data/posts';
import { Suspense } from 'react';

export default async function Page() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Suspense fallback={<div></div>}>
      <section className="container mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[2fr_1fr] gap-10">
        <BlogList />
        <SidebarBlog recentPosts={recentPosts} categories={categories} />
      </section>
    </Suspense>
  );
}
