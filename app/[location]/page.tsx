import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';

import { rgbDataURL } from '@app/app/utils/DataURL';
import {
  getLocationsSlugs,
  readLocation,
} from '@app/app/utils/LocationHelpers';

type Props = {
  params: { location: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const locationContent = readLocation(params.location);

  return {
    title: `Mobile Massage Therapy in ${locationContent.name}`,
    description: `Experience the benefits of mobile massage therapy in ${locationContent.name} with Gosia Massage. Tailored sessions designed by Gosia to promote relaxation and well-being. Book your appointment now!`,
    keywords: `mobile massage, ${locationContent.name}, relaxation, well-being, appointment, therapy, Gosia Massage`,
  };
}

export async function generateStaticParams() {
  const slugs = getLocationsSlugs();
  return slugs.map((slug) => {
    return {
      slug,
    };
  });
}

export default function Location({ params }: Props) {
  const locationContent = readLocation(params.location);

  return (
    <div className="prose balance-text mx-auto my-8 flex flex-col px-4">
      <h1 className="mb-0">{`Mobile Massage Therapy in ${locationContent.name}`}</h1>
      <p className="mt-0 text-gray-500">{locationContent.borough}</p>
      <div className="relative h-96 overflow-hidden rounded-lg">
        <Image
          alt={`Image of ${locationContent.name}`}
          src={locationContent.image}
          placeholder="blur"
          blurDataURL={rgbDataURL(229, 229, 229)}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          className="m-0"
          loading="eager"
        />
      </div>

      <article dangerouslySetInnerHTML={{ __html: locationContent.content }} />
      <Link
        title="Book Now"
        className="my-4 w-fit text-sm text-yellow-900 underline underline-offset-4"
        href={`/contact`}
      >
        {'Book Now'}
      </Link>
    </div>
  );
}
