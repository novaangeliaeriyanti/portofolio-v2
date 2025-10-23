'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { navLinks } from '@/data/navbar';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="fixed right-0 top-0 h-full w-4/5 sm:w-1/2 bg-background shadow-xl z-[1000] border-l border-foreground/10 flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-foreground/10">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === link.name ? null : link.name
                      )
                    }
                    className="w-full flex justify-between items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <span className="flex-1 text-left">{link.name}</span>
                    {link.children && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openSubmenu === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {link.children && (
                    <AnimatePresence>
                      {openSubmenu === link.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 mt-2 space-y-2 text-sm text-muted-foreground"
                        >
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-primary transition"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-foreground/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <nav
            ref={dropdownRef}
            className="hidden md:flex items-center gap-8 relative"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.name)
                }
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                <button
                  onClick={() =>
                    link.children
                      ? handleDropdownToggle(link.name)
                      : setActiveDropdown(null)
                  }
                  className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.children ? (
                    <>
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`mt-[2px] transition-transform ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </>
                  ) : (
                    <Link href={link.href ?? '#'}>{link.name}</Link>
                  )}
                </button>

                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2 bg-card shadow-lg rounded-lg overflow-hidden py-2 min-w-[180px] border border-foreground/10 z-50"
                      >
                        {link.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <ThemeToggle />
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-foreground"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {typeof window !== 'undefined' && createPortal(drawer, document.body)}
    </>
  );
}
