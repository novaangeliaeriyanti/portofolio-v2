'use client';

import PageTitle from '@/components/ui/PageTitle';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { contactInfo } from '@/data/contacts';
import NewsletterCard from '@/components/sections/shared/NewsLetterCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <PageTitle
        title="Get in Touch"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      <section className="container mx-auto py-20 px-6 space-y-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-10"
          >
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-muted bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-fit px-5 flex items-center justify-center gap-2 bg-primary text-background font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-60"
              >
                <Send size={18} />
                {submitted ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-500 mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
          <NewsletterCard />
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = LucideIcons[item.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-md"
              >
                <Icon className="text-primary mb-3" size={28} />
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.897489175247!2d106.82273657499018!3d-6.149229460096221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c45a84fdff%3A0x37a7d62b9b3b1f8!2sJakarta!5e0!3m2!1sen!2sid!4v1697516400000!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>
    </>
  );
}
