import { ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { formatDistance } from 'date-fns';

import { REVIEWS } from '@app/app/data/Reviews';
import { rgbDataURL } from '@app/app/utils/DataURL';
import _60 from '@app/public/images/60_minutes_massage_60_pounds.webp';
import _90 from '@app/public/images/90_minutes_massage_80_pounds.webp';
import _120 from '@app/public/images/120_minutes_massage_100_pounds.webp';
import cards from '@app/public/images/accepted_payment_cards.svg';
import gosiaImage from '@app/public/images/gosia_mobile_massage_therapist.webp';

export const metadata = {
  title: "Wigan's Mobile Massage Expert | Gosia Massage",
  description:
    "Invigorate your senses with Gosia's mobile massage services within Wigan. Experience my house-visit massages tailored to your needs.",
  keywords:
    'Wigan Mobile Massage, Gosia Massage, home massage, relaxation, pregnancy massage, post-injury massage, professional massage therapist, Wigan massage services, physical rejuvenation, emotional wellness, home spa, massage booking',
};

interface IService {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

interface IPrice {
  title: string;
  price: string;
  image: StaticImageData;
  alt: string;
}

const services: IService[] = [
  {
    title: 'Relaxing Massage',
    description:
      'Embark on a serene journey with my tailored massage therapy. Experience a revitalizing blend of deep tissue techniques, gentle stretching, and acupressure stimulation, all designed to refresh and renew.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 945.405 945.405"
        fill="currentColor"
      >
        <path d="M615.6 894.153H0v-57.4c11.2 8.9 25.5 14.301 40.9 14.301h532.2l42.5 43.099zM266.4 51.252c-33 0-59.8 26.8-59.8 59.8 0 20.5 10.3 38.6 26.1 49.4 6.8-18.8 17.8-36.1 32.4-50.7s31.9-25.6 50.7-32.4c-10.8-15.799-28.9-26.1-49.4-26.1zm-17.1 156.701c0 63 51.101 114 114 114 62.9 0 114-51.1 114-114 0-63-51.1-114-114-114-13.399 0-26.2 2.3-38.1 6.5-32.3 11.5-58 37.1-69.4 69.4-4.2 12-6.5 24.799-6.5 38.1zm-61.9 157.299c-26.7 59.2-84.9 210.5-100.9 248.6h198.6c4.4-10.799 9.301-21.299 14.7-31.199 18.7-34.9 77.101-52.201 63.2-100.9-.1-.4-.3-.801-.4-1.301l52.301 49.602c3.899 3.699 8.6 6.699 13.6 8.6l143 54.6c4.8 1.801 9.8 2.699 14.7 2.699 16.6 0 32.2-10.1 38.399-26.5 8.101-21.199-2.5-45-23.8-53.1l-126.4-48.3c-5.9-2.3-11.301-5.7-15.9-10 0 0-111.3-105.6-111.4-105.7-4.699-4.5-10.8-7.4-17.199-9.5-1.5-.5-3.101-1-4.7-1.4-1.7-.5-3.5-1-5.3-1.4-27.801-7.4-58.7-13.7-87.3-11.2-9.4.8-19.7 3.2-27.7 8.7-9.201 6.599-13.001 17.8-17.501 27.699zM40.9 826.053h542.6l52 52.699c4.9 5 10.8 8.9 17.1 11.5 6.2 2.5 12.801 3.9 19.601 3.9h221.6c28.8 0 52-23.6 51.601-52.4-.5-28.301-24.101-50.699-52.4-50.699H693.8l-135.4-137.4c-10.5-10.701-16.7-15.1-35.5-15.1-32.4 0-482 .299-482 .299-22.6 0-40.9 18.301-40.9 40.9v105.401c0 22.599 18.3 40.9 40.9 40.9zM871 637.452c0-65.299-53-118.299-118.3-118.299s-118.3 53-118.3 118.299c0 65.301 53 118.301 118.3 118.301S871 702.852 871 637.452z" />
      </svg>
    ),
    link: '/blog/the-power-of-personalized-massage-therapy',
  },
  {
    title: 'Pregnancy Massage',
    description:
      'As your dedicated therapist, I offer specialized pregnancy massage therapy. Trust in my nurturing touch to address the unique needs of expectant mothers, promoting a sense of security and well-being.',
    icon: (
      <svg
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 205.25 205.25"
        fill="currentColor"
      >
        <path d="M140.841 200.131c.26.893.21 1.866-.183 2.749a4.001 4.001 0 0 1-3.653 2.37H50.912a4 4 0 0 1-3.048-1.41c-.34-.4-8.32-10.042-8.32-31.65 0-8.972 6.328-19.153 12.447-28.999 4.757-7.654 9.676-15.568 9.817-20.519.136-4.751-3.612-11.48-7.952-19.273-5.414-9.721-12.151-21.818-13.816-35.339-2.972-24.15 8.364-63.513 8.848-65.176A4 4 0 0 1 52.729 0h37.416a4 4 0 0 1 3.745 2.595c.075.199 7.532 19.973 14.403 29.593 3.211 4.496 12.474 9.417 25.414 13.5 5.752 1.814 9.021 7.809 7.443 13.646a49.431 49.431 0 0 1-2.285 6.543c-1.888 4.404-5.275 8.499-8.146 11.457 3.875 1.686 9.032 4.381 14.2 8.428 9.482 7.425 20.786 20.947 20.786 43.199 0 27.873-16.767 45.585-28.513 54.578-5.285-5.874-11.615-12.391-17.541-17.157-13.153-10.577-16.98-13.432-17.137-13.548a4 4 0 0 0-4.776 6.419c.038.028 3.925 2.932 16.898 13.364 9.919 7.974 21.503 21.735 26.205 27.514z" />
      </svg>
    ),
    link: '/blog/benefits-of-pregnancy-massage',
  },
  {
    title: 'Post-Injury Massage',
    description:
      'Find relief and recovery with my professional post-injury massage therapy. My techniques aim to alleviate muscle discomfort, enhance mobility, and boost overall rejuvenation, helping you feel your absolute best.',
    icon: (
      <svg
        height="1.5rem"
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 99.35"
        fill="currentColor"
      >
        <path d="M87.81 26.77c-1.9-.94-4.18-1.61-6.9-1.95L68.7 23.01l-5.13-3.03-10.14-9.56c-3.64-2.21-8.31 1.77-6.29 5.95l7.02 8.89c3.73 4.73 3.07 4.79 8.78 6.89 3.27 1.2 7.16 2.44 10.84 3.41l-10.1 15.23-19.75-10.77c-2.46-1.15-4.16-.68-6.82.36L18.16 49.4c-3.17 2.85-.44 10.85 4.83 9.37l17-5.1 18.49 14.54c7.96 4.63 14.79 4.69 19.57-3.59l10.53-16.77c1.37.69 2.39 1.11 2.76 2.4l-8.26 18.32c-2.2 5.13 5.19 9.73 7.36 4.67l11.85-18.85c1.9-2.25 1.66-4.91-.36-7.9l-9.36-14.47c-1.66-2.56-1.97-3.86-4.76-5.25zm-8.67 72.58c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82h41.92c1 0 1.82.82 1.82 1.82 0 1.01-.82 1.82-1.82 1.82H79.14zm-31.2-12.26c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82h65.47c1 0 1.82.82 1.82 1.82s-.82 1.82-1.82 1.82H47.94zM11.72 53.64c.71.04 1.26.65 1.23 1.36-.04.71-.65 1.27-1.36 1.23l-10.36-.56c-.71-.03-1.26-.65-1.23-1.36.04-.71.65-1.27 1.36-1.23l10.36.56zm1.21 4.57c.6-.4 1.4-.23 1.8.37.4.6.23 1.4-.36 1.8L8 64.58c-.6.4-1.4.23-1.8-.37-.4-.6-.23-1.4.36-1.8l6.37-4.2zm.13-10.28a1.295 1.295 0 1 1-1.09 2.35l-6.2-2.9a1.295 1.295 0 1 1 1.09-2.35l6.2 2.9zM87.3 0c6.43 0 11.64 5.21 11.64 11.64 0 6.43-5.21 11.64-11.64 11.64-6.43 0-11.64-5.21-11.64-11.64C75.66 5.21 80.87 0 87.3 0zM26.52 80.32l14.34-19.94 10.73 8.36-16.81 18.32c-5.11 4.92-11.03-2.58-8.26-6.74z" />
      </svg>
    ),
    link: '/blog/rediscovering-wellness-with-post-injury-massage',
  },
];

const prices: IPrice[] = [
  {
    title: '60 minutes',
    price: '£60',
    image: _60,
    alt: 'Image representing a 60-minute massage service for £60',
  },
  {
    title: '90 minutes',
    price: '£80',
    image: _90,
    alt: 'Image representing a 90-minute massage service for £80',
  },
  {
    title: '120 minutes',
    price: '£100',
    image: _120,
    alt: 'Image representing a 120-minute massage service for £100',
  },
];

export default function Home() {
  return (
    <>
      <div className="container balance-text flex flex-col text-center">
        {/* Header */}
        <h1 className="mt-16 text-5xl font-medium">Gosia Massage</h1>
        <p className="mx-auto my-8 max-w-screen-sm text-lg">
          Welcome to Gosia Massage! I&apos;m Gosia, your mobile massage
          therapist in Wigan. Specializing in personalized massages designed for
          relaxation and rejuvenation, I bring wellness right to your doorstep.
          Experience the transformative power of tailored mobile massage therapy
          today - book your appointment now!
        </p>

        {/* Image */}
        <div className="my-8 flex w-full justify-center overflow-hidden lg:mb-16">
          <Image
            src={gosiaImage}
            width={744}
            height={418}
            alt="Portrait of Gosia, professional mobile massage therapist"
            sizes="(min-width: 768px) 744px, 100vw"
            className="rounded-lg"
            placeholder={'blur'}
            blurDataURL={rgbDataURL(229, 229, 229)}
          />
        </div>
      </div>

      {/* Services */}
      <div className="balance-text bg-neutral-100">
        <div className="container py-8 md:py-12 lg:py-20">
          <h2 className="mb-8 text-3xl font-medium">Services</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service) => {
              return (
                <div key={service.title} className="flex flex-col gap-2">
                  <div className="flex aspect-square w-12 items-center justify-center rounded-lg bg-neutral-400 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium lg:mt-4">
                    {service.title}
                  </h3>
                  <p className="grow">{service.description}</p>
                  <Link
                    title={`Read more about ${service.title}`}
                    href={service.link}
                    className="w-fit text-yellow-900 underline underline-offset-4 lg:mt-4"
                  >
                    Read more {'->'}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Prices */}
      <div className="bg-white">
        <div className="container py-8 md:py-12 lg:py-20">
          <h2 className="mb-8 text-3xl font-medium">Prices</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {prices.map((price) => {
              return (
                <div
                  key={price.title}
                  className="relative flex flex-col overflow-hidden rounded-2xl bg-yellow-700 px-10 py-16 text-white xl:py-20"
                >
                  <Image
                    alt={price.alt}
                    src={price.image}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(229, 229, 229)}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    className="z-0"
                  />
                  <p className="z-10 font-bold xl:text-xl">{price.title}</p>
                  <p className="z-10 text-4xl xl:text-6xl">{price.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="bg-neutral-100">
        <div className="container py-8 md:py-12 lg:py-20">
          <Image
            alt="Accepted payment cards for Gosia Massage services"
            src={cards}
            placeholder="blur"
            blurDataURL={rgbDataURL(229, 229, 229)}
            sizes="100vw"
            className={'mx-auto'}
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="balance-text bg-white">
        <div className="container py-8 md:py-12 lg:py-20">
          <h2 className="mb-8 text-3xl font-medium">What my customers say</h2>
          {REVIEWS.map((review) => {
            return (
              <div
                key={review.name}
                className="flex max-w-md flex-col gap-2 rounded-lg bg-neutral-100 p-8"
              >
                <div className="grid grid-cols-[3rem_1fr] gap-4">
                  <div
                    className="flex aspect-square w-12 items-center justify-center rounded-full text-xl"
                    style={{
                      color: review.avatar.textColor,
                      backgroundColor: review.avatar.bgColor,
                    }}
                  >
                    {review.avatar.initials}
                  </div>
                  <div>
                    <p className="text-xl font-medium">{review.name}</p>
                    <small className="text-neutral-500">
                      {formatDistance(new Date(review.date), new Date(), {
                        addSuffix: true,
                      })}
                    </small>
                  </div>
                </div>
                <div className="my-2 flex gap-1 text-yellow-400">
                  {Array.from({ length: review.rating }, (_, i) => {
                    return (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    );
                  })}
                </div>
                <p>{review.content}</p>
                <div className="mt-4 flex items-center gap-4">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 21V30.8878H39.0152C38.3998 34.0676 36.5529 36.7602 33.7831 38.5706L42.2348 45C47.1591 40.5437 50 33.9982 50 26.2227C50 24.4123 49.8343 22.6713 49.5265 21.0003L25 21Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M11.3366 30L9.50025 31.4533L3 36.6877C7.12815 45.1524 15.5891 51 25.3963 51C32.1699 51 37.8489 48.6893 42 44.7281L33.8578 38.1967C31.6226 39.7529 28.7716 40.6962 25.3963 40.6962C18.8734 40.6962 13.3313 36.1455 11.3469 30.015L11.3366 30Z"
                      fill="#34A853"
                    />
                    <path
                      d="M2.68164 14C0.977175 17.4522 0 21.3479 0 25.5C0 29.6521 0.977175 33.5477 2.68164 36.9999C2.68164 37.0231 11 30.3751 11 30.3751C10.5 28.8356 10.2045 27.2028 10.2045 25.4997C10.2045 23.7966 10.5 22.1638 11 20.6243L2.68164 14Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M25.2922 10.3232C28.9698 10.3232 32.2387 11.643 34.8493 14.1885L42 6.76439C37.6641 2.56918 32.0344 0 25.2922 0C15.5308 0 7.10887 5.82153 3 14.3064L11.3084 21C13.2833 14.872 18.7997 10.3232 25.2922 10.3232Z"
                      fill="#EA4335"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <small className="text-neutral-500">Posted on</small>
                    <a
                      href="https://g.co/kgs/P47D9E"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Google review link"
                      className="tracking-tight text-[#4285F4]"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-8 flex justify-center">
            <a
              href="https://g.page/r/CZVIv-pxxshVEBI/review"
              className="btn bg-black text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a review
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
