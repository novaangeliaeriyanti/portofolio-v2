'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import Container from '@/components/ui/Container';
import { faqs } from '@/data/faq';

export default function FAQSection() {
  return (
    <section
      className="bg-card bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1713947504256-135041318f31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632')",
      }}
    >
      <div className="bg-black/50 py-24">
        <Container className="max-w-6xl mx-auto ">
          <h2 className="heading-3 text-4xl font-bold text-center mb-12 text-background dark:text-foreground">
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
                src="https://images.unsplash.com/photo-1713947504256-135041318f31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
                alt="FAQ illustration"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute inset-0  rounded-2xl z-10" />

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
                    className="border border-background/10 rounded-xl overflow-hidden"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full text-left px-5 py-4 font-medium bg-background/50 hover:bg-accent/10 hover:text-background transition flex justify-between items-center">
                        {faq.question}
                        <span className="text-primary text-lg font-bold">
                          +
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-5 py-4 text-foreground bg-card/50 border-t border-foreground/10">
                      {faq.answer}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
