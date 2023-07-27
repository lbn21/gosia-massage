import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';
import { format } from 'date-fns';

import Footer from '@app/app/components/Footer';
import Header from '@app/app/components/Header';
import { REVIEWS } from '@app/app/data/Reviews';
import '@app/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

const jsonLd: any = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Gosia's Mobile Massage Therapy",
  description:
    "Gosia's Mobile Massage Therapy provides professional massage therapy services in the comfort of your home in the Wigan area. Experience deep relaxation and recovery with our therapeutic massage services, delivered by an experienced therapist.",
  image: 'https://www.gosiamassage.com/images/gosia-massage-logo.png',
  telephone: '+447940158930',
  url: 'https://www.gosiamassage.com/',
  sameAs: ['https://www.facebook.com/gosia.massage.wigan'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wigan',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.546724,
    longitude: -2.630986,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.546724,
      longitude: -2.630986,
    },
    geoRadius: 29772,
  },
  paymentAccepted:
    'Payments can be made using Credit Card, Debit Card, and Cash',
  priceRange: '£60-£100',
  currenciesAccepted: 'GBP',
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
        price: '£60',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '90 Minute Massage',
        },
        price: '£80',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '120 Minute Massage',
        },
        price: '£100',
        priceCurrency: 'GBP',
      },
    ],
  },
};
export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  const reviews = REVIEWS.map((review) => {
    return {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: format(new Date(review.date), 'yyyy-MM-dd'),
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Google',
        sameAs: review.link,
      },
      reviewBody: review.content,
    };
  });

  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue:
      REVIEWS.reduce((acc, review) => acc + review.rating, 0) / REVIEWS.length,
    reviewCount: REVIEWS.length,
  };

  jsonLd['review'] = reviews;
  jsonLd['aggregateRating'] = aggregateRating;

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
