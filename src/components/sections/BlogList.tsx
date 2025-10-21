'use client';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { allPosts } from '@/data/posts';

const BlogList = () => {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();
  return (
    <article className="container mx-auto max-w-3xl py-16 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground text-sm">
          {post.date} — {post.author}
        </p>
      </header>

      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={600}
        className="rounded-2xl shadow-lg mb-10"
      />

      <div
        className="prose prose-lg dark:prose-invert mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogList;
