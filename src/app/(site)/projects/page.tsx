'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Website',
    category: 'Web Development',
    image: '/images/project1.jpg',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/images/project2.jpg',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    image: '/images/project3.jpg',
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web App',
    image: '/images/project4.jpg',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto py-20 px-6">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our latest works — crafted with precision, creativity, and performance in mind.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-card"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center text-white p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.category}</p>
              <a
                href={project.link}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Want to start your own project?</h2>
        <p className="text-muted-foreground mb-8">
          Let’s turn your ideas into reality.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
