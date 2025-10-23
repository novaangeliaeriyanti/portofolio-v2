'use client';

import { motion } from 'framer-motion';
import PageTitle from '@/components/ui/PageTitle';
import services from '@/data/services';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      <PageTitle
        title={services.title}
        description={services.desc}
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />

      <section className="relative container mx-auto py-20 px-6 space-y-24">
        <div className="absolute top-10 left-10">
          <div className="absolute top-10 left-5 w-40 h-40 rounded-full border border-foreground opacity-30" />
          <div
            className="w-28 h-28 opacity-30 text-foreground"
            style={{
              backgroundImage:
                'radial-gradient(currentColor 2px, transparent 2px)',
              backgroundSize: '14px 14px',
            }}
          />
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="absolute bottom-10 right-5 w-40 h-40 rounded-full border border-foreground opacity-30" />
          <div
            className="w-36 h-36 opacity-30 text-foreground"
            style={{
              backgroundImage:
                'radial-gradient(currentColor 2px, transparent 2px)',
              backgroundSize: '14px 14px',
            }}
          />
        </div>
        {services.items.map((service, i) => {
          const IconComponent = LucideIcons[service.icon];
          const isReversed = i % 2 !== 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col items-center gap-10 lg:gap-20 ${
                isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="relative w-full max-w-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                    <div className="p-2 bg-accent rounded-full text-background">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                {service.features && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {service.tools && (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {service.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
}
