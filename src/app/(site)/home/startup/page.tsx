'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function StartupHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-16 py-28 bg-gradient-to-br from-sky-900 via-indigo-900 to-blue-800 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-white max-w-4xl leading-tight"
        >
          Build the Future, <br />{' '}
          <span className="text-sky-400">One Startup at a Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-slate-300 max-w-xl"
        >
          We help visionary founders launch, scale, and dominate their markets —
          from idea to IPO.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition"
          >
            Get Started
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            View Case Studies
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 relative"
        >
          <Image
            src="/images/startup-hero.webp"
            alt="Startup dashboard"
            width={900}
            height={500}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
          <div className="absolute -z-10 w-[800px] h-[800px] bg-sky-500/20 blur-3xl -top-20 left-1/2 -translate-x-1/2" />
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="py-20 px-6 md:px-16 text-center bg-background">
        <h2 className="text-4xl font-bold mb-12">Numbers That Speak Growth</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Users', value: '120K+' },
            { label: 'Funding Raised', value: '$45M' },
            { label: 'Client Retention', value: '97%' },
            { label: 'Avg. Growth Rate', value: '230%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-card border border-border/30 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-sky-600">{stat.value}</h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW WE SCALE */}
      <section className="py-24 px-6 md:px-16 bg-muted/30 text-center">
        <h2 className="text-4xl font-bold mb-12">How We Scale Your Startup</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: '🚀',
              title: 'Launch Fast',
              desc: 'We prototype and validate your idea quickly to minimize risk and speed up time-to-market.',
            },
            {
              icon: '📈',
              title: 'Grow Smart',
              desc: 'Through data-driven strategies, we scale what works and refine what doesn’t.',
            },
            {
              icon: '🤝',
              title: 'Partner for Impact',
              desc: 'We stay long-term, guiding your team through growth and expansion.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-border/30 rounded-2xl bg-card hover:bg-accent/5 transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INVESTORS */}
      <section className="py-16 bg-background text-center">
        <h2 className="text-3xl font-bold mb-8">
          Backed by World-Class Investors
        </h2>
        <div className="flex flex-wrap justify-center gap-10 opacity-80">
          {['sequoia', 'a16z', 'ycombinator', 'softbank'].map((logo, i) => (
            <Image
              key={i}
              src={`/images/investors/${logo}.svg`}
              alt={logo}
              width={120}
              height={50}
              className="grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-sky-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Vision?</h2>
        <p className="text-lg mb-8 opacity-90">
          Whether you’re pre-seed or Series C, our team is here to accelerate
          your growth.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-sky-700 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
