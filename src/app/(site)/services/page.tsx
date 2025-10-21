'use client';

import { motion } from 'framer-motion';
import PageTitle from '@/components/ui/PageTitle';
import services from '@/data/services';
import * as LucideIcons from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <PageTitle
        title="Our Services"
        description="We deliver full-cycle digital solutions — from concept to launch and beyond."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />
      <section className="container mx-auto py-20 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, desc }, index) => {
            const IconComponent = LucideIcons[Icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card text-foreground shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-accent text-background">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            );
          })}
        </div>

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
    </>
  );
}
