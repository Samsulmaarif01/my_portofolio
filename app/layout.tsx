import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-jetbrains-mono'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-space-grotesk'
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-syne'
});

export const metadata: Metadata = {
  title: 'Samsul Maarif - Portfolio',
  description: 'Portfolio Samsul Maarif, Web Developer dan Flutter Developer dari Indonesia.',
};

export const viewport = {
  themeColor: '#6c63ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${syne.variable} bg-background text-on-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
