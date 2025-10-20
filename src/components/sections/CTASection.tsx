'use client';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CTASection() {
  return (
    <section className="py-20 bg-foreground text-background text-center">
      <Container className="max-w-3xl mx-auto space-y-6">
        <h2 className="heading-3">Ready to Elevate Your Business?</h2>
        <p className="text-body">
          Let’s collaborate to bring your digital vision to life.
        </p>
        <Button variant="secondary">Get in Touch</Button>
      </Container>
    </section>
  );
}
