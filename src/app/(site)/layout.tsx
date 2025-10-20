import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
