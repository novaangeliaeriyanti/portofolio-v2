'use client';

import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import Image from 'next/image';
import { leadershipTeam, aboutData } from '@/data/about';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp } from '@/lib/motion';

export default function AboutPage() {
  return (
    <Container className="py-20 space-y-12 min-h-[400px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        {...fadeIn}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div {...fadeInUp} className="space-y-6">
          <h1 className="text-[64px] md:text-[100px] lg:text-[120px] leading-[0.9] font-extrabold tracking-tight">
            {aboutData.hero.title.map((t, i) => (
              <span key={i}>
                {t}
                <br />
              </span>
            ))}
          </h1>

          <motion.div {...fadeInUp} className="space-y-4">
            <Logo />
            <p className="text-body max-w-md">{aboutData.hero.description}</p>
          </motion.div>
        </motion.div>

        <motion.div {...fadeInUp}>
          <Image
            src={aboutData.hero.image}
            alt="Interior design"
            className="w-full rounded-2xl object-cover h-[380px] md:h-[440px] shadow-md"
            height={380}
            width={440}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        {...fadeIn}
        className="grid lg:grid-cols-2 gap-12 items-center mt-20"
      >
        <motion.div {...fadeInUp}>
          <Image
            src={aboutData.philosophy.image}
            alt="Philosophy"
            className="w-full rounded-2xl object-cover h-[200px] md:h-[300px] shadow-md"
            height={200}
            width={300}
          />
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-4">
          <h3 className="text-3xl font-semibold">
            {aboutData.philosophy.title}
          </h3>
          <p className="text-body max-w-xl leading-relaxed">
            {aboutData.philosophy.description}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...fadeInUp}
        className="flex flex-col md:flex-row md:justify-between py-5"
      >
        <div>
          <p className="text-small font-semibold uppercase text-primary">
            Our Experts
          </p>
          <h2 className="text-3xl font-bold text-foreground">
            {leadershipTeam.heading}
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...fadeIn}
        className="grid md:grid-cols-3 gap-20 md:gap-8"
      >
        {leadershipTeam.members.map((member, i) => (
          <motion.div
            key={i}
            {...fadeInUp}
            transition={{ delay: i * 0.2 }}
            className="relative group transition"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border-2 border-foreground">
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
  );
}
