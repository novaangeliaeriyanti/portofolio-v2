'use client';

import Image from 'next/image';
import { installationServicesData } from '@/data/services';
import { MessageSquare, Settings, Wallet, Package } from 'lucide-react';
import { JSX } from 'react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

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
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase mb-2">
            {data.headingEyebrow}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
            {data.headingTitle}
          </h2>
        </div>
        <div className="text-small leading-relaxed border-l border-gray-200 pl-6">
          {data.intro}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 py-5">
              <Image
                src={data.cards[0].image}
                alt="installation service main"
                width={600}
                height={800}
                className="object-cover w-full h-[400px] rounded-2xl shadow-md"
              />
            </div>
            <div className="pr-5">
              <Image
                src={data.cards[1].image}
                alt="installation service secondary"
                width={400}
                height={300}
                className="object-cover w-full h-[200px] rounded-2xl shadow-md"
              />
            </div>
            <div className="pl-5">
              <Image
                src={data.cards[2].image}
                alt="installation service secondary"
                width={400}
                height={300}
                className="object-cover w-full h-[200px] rounded-2xl shadow-md"
              />
            </div>
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 left-1/3
             bg-primary text-white rounded-2xl px-6 py-8 w-48 space-y-4
             shadow-[0_8px_30px_rgba(255,145,0,0.55)]"
          >
            {data.cards[0].stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </Container>
  );
}
