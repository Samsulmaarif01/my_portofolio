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
  metadataBase: new URL('https://samsulmaarif.com'),
  title: 'Samsul Maarif | Web & Flutter Developer',
  description: 'Portfolio of Samsul Maarif, a Web Developer and Flutter Developer from Indonesia specializing in modern web applications and mobile apps.',
  keywords: ['Samsul Maarif', 'Portfolio', 'Web Developer', 'Flutter Developer', 'Indonesia', 'React', 'Next.js'],
  authors: [{ name: 'Samsul Maarif' }],
  creator: 'Samsul Maarif',
  publisher: 'Samsul Maarif',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samsulmaarif.com',
    siteName: 'Samsul Maarif Portfolio',
    title: 'Samsul Maarif | Web & Flutter Developer',
    description: 'Portfolio of Samsul Maarif, a Web Developer and Flutter Developer from Indonesia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samsul Maarif Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samsul Maarif | Web & Flutter Developer',
    description: 'Portfolio of Samsul Maarif, a Web Developer and Flutter Developer from Indonesia.',
    creator: '@samsulmaarif01',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Samsul Maarif',
              url: 'https://samsulmaarif.com',
              jobTitle: 'Web Developer & Flutter Developer',
              nationality: 'Indonesia',
              sameAs: [
                'https://github.com/Samsulmaarif01',
                'https://linkedin.com/in/samsulmaarif01',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${syne.variable} bg-background text-on-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
