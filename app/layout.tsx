import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import Footer from '@app/app/components/Footer';
import Header from '@app/app/components/Header';
import '@app/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile Massage Therapy',
  provider: {
    '@type': 'Person',
    name: 'Gosia',
    image: 'https://www.gosiamassage.com/images/gosia-massage-logo.png',
    telephone: '+447940158930',
  },
  url: 'https://www.gosiamassage.com/',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.545067,
      longitude: -2.632507,
    },
    geoRadius: 32186,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Massage Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '60 Minute Massage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '90 Minute Massage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '120 Minute Massage',
        },
      },
    ],
  },
  description:
    'At Gosia Massage, I offer professional mobile massage services in and around Wigan. I bring personalized, professional massage services to your home.',
};

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-white')}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
