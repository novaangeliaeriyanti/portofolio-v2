import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Future of Web Design in 2025',
    excerpt:
      'Discover emerging trends shaping the next era of digital design and user experience.',
    image: '/images/blog/future-design.webp',
    date: 'October 2025',
    slug: 'future-of-web-design',
  },
  {
    title: 'How to Build Scalable Frontends',
    excerpt:
      'A guide to building performant, maintainable frontend architectures.',
    image: '/images/blog/scalable-frontend.webp',
    date: 'September 2025',
    slug: 'scalable-frontends',
  },
  {
    title: 'Why Branding Matters More Than Ever',
    excerpt:
      'In a crowded digital space, your brand is your strongest differentiator.',
    image: '/images/blog/branding-matters.webp',
    date: 'August 2025',
    slug: 'branding-matters',
  },
];

export const metadata = {
  title: 'Blog — YourCompany',
  description: 'Read the latest articles and insights from our team.',
};

export default function BlogPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="heading-2 mb-10 text-center">Our Blog</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            // href={`/blog/${post.slug}`}
            href={`/blog/modern-brand-strategy`}
            className="group block"
          >
            <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-tiny text-muted-foreground">{post.date}</p>
            <h3 className="font-semibold mt-2 group-hover:text-primary">
              {post.title}
            </h3>
            <p className="text-small mt-2 text-muted-foreground">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
