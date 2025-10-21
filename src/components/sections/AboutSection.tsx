'use client';

import Container from '@/components/ui/Container';

export default function AboutSection() {
  return (
    <section className="py-20  text-foreground">
      <Container className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="heading-3">About Our Company</h2>
        <p className="text-body text-muted-foreground">
          With over 8 years of experience in the industry, ModernCorp delivers
          high-quality web and mobile solutions for clients worldwide. Our
          mission is to empower businesses through innovation, design, and
          technology.
        </p>
      </Container>
    </section>
  );
}
