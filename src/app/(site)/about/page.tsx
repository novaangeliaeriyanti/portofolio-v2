'use client';
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
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>

      <div className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground">
        <p>
          We are a creative digital agency focused on delivering impactful design and modern web experiences.
        </p>
      </div>

      {/* Counters */}
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

      {/* Timeline */}
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
  );
}
