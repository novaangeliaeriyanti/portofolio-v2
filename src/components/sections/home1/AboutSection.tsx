'use client';

import Container from '@/components/ui/Container';
import { about } from '@/data/about';

export default function AboutSection() {
  return (
    <section className="py-20 bg-foreground">
      <Container className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="heading-3 text-background">{about.title}</h2>
        <p className="text-body text-background">{about.desc}</p>
      </Container>
    </section>
  );
}
