'use client';

import Container from '@/components/ui/Container';

const services = [
  {
    title: 'Web Development',
    desc: 'Building responsive and high-performing websites tailored for your business.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating intuitive and beautiful user experiences for web and mobile apps.',
  },
  {
    title: 'Brand Strategy',
    desc: 'Helping brands stand out with clear identity and impactful storytelling.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <Container className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="heading-3">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-foreground/10 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-small text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
