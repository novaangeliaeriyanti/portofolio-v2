'use client';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CTASection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed py-10 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469')",
        clipPath: 'ellipse(120% 90% at 50% 100%)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative text-center max-w-4xl mx-auto px-6 flex flex-col justify-center h-full gap-4">
        <h2 className="heading-3">Ready to Elevate Your Business?</h2>
        <p className="text-body text-white">
          Let’s collaborate to bring your digital vision to life.
        </p>
        <Button variant="secondary">Get in Touch</Button>
      </Container>
    </section>
  );
}
