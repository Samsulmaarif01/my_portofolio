import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
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
    images: ['/og-image.png'],
    creator: '@samsulmaarif01',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://samsulmaarif.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          id="lang-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('lang');
                  var lang = (saved === 'id' || saved === 'en')
                    ? saved
                    : ((navigator.language || 'en').toLowerCase().indexOf('id') === 0 ? 'id' : 'en');
                  document.documentElement.lang = lang;
                } catch (e) {}
              })();
            `
          }}
        />
        <meta name="theme-color" content="#131211" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f0ede6" media="(prefers-color-scheme: light)" />
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
      <body className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} bg-bg text-fg font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
