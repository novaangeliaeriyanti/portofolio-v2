'use client';

import { Code, Palette, Rocket, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'We build scalable, responsive, and high-performing web applications using modern frameworks like Next.js and React.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps built with React Native and Expo — fast, intuitive, and user-focused.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Clean and modern design with a focus on usability, crafted with Figma and Framer.',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description:
      'We help you plan, launch, and scale your online presence effectively to reach your target audience.',
  },
];

export default function ServicesPage() {
  return (
    <section className="container mx-auto py-20 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We deliver full-cycle digital solutions — from concept to launch and beyond.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-card text-foreground shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-accent text-background">
              <Icon size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-8">
          Let’s collaborate and bring your ideas to life.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
