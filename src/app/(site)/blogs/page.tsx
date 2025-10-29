import SidebarBlog from '@/components/sections/shared/SidebarBlog';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { articles, categories } from '@/data/news';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Blogs() {
  return (
    <Container className="py-20">
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Recent news and events</h2>
          </div>

          {articles[0] && (
            <div className="rounded-2xl overflow-hidden relative">
              <div className="relative h-96 w-full">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
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
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <div
                key={i}
                className="overflow-hidden shadow hover:shadow-lg transition border-2 border-foreground rounded-2xl "
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {article.category}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-tiny mb-2">{article.date}</p>
                  <h3 className="text-sm font-semibold line-clamp-2 border-t pt-2">
                    {article.title}
                  </h3>
                  <p className="text-small line-clamp-3">{article.desc}</p>
                  <Button className="inline-flex items-center gap-2 w-fit">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold">Popular</h3>
          {articles.map((a, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-primary">{i + 1}</span>
              <p className="text-sm font-medium leading-tight line-clamp-2">
                {a.title}
              </p>
            </div>
          ))}
        </div>
        <SidebarBlog
          recentPosts={articles?.slice(0, 3)}
          categories={categories}
        />
      </div>
    </Container>
  );
}
