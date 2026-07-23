import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope, Sora } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800'],
  variable: '--font-sora'
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
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
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
      <body className={`${jetbrainsMono.variable} ${manrope.variable} ${sora.variable} bg-bg text-fg font-sans antialiased selection:bg-accent selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
