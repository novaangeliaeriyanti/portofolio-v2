'use client';
import PageTitle from '@/components/ui/PageTitle';
import { counters, timeline, visionMission, team, about } from '@/data/about';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <PageTitle
        title="About Us"
        description="We are a creative digital agency focused on delivering impactful design and modern web experiences."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        align="center"
      />
      <section className="container mx-auto py-20 px-6 space-y-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {about.title}
          </h2>
          <p className="text-body text-muted-foreground">{about.desc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {counters?.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-primary">{c.value}+</p>
              <p className="text-muted-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>
        <section className="relative py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Journey
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-primary/50 transform -translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background" />

                    <div
                      className={`md:w-5/12 p-6 rounded-2xl bg-foreground/10 border border-foreground/10 shadow-sm ${
                        idx % 2 === 0
                          ? 'md:mr-auto md:text-right'
                          : 'md:ml-auto md:text-left'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-primary">
                        {item.year}
                      </h3>
                      <p className="text-muted-foreground mt-2">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
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
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold">Our Vision & Mission</h2>
            <div className="flex justify-between gap-10">
              <div className="flex-1 text-body text-muted-foreground border border-foreground/50 rounded-3xl p-10">
                {visionMission.vision}
              </div>
              <div className="flex-1 text-body text-muted-foreground border border-foreground/50 rounded-3xl p-10">
                {visionMission.mission}
              </div>
            </div>
          </div>
        </div>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-foreground/10"
              >
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={600}
                    width={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-0 w-full text-center px-4">
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/70 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
