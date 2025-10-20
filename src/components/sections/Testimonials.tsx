'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import testimonials from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="heading-3">What Our Clients Say</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-foreground/10 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.client}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-medium">{t.client}</h4>
                  <p className="text-tiny text-muted-foreground">
                    Rating: {t.rating}
                  </p>
                </div>
              </div>
              <p className="text-body italic">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
