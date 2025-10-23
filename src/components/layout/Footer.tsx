import Link from 'next/link';
import Logo from '../ui/Logo';
import { footerSections } from '@/data/footer';

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 md:text-left">
        <div>
          <Logo />
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="px-6 grid sm:grid-cols-2 gap-10">
          {footerSections.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-lg mb-4">{section.heading}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
