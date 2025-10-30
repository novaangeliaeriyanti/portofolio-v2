'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Linkedin, Twitter } from 'lucide-react';
import Container from '@/components/ui/Container';
import { leadershipTeam as data } from '@/data/about';
import { fadeInUp, fadeScale, staggerContainer } from '@/lib/motion';

export default function Teams() {
  return (
    <section className="py-16">
      <Container>
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row md:justify-between mb-10"
        >
          <div>
            <p className="text-small font-semibold uppercase text-primary">
              Our Experts
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              {data.heading}
            </h2>
          </div>
          <a
            href="#"
            className="text-primary hover:text-primary/50 font-medium flex items-center gap-1 mt-3 sm:mt-0"
          >
            {data.button.label}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8">
          {data.members.map((member, i) => (
            <motion.div
              key={i}
              {...fadeScale}
              className="relative group transition"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                className="absolute bottom-0 translate-y-1/3 md:translate-y-1/2 left-1/3 z-10
                bg-primary text-white rounded-2xl p-4 w-48 space-y-1
                shadow-[0_8px_30px_rgba(255,145,0,0.55)]"
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm opacity-80">{member.role}</p>
                <div className="flex justify-center gap-3 pt-3">
                  <Link
                    href={member.socials.linkedin}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href={member.socials.twitter}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href={member.socials.facebook}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
