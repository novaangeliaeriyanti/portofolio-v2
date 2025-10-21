'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import projects from '@/data/projects';
import Card from '../ui/Card';

export default function ProjectShowcase() {
  return (
    <section
      className=" bg-card bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <div className="bg-black/50 py-20">
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
