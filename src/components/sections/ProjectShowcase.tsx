'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import projects from '@/data/projects';

export default function ProjectShowcase() {
  return (
    <section className="py-20 bg-card">
      <Container className="max-w-6xl mx-auto">
        <h2 className="heading-3 text-center mb-10">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group border border-foreground/10 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-60">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-small text-muted-foreground">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.stack.map((tech: string, j: number) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-tiny font-semibold rounded-full bg-accent text-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
