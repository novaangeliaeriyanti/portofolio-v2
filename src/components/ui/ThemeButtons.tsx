'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Check, Sun, Moon } from 'lucide-react';
import HoverSwapIcon from './HoverSwapIcon';

interface ThemeOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function ThemeButtons() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themes: ThemeOption[] = [
    { id: 'light', label: 'Light Mode', icon: <Sun className="w-6 h-6" /> },
    { id: 'dark', label: 'Dark Mode', icon: <Moon className="w-6 h-6" /> },
  ];

  if (!mounted) {
    return null;
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="absolute inline-block text-left top-7 left-7 z-50">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="overflow-hidden inline-block h-12 w-12 rounded-full"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <HoverSwapIcon
            icon={effectiveTheme === 'dark' ? Moon : Sun}
            hoverIcon={effectiveTheme === 'dark' ? Sun : Moon}
            size={24}
            className="cursor-pointer h-12 w-12 bg-background text-foreground hover:bg-accent transition-colors duration-300"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </button>
      <div
        className={`absolute top-full w-48 bg-background rounded-md ring-none transition-all overflow-hidden origin-bottom ${
          open
            ? 'scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex flex-col">
          {themes.map(({ id, label, icon }) => {
            const isActive = effectiveTheme === id;
            return (
              <button
                key={id}
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                }}
                className={`flex gap-2 items-center px-4 py-2 text-left text-body w-full transition-colors ${
                  isActive
                    ? 'bg-accent text-foreground dark:text-background'
                    : 'text-foreground  hover:bg-accent  dark:hover:bg-accent dark:hover:text-background'
                }`}
              >
                {icon}
                <span>{label}</span>
                {isActive && <Check className="ml-auto w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
