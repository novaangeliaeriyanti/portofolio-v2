'use client';
import PageTitle from '@/components/ui/PageTitle';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const counters = [
    { label: 'Years of Experience', value: 5 },
    { label: 'Projects Completed', value: 120 },
    { label: 'Clients Served', value: 45 },
  ];

  const timeline = [
    { year: '2020', event: 'Company founded with a small team of 3' },
    { year: '2021', event: 'Launched our first SaaS product' },
    { year: '2023', event: 'Expanded to international clients' },
  ];

  return (
    <>
      <PageTitle
        title="About Us"
        description="We are a creative digital agency focused on delivering impactful design and modern web experiences."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      <section className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {counters?.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-primary">{c.value}+</p>
              <p className="text-muted-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8 border-l-2 border-primary pl-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="text-muted-foreground">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
