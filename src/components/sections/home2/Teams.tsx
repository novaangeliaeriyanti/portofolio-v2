'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Facebook, Linkedin, Twitter } from 'lucide-react';
import Container from '@/components/ui/Container';
import { leadershipTeam as data } from '@/data/about';

export default function Teams() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center text-center mb-10 md:mb-20">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.members.slice(0, 3).map((member, i) => (
            <div
              key={i}
              className={`relative group flex flex-col transition-all duration-500 ${
                i === 1 ? 'md:translate-y-[-40px]' : ''
              }`}
            >
              {i === 1 && (
                <div
                  className="bg-primary text-white rounded-t-3xl p-4 w-full text-center
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
              )}

              <div
                className={`relative w-full overflow-hidden shadow-md bg-foreground h-[520px] ${
                  i === 1 ? 'rounded-b-3xl' : 'rounded-t-3xl'
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {i !== 1 && (
                <div
                  className="bg-primary text-white p-4 w-full text-center
                  shadow-[0_8px_30px_rgba(255,145,0,0.55)] rounded-b-3xl"
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
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
