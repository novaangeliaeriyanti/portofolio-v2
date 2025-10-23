'use client';

import { newsletterData } from '@/data/contacts';
import { motion } from 'framer-motion';

interface NewsletterCardProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export default function NewsletterCard({
  title = newsletterData.title,
  description = newsletterData.description,
  backgroundImage = newsletterData.backgroundImage,
}: NewsletterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl p-10 shadow-md overflow-hidden text-background"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px]" />
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-sm mb-5 text-gray-200">{description}</p>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-primary transition placeholder:text-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-primary text-background font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
}
