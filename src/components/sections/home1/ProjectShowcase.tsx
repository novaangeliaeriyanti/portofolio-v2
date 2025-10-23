'use client';

import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import projects from '@/data/projects';

export default function ProjectShowcase() {
  return (
    <section className=" bg-foreground bg-cover bg-center bg-fixed pb-20">
      <div className="py-20 container mx-auto rounded-3xl border border-background/20 bg-background/10">
        <Container className="max-w-6xl mx-auto relative z-10">
          <h2 className="heading-3 text-center mb-10 text-white">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((item, i) => (
              <Card
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
                stack={item.stack}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
