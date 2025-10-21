'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AgencyHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-sky-900 overflow-hidden">
        {/* Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            We’re the <span className="text-sky-400">Agency</span>
            <br /> that <span className="text-pink-500">Builds Brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-slate-300 max-w-md mx-auto md:mx-0"
          >
            From bold visual identities to stunning digital experiences — we
            help brands grow with purpose and personality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-400 transition"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View Works
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 relative mt-12 md:mt-0"
        >
          <Image
            src="/images/hero-agency.webp"
            alt="Creative Team"
            width={600}
            height={500}
            className="rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute -z-10 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl -right-10 -bottom-10" />
        </motion.div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 px-6 md:px-16 bg-background text-center">
        <h2 className="text-4xl font-bold mb-12">Our Creative Process</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            {
              step: '01',
              title: 'Discover',
              desc: 'We dive deep into your brand to understand its essence.',
            },
            {
              step: '02',
              title: 'Design',
              desc: 'Our team creates bold visuals that communicate clearly.',
            },
            {
              step: '03',
              title: 'Develop',
              desc: 'We build functional, high-performance digital products.',
            },
            {
              step: '04',
              title: 'Deliver',
              desc: 'We launch and refine to make sure your brand shines.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-border/30 rounded-2xl bg-card hover:bg-accent/5 transition"
            >
              <span className="block text-4xl font-bold text-primary mb-2">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-16 bg-muted/30 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap justify-center gap-10 opacity-70">
          {['spotify', 'airbnb', 'notion', 'slack', 'figma'].map((logo, i) => (
            <Image
              key={i}
              src={`/images/logos/${logo}.svg`}
              alt={logo}
              width={100}
              height={40}
              className="grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 px-6 md:px-16 bg-background">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: 'Bold Agency Rebrand', img: '/images/agency-work1.webp' },
            { title: 'Tech Startup Landing', img: '/images/agency-work2.webp' },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-2xl relative shadow-lg group"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-[350px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-semibold text-lg">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-sky-600 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Make Your Brand Unforgettable
        </h2>
        <p className="text-lg mb-8 opacity-90">
          We’re ready to collaborate, innovate, and bring your ideas to life.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-sky-700 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
