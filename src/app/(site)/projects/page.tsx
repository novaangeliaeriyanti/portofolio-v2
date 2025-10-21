'use client';

import Card from '@/components/ui/Card';
import PageTitle from '@/components/ui/PageTitle';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <>
      <PageTitle
        title="Our Projects"
        description="Explore our latest works — crafted with precision, creativity, and
          performance in mind."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />
      <section className="container mx-auto py-20 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Want to start your own project?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let’s turn your ideas into reality.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
