'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import * as LucideIcons from 'lucide-react';
import services, { Service } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-10 left-10">
        <div className="absolute top-10 left-5 w-40 h-40 rounded-full border border-muted opacity-30" />
        <div
          className="w-28 h-28 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(currentColor 2px, transparent 2px)',
            backgroundSize: '14px 14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        />
      </div>

      <div className="absolute bottom-10 right-10">
        <div className="absolute bottom-10 right-5 w-40 h-40 rounded-full border border-muted opacity-30" />
        <div
          className="w-36 h-36 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(currentColor 2px, transparent 2px)',
            backgroundSize: '14px 14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        />
      </div>

      <Container className="max-w-6xl mx-auto space-y-20 relative z-10">
        <h2 className="heading-3 text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        {services.items.map((service: Service, i: number) => {
          const IconComponent = LucideIcons[service.icon];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex flex-col justify-center items-center space-y-4 md:w-1/2 
    ${i % 2 === 1 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}
              >
                <div>
                  {IconComponent && (
                    <IconComponent className="w-16 h-16 text-primary" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>

              <div className="relative w-full max-w-md">
                <Image
                  src="/images/services/laptop-frame.png"
                  alt="Laptop frame"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
                <div className="absolute top-[7%] left-[11%] w-[78%] h-[83%] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} Illustration`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </section>
  );
}
