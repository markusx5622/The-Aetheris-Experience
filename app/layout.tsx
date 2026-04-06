import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'THE AETHERIS EXPERIENCE',
  description: 'Quantum Design Agency 2026',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-cyan-accent/30 selection:text-cyan-accent" suppressHydrationWarning>
        <div className="noise-overlay" />
        <SmoothScroll>
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
