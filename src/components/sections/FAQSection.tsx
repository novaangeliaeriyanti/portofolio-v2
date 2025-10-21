'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import Container from '@/components/ui/Container';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on the scope and complexity. Generally, a website project takes around 4–8 weeks from start to finish.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer:
      'Yes! We offer maintenance plans to keep your website secure, updated, and running smoothly after launch.',
  },
  {
    question: 'Can you help with branding and design?',
    answer:
      'Absolutely. Our team provides full-service branding, from logo design to complete visual identity systems.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, we collaborate with clients from all over the world remotely through online communication tools.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <Container className="max-w-6xl mx-auto">
        <h2 className="heading-3 text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="FAQ illustration"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/50 rounded-2xl z-10" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-black hover:bg-white hover:scale-105 transition-transform"
              >
                <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-60 group-hover:opacity-80" />
                <Play className="w-6 h-6" />
                <span className="sr-only">Play Video</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border border-foreground/10 rounded-xl overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left px-5 py-4 font-medium bg-card hover:bg-accent/10 transition flex justify-between items-center">
                      {faq.question}
                      <span className="text-primary text-lg font-bold">+</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5 py-4 text-muted-foreground bg-card/50 border-t border-foreground/10">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
