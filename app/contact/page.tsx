import { Metadata } from 'next';
import Link from 'next/link';

import { ILocation } from '@app/app/components/ILocation';
import { getLocations } from '@app/app/utils/LocationHelpers';

export const metadata: Metadata = {
  title: 'Connect with Gosia: Mobile Massage Therapy, Wigan',
  description:
    'Contact Gosia, your mobile massage therapist in Wigan, for personalized home sessions. Answering your queries, scheduling appointments, and fostering wellness.',
  keywords:
    'Contact Gosia, Mobile Massage Wigan, Book a Massage, Home Visit Massage, Wigan Massage Therapist, Mobile Therapy, Wellness, Health, Contact Massage Therapist',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.gosiamassage.com/contact',
  },
  headline: 'Connect with Gosia: Mobile Massage Therapy, Wigan',
  image:
    'https://www.gosiamassage.com/images/gosia_mobile_massage_therapist.webp',
  author: {
    '@type': 'Person',
    name: 'Gosia',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gosia Massage',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.gosiamassage.com/images/gosia-massage-logo.png',
    },
  },
  description:
    'Contact Gosia, your mobile massage therapist in Wigan, for personalized home sessions. Answering your queries, scheduling appointments, and fostering wellness.',
};

const LOCATIONS: { slug: string; name: string }[] = [
  { slug: 'altrincham', name: 'Altrincham' },
  { slug: 'atherton', name: 'Atherton' },
  { slug: 'bootle', name: 'Bootle' },
  { slug: 'bolton', name: 'Bolton' },
  { slug: 'bury', name: 'Bury' },
  { slug: 'chorley', name: 'Chorley' },
  { slug: 'crosby', name: 'Crosby' },
  { slug: 'darwen', name: 'Darwen' },
  { slug: 'eccles', name: 'Eccles' },
  { slug: 'farnworth', name: 'Farnworth' },
  { slug: 'golborne', name: 'Golborne' },
  { slug: 'great-sankey', name: 'Great Sankey' },
  { slug: 'hindley', name: 'Hindley' },
  { slug: 'kirkby', name: 'Kirkby' },
  { slug: 'leigh', name: 'Leigh' },
  { slug: 'leyland', name: 'Leyland' },
  { slug: 'litherland', name: 'Litherland' },
  { slug: 'liverpool', name: 'Liverpool' },
  { slug: 'manchester', name: 'Manchester' },
  { slug: 'northwich', name: 'Northwich' },
  { slug: 'ormskirk', name: 'Ormskirk' },
  { slug: 'prescot', name: 'Prescot' },
  { slug: 'prestwich', name: 'Prestwich' },
  { slug: 'radcliffe', name: 'Radcliffe' },
  { slug: 'runcorn', name: 'Runcorn' },
  { slug: 'saint-helens', name: 'Saint Helens' },
  { slug: 'sale', name: 'Sale' },
  { slug: 'salford', name: 'Salford' },
  { slug: 'skemersdale', name: 'Skemersdale' },
  { slug: 'stretford', name: 'Stretford' },
  { slug: 'tyldesley', name: 'Tyldesley' },
  { slug: 'urmston', name: 'Urmston' },
  { slug: 'walkden', name: 'Walkden' },
  { slug: 'warrington', name: 'Warrington' },
  { slug: 'westhoughton', name: 'Westhoughton' },
  { slug: 'whitefield', name: 'Whitefield' },
  { slug: 'widnes', name: 'Widnes' },
  { slug: 'wigan', name: 'Wigan' },
];

export default function ContactMe() {
  const locations = getLocations();

  const phone = `${process.env.NEXT_PUBLIC_PHONE}`;
  return (
    <div className="prose balance-text mx-auto my-12 px-4">
      <h1 className="text-center">Get in Touch with Gosia</h1>
      <hr />
      <p>
        Ready to experience a personalised massage in the comfort of your home?
        I, Gosia, your dedicated mobile massage therapist, am here to answer
        your questions and arrange your session.
      </p>

      <h2>Service Hours</h2>
      <p>
        I&apos;m available to provide my services during the following hours:
      </p>
      <ul>
        <li>Monday: 5pm to 8pm</li>
        <li>Tuesday: 5pm to 8pm</li>
        <li>Wednesday: 5pm to 8pm</li>
        <li>Thursday: 5pm to 8pm</li>
        <li>Friday: 5pm to 8pm</li>
        <li>Saturday: 8am to 8pm</li>
        <li>Sunday: 8am to 8pm</li>
      </ul>

      <h2>How to Contact Me</h2>
      <p>
        SMS:{' '}
        <a
          title="Book a Massage with Gosia via SMS"
          rel="noopener noreferrer"
          target="_blank"
          href={`sms:+44${phone}`}
        >
          {`+44 ${phone}`}
        </a>{' '}
        <br />
        WhatsApp: <a href={`https://wa.me/44${phone}`}>{`+44 ${phone}`}</a>
      </p>

      <h2>Areas I Serve</h2>
      <p>
        I offer services within a 20-mile radius of Wigan, including but not
        limited to the following locations:
      </p>

      <ul>
        {LOCATIONS.map((location) => (
          <li key={location.name}>
            {locations.some((loc) => loc.name === location.name) ? (
              <Link
                title={`Mobile Massage Therapy in ${location.name}`}
                href={location.slug}
              >
                {location.name}
              </Link>
            ) : (
              location.name
            )}
          </li>
        ))}
      </ul>

      <h2>Scheduling an Appointment</h2>
      <p>
        To discuss your specific needs and set up a massage session, please
        reach out via SMS or WhatsApp. I&apos;m available for home visits
        throughout the week.
      </p>

      <h2>Questions and Feedback</h2>
      <p>
        I value your feedback and am available to clarify any queries you might
        have regarding my mobile massage services. Please don&apos;t hesitate to
        contact me. Your wellness journey begins here.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
