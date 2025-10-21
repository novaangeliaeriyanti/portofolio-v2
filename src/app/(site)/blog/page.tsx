import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Card from '@/components/ui/Card';
import { blogPosts } from '@/data/posts';

export const metadata = {
  title: 'Blog — YourCompany',
  description: 'Read the latest articles and insights from our team.',
};

export default function BlogPage() {
  return (
    <>
      <PageTitle
        title="Our Blog"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />
      <section className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/modern-brand-strategy`}
              className="group block"
            >
              <Card
                key={i}
                image={post.image}
                name={post.title}
                description={post.excerpt}
                subdesc={post.date}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
