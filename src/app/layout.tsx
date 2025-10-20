import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Tailwind v4.0 Theme Colors Example made by Kevstrosky',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          enableSystem={true}
          defaultTheme="system"
          attribute="data-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
