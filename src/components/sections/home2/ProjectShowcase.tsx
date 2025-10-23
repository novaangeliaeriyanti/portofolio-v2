'use client';

import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import projects from '@/data/projects';

export default function ProjectShowcase() {
  return (
    <section
      className=" bg-card bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1714976326749-a51805fa9c20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')",
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
