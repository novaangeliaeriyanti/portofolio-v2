'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroCorporate() {
  return (
    <section className="bg-background text-foreground py-24 md:py-32">
      <Container className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-2 mb-4"
        >
          We Build Digital Solutions that Drive Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-body text-muted-foreground mb-8"
        >
          ModernCorp helps companies grow through strategic design and
          technology, creating innovative solutions tailored to your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button>Our Services</Button>
          <Button variant="outline">Contact Us</Button>
        </motion.div>
      </Container>
    </section>
  );
}
