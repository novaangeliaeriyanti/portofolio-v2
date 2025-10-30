'use client';

import Image from 'next/image';
import { installationServicesData } from '@/data/services';
import { MessageSquare, Settings, Wallet, Package } from 'lucide-react';
import { JSX } from 'react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { heroBackgroundVariants, heroContentVariants } from '@/lib/motion';

const iconMap: Record<string, JSX.Element> = {
  chat: <MessageSquare className="w-6 h-6 text-foreground" />,
  settings: <Settings className="w-6 h-6 text-foreground" />,
  wallet: <Wallet className="w-6 h-6 text-foreground" />,
  package: <Package className="w-6 h-6 text-foreground" />,
};

export default function Services() {
  const data = installationServicesData;

  return (
    <Container className="py-16 space-y-8">
      <motion.div
        variants={heroContentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-between items-center gap-4"
      >
        <div className="flex-1">
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase mb-2">
            {data.headingEyebrow}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            {data.headingTitle}
          </h2>
        </div>
        <div className="flex-1 text-small leading-relaxed">{data.intro}</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <motion.div
          className="md:col-span-2"
          variants={heroBackgroundVariants}
          initial="enter"
          whileInView="center"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={data.cards[1].image}
            alt="installation service main"
            width={600}
            height={800}
            className="object-cover object-center w-full h-[250px] md:h-[300px] rounded-2xl shadow-md"
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 h-full"
          variants={heroContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.cards[0].stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center bg-primary text-white rounded-2xl px-6 py-6 md:py-8 w-full h-full shadow-[0_8px_30px_rgba(255,145,0,0.55)]"
            >
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] py-6 items-center gap-6 md:gap-0">
        <motion.div
          className="-mt-6 -mb-6 overflow-hidden"
          variants={heroBackgroundVariants}
          initial="enter"
          whileInView="center"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={data.cards[0].image}
            alt="left image"
            width={400}
            height={500}
            className="w-full h-[320px] object-cover object-center rounded-t-2xl md:rounded-l-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="bg-foreground/5 px-10 py-8 rounded-2xl flex flex-col justify-center text-foreground leading-relaxed shadow-md z-10"
          variants={heroContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-8">
            <div className="space-y-6">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-foreground/10 rounded-xl">
                    {iconMap[feature.icon]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-small">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 space-x-4 flex items-center">
              <Button className="bg-primary text-black hover:bg-primary/50">
                {data.ctaPrimary.label}
              </Button>
              <p className="text-small">
                Or call us at{' '}
                <a
                  href={data.contactPhone.href}
                  className="font-semibold text-primary hover:underline"
                >
                  {data.contactPhone.label}
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="-mt-6 -mb-6 overflow-hidden"
          variants={heroBackgroundVariants}
          initial="enter"
          whileInView="center"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={data.cards[2].image}
            alt="right image"
            width={400}
            height={500}
            className="w-full h-[320px] object-cover object-center rounded-b-2xl md:rounded-r-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </Container>
  );
}
