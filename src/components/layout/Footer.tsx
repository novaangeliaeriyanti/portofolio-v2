'use client';

import Link from 'next/link';
import { footerSections } from '@/data/footer';
import Logo from '../ui/Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { JSX } from 'react';
import Container from '../ui/Container';

const icons: Record<string, JSX.Element> = {
  facebook: <Facebook className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="bg-foreground dark:bg-background pt-16 pb-10 relative overflow-hidden">
      <Container className="mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-small text-white leading-relaxed">
            Ladybug is your trusted partner in industrial construction,
            fabrication, and maintenance services — delivering excellence
            through innovation.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-5 py-2 rounded-md hover:bg-primary/50 transition"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {footerSections.map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold text-white mb-4">{section.heading}</h4>

            {section.content && (
              <ul className="space-y-2 text-small text-white">
                {section.content.map((text, j) => (
                  <li key={j}>{text}</li>
                ))}
              </ul>
            )}
            {section.links && (
              <ul className="space-y-2 text-sm">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary transition"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {section.socials && (
              <div className="flex gap-3 mt-4">
                {section.socials.map((social, j) => (
                  <Link
                    key={j}
                    href={social.href}
                    className="text-white p-2 bg-primary rounded-full hover:bg-primary/50 transition"
                  >
                    {icons[social.icon]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </Container>

      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Ladybug. All Rights Reserved.
      </div>
    </footer>
  );
}
