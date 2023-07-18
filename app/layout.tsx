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
  '@type': 'HealthAndBeautyBusiness',
  name: 'Gosia Massage',
  image: 'https://gosiamassage.com/images/gosia-massage-logo.png',
  '@id': 'https://gosiamassage.com/',
  url: 'https://gosiamassage.com/',
  telephone: '+447940158930',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wigan',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.545067,
    longitude: -2.632507,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.545067,
      longitude: -2.632507,
    },
    geoRadius: 32186,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
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
