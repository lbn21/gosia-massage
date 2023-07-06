import { ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import _60 from '@app/public/images/60_minutes_massage_60_pounds.webp';
import _90 from '@app/public/images/90_minutes_massage_80_pounds.webp';
import _120 from '@app/public/images/120_minutes_massage_100_pounds.webp';
import cards from '@app/public/images/accepted_payment_cards.svg';
import gosiaImage from '@app/public/images/gosia_mobile_massage_therapist.webp';

export const metadata = {
  keywords: [
    'Gosia Massage',
    'mobile massage',
    'home visit massage',
    'relaxing massage',
    'pregnancy massage',
    'post-injury massage',
    'professional mobile therapist',
    'tailored massage services',
    'deep tissue techniques',
    'gentle stretching',
    'acupressure stimulation',
    'physical rejuvenation',
    'emotional well-being',
    'home massage booking',
  ],
  description:
    'Discover the transformative power of personalized massage therapy with Gosia Massage. Offering a range of services from relaxing massages to specialized pregnancy and post-injury treatments. Book now for a journey towards relaxation and rejuvenation.',
};

interface IService {
  title: string;
  description: string;
  icon: ReactNode;
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
        fill="currentColor"
        viewBox="0 0 576 512"
      >
        <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z"></path>
      </svg>
    ),
  },
  {
    title: 'Pregnancy Massage',
    description:
      'As your dedicated therapist, I offer specialized pregnancy massage therapy. Trust in my nurturing touch to address the unique needs of expectant mothers, promoting a sense of security and well-being.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M112 48C112 21.49 133.5 0 160 0C186.5 0 208 21.49 208 48C208 74.51 186.5 96 160 96C133.5 96 112 74.51 112 48zM88 382.1C74.2 379.4 64 366.9 64 352V296.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C77.84 149.6 103.2 133 131.5 128.1C135.6 128.3 139.8 128 144 128H160C161.4 128 162.8 128.1 164.1 128.3C199.8 131.2 229.5 157.6 236.2 193.3L242.3 225.7C286.6 234.3 320 273.2 320 320V352C320 369.7 305.7 384 288 384H232V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V384H152V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480L88 382.1z"></path>
      </svg>
    ),
  },
  {
    title: 'Post-Injury Massage',
    description:
      'Find relief and recovery with my professional post-injury massage therapy. My techniques aim to alleviate muscle discomfort, enhance mobility, and boost overall rejuvenation, helping you feel your absolute best.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path d="M502.6 168.1l-159.6-159.5c-12.54-12.54-32.85-12.6-45.46-.1256c-12.68 12.54-12.73 33.1-.1256 45.71l159.6 159.5c12.6 12.59 33.03 12.57 45.59-.0628C515.1 201.9 515.1 181.5 502.6 168.1zM334.4 245.4l-67.88-67.87l55.13-55.12l-45.25-45.25L166.7 186.8C154.1 199.6 145.2 215.6 141.1 233.2L113.3 353.4l-108.6 108.6c-6.25 6.25-6.25 16.37 0 22.62l22.63 22.62c6.25 6.25 16.38 6.25 22.63 0l108.6-108.6l120.3-27.75c17.5-4.125 33.63-13 46.38-25.62l109.6-109.7l-45.25-45.25L334.4 245.4zM279.9 300.1C275.7 304.2 270.3 307.2 264.4 308.6l-79.25 18.25l18.25-79.25c1.375-5.875 4.375-11.25 8.5-15.5l9.375-9.25l67.88 67.87L279.9 300.1z"></path>
      </svg>
    ),
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

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE;

  return (
    <>
      <div className="container flex flex-col text-center">
        {/* Header */}
        <h1 className="mt-16 text-5xl font-medium">Gosia Massage</h1>
        <p className="mx-auto my-8 max-w-screen-sm text-lg">
          Welcome to Gosia Massage! I&apos;m Gosia, your dedicated massage
          therapist. I specialize in delivering personalized massages designed
          to induce relaxation and rejuvenation. Experience the transformative
          power of tailored massage therapy today - book your appointment now!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href={`https://wa.me/44${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Book a Massage with Gosia via WhatsApp"
            className="btn btn-whatsapp"
          >
            <svg
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1485.66 345.24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M172.51,0C78.22,0,1.47,76.74,1.43,171.06c-.01,30.15,7.87,59.58,22.84,85.52L0,345.24l90.69-23.79c24.99,13.63,53.12,20.81,81.75,20.82h.07c94.28,0,171.03-76.75,171.07-171.07,.02-45.71-17.76-88.69-50.06-121.02C261.22,17.84,218.27,.02,172.51,0Zm0,313.38h-.06c-25.51,0-50.54-6.87-72.37-19.82l-5.19-3.08-53.81,14.12,14.36-52.47-3.38-5.38c-14.23-22.64-21.75-48.81-21.74-75.67,.03-78.4,63.82-142.18,142.25-142.18,37.98,.01,73.68,14.82,100.52,41.7,26.85,26.87,41.62,62.6,41.61,100.59-.03,78.4-63.82,142.19-142.19,142.19Zm77.99-106.49c-4.27-2.14-25.29-12.48-29.21-13.91-3.92-1.43-6.77-2.14-9.62,2.14-2.85,4.28-11.04,13.91-13.53,16.76-2.49,2.86-4.99,3.21-9.26,1.07-4.27-2.14-18.05-6.66-34.37-21.22-12.71-11.33-21.29-25.33-23.78-29.61-2.49-4.28-.27-6.59,1.88-8.72,1.92-1.91,4.27-4.99,6.41-7.49,2.14-2.5,2.85-4.28,4.27-7.14,1.42-2.85,.71-5.35-.36-7.49-1.07-2.14-9.62-23.18-13.18-31.74-3.47-8.33-6.99-7.21-9.62-7.34-2.49-.13-5.34-.15-8.19-.15s-7.48,1.07-11.4,5.35c-3.92,4.28-14.96,14.62-14.96,35.66s15.32,41.37,17.45,44.22c2.14,2.85,30.14,46.03,73.02,64.54,10.2,4.4,18.16,7.03,24.37,9,10.24,3.25,19.56,2.79,26.92,1.69,8.21-1.23,25.29-10.34,28.85-20.33,3.56-9.98,3.56-18.54,2.49-20.33-1.07-1.78-3.92-2.85-8.19-4.99Zm302.64-2.61h-.46l-28.36-114.42h-34.18l-28.83,113.02h-.46l-26.27-113.02h-36.5l43.94,166.05h36.97l27.66-113.03h.47l28.13,113.03h36.27l44.64-166.05h-35.8l-27.21,114.42Zm174.37-58.26c-3.25-4.26-7.71-7.59-13.36-10-5.66-2.39-12.91-3.59-21.74-3.59-6.2,0-12.55,1.58-19.07,4.77-6.51,3.17-11.85,8.25-16.04,15.23h-.7v-62.57h-33.01V255.9h33.01v-63.02c0-12.25,2.01-21.04,6.05-26.4,4.03-5.34,10.54-8.02,19.53-8.02,7.9,0,13.4,2.44,16.51,7.33,3.1,4.88,4.65,12.28,4.65,22.2v67.91h33.02v-73.95c0-7.44-.67-14.22-1.98-20.35-1.32-6.11-3.6-11.31-6.86-15.58Zm136.01,83.14v-62.55c0-7.3-1.62-13.15-4.89-17.56-3.25-4.42-7.43-7.87-12.54-10.35-5.12-2.48-10.78-4.15-16.98-5-6.2-.85-12.32-1.28-18.36-1.28-6.66,0-13.29,.65-19.87,1.98-6.6,1.32-12.52,3.53-17.79,6.63-5.27,3.1-9.62,7.21-13.01,12.32-3.42,5.12-5.36,11.55-5.82,19.31h33.01c.62-6.51,2.8-11.17,6.52-13.96,3.72-2.79,8.83-4.18,15.34-4.18,2.94,0,5.69,.19,8.25,.58,2.55,.39,4.8,1.15,6.74,2.32,1.94,1.16,3.49,2.79,4.65,4.89,1.16,2.09,1.74,4.93,1.74,8.48,.15,3.42-.86,6-3.02,7.79-2.18,1.79-5.12,3.15-8.84,4.07-3.72,.94-7.98,1.64-12.79,2.09-4.81,.48-9.69,1.11-14.64,1.87-4.97,.78-9.89,1.82-14.76,3.14-4.88,1.31-9.24,3.3-13.03,5.92-3.8,2.65-6.9,6.17-9.31,10.59-2.4,4.42-3.6,10.05-3.6,16.86,0,6.2,1.05,11.55,3.14,16.04,2.09,4.51,5,8.22,8.72,11.17,3.72,2.95,8.06,5.12,13.02,6.52,4.95,1.39,10.31,2.09,16.04,2.09,7.44,0,14.73-1.09,21.85-3.25,7.13-2.19,13.34-5.97,18.61-11.41,.15,2.02,.42,4,.81,5.93,.39,1.93,.89,3.84,1.51,5.69h33.48c-1.55-2.47-2.64-6.19-3.26-11.16-.63-4.96-.94-10.14-.94-15.58Zm-33.01-19.77c0,1.88-.19,4.36-.58,7.45-.38,3.11-1.43,6.16-3.14,9.19-1.71,3.02-4.35,5.63-7.91,7.79-3.56,2.18-8.6,3.26-15.12,3.26-2.63,0-5.19-.23-7.67-.71-2.48-.46-4.65-1.28-6.51-2.44-1.86-1.16-3.33-2.75-4.42-4.77-1.08-2.02-1.63-4.49-1.63-7.43,0-3.1,.55-5.67,1.63-7.68,1.09-2.01,2.52-3.68,4.31-5,1.77-1.32,3.87-2.36,6.27-3.14,2.4-.77,4.84-1.39,7.33-1.86,2.63-.46,5.27-.86,7.9-1.16,2.65-.3,5.16-.7,7.56-1.16,2.41-.47,4.65-1.05,6.75-1.75,2.09-.7,3.83-1.65,5.23-2.9v12.32Zm94.63-109.76h-33.02v36.04h-19.99v22.09h19.99v70.94c0,6.05,1.02,10.93,3.03,14.65,2.02,3.72,4.77,6.6,8.25,8.61,3.49,2.02,7.52,3.37,12.1,4.06,4.56,.69,9.42,1.05,14.53,1.05,3.27,0,6.59-.08,10.01-.22,3.4-.16,6.5-.46,9.3-.94v-25.58c-1.56,.31-3.18,.56-4.89,.7-1.7,.16-3.48,.24-5.34,.24-5.57,0-9.3-.94-11.16-2.8-1.85-1.86-2.78-5.58-2.78-11.17v-59.54h24.18v-22.09h-24.18v-36.04Zm136.46,103.61c-2.17-3.8-5.04-6.98-8.6-9.54-3.56-2.55-7.64-4.61-12.2-6.17-4.58-1.54-9.27-2.85-14.07-3.94-4.65-1.09-9.21-2.1-13.71-3.03-4.5-.93-8.49-1.98-11.98-3.13-3.48-1.17-6.3-2.67-8.47-4.54-2.18-1.86-3.25-4.25-3.25-7.21,0-2.48,.6-4.46,1.85-5.93,1.24-1.47,2.76-2.59,4.54-3.38,1.79-.77,3.75-1.27,5.92-1.51,2.17-.23,4.19-.34,6.04-.34,5.89,0,11.01,1.12,15.36,3.37,4.33,2.25,6.74,6.55,7.19,12.9h31.39c-.62-7.44-2.52-13.6-5.7-18.49-3.17-4.88-7.17-8.79-11.97-11.74-4.8-2.95-10.26-5.04-16.4-6.28-6.12-1.24-12.43-1.86-18.93-1.86s-12.88,.58-19.06,1.73c-6.21,1.17-11.79,3.19-16.74,6.06-4.97,2.87-8.95,6.78-11.98,11.74-3.03,4.96-4.54,11.32-4.54,19.07,0,5.27,1.09,9.74,3.27,13.38,2.15,3.65,5.03,6.66,8.58,9.07,3.58,2.4,7.65,4.35,12.22,5.81,4.57,1.49,9.26,2.76,14.06,3.85,11.79,2.48,20.98,4.96,27.56,7.45,6.59,2.48,9.88,6.2,9.88,11.16,0,2.95-.69,5.37-2.09,7.31-1.4,1.95-3.14,3.49-5.23,4.65-2.1,1.17-4.43,2.03-6.98,2.56-2.56,.55-5.01,.82-7.33,.82-3.26,0-6.39-.39-9.41-1.16-3.03-.78-5.7-1.98-8.03-3.61-2.32-1.63-4.23-3.72-5.7-6.28-1.46-2.56-2.21-5.61-2.21-9.19h-31.38c.32,8.06,2.13,14.77,5.47,20.12,3.32,5.35,7.58,9.65,12.78,12.91,5.19,3.25,11.13,5.58,17.8,6.98,6.65,1.39,13.47,2.09,20.44,2.09s13.53-.66,20.12-1.97c6.59-1.32,12.44-3.61,17.55-6.87,5.13-3.25,9.25-7.55,12.44-12.9,3.17-5.36,4.76-11.98,4.76-19.89,0-5.59-1.08-10.27-3.25-14.06Zm65.56-113.38l-62.77,166.05h36.73l13.01-36.98h62.08l12.54,36.98h37.91l-62.07-166.05h-37.44Zm-3.48,101.87l21.62-60.93h.46l20.93,60.93h-43.01Zm217.14-39.77c-4.49-5.89-10.15-10.62-16.97-14.18-6.82-3.57-14.95-5.35-24.4-5.35-7.45,0-14.26,1.47-20.46,4.41-6.22,2.95-11.32,7.68-15.34,14.19h-.47v-15.36h-31.4v162.34h33.04v-56.98h.45c4.03,5.9,9.19,10.35,15.48,13.36,6.26,3.02,13.13,4.54,20.57,4.54,8.84,0,16.55-1.72,23.13-5.12,6.59-3.41,12.09-7.99,16.51-13.73,4.42-5.74,7.7-12.32,9.89-19.76,2.15-7.45,3.25-15.2,3.25-23.26,0-8.53-1.1-16.7-3.25-24.54-2.19-7.82-5.51-14.69-10.01-20.58Zm-21.15,58.37c-.94,4.66-2.53,8.72-4.77,12.21-2.25,3.49-5.19,6.33-8.85,8.49-3.63,2.17-8.17,3.27-13.59,3.27s-9.75-1.09-13.47-3.27c-3.72-2.16-6.71-5-8.96-8.49-2.25-3.49-3.87-7.55-4.88-12.21-1.01-4.65-1.5-9.38-1.5-14.17s.45-9.78,1.38-14.42c.94-4.65,2.52-8.76,4.78-12.34,2.23-3.56,5.19-6.46,8.84-8.71,3.64-2.25,8.16-3.39,13.59-3.39s9.74,1.14,13.37,3.39c3.64,2.24,6.63,5.18,8.95,8.83,2.32,3.65,3.98,7.8,5,12.44,1.02,4.65,1.5,9.39,1.5,14.2s-.45,9.53-1.38,14.17Zm162.73-37.79c-2.17-7.82-5.5-14.69-10-20.58-4.5-5.89-10.14-10.62-16.96-14.18-6.83-3.57-14.97-5.35-24.42-5.35-7.43,0-14.26,1.47-20.45,4.41-6.2,2.95-11.32,7.68-15.35,14.19h-.45v-15.36h-31.39v162.34h33.01v-56.98h.47c4.03,5.9,9.19,10.35,15.46,13.36,6.27,3.02,13.14,4.54,20.58,4.54,8.83,0,16.53-1.72,23.13-5.12,6.58-3.41,12.09-7.99,16.5-13.73,4.43-5.74,7.71-12.32,9.88-19.76,2.18-7.45,3.26-15.2,3.26-23.26,0-8.53-1.08-16.7-3.26-24.54Zm-31.16,37.79c-.92,4.66-2.51,8.72-4.76,12.21-2.26,3.49-5.2,6.33-8.84,8.49-3.64,2.17-8.17,3.27-13.6,3.27s-9.77-1.09-13.49-3.27c-3.73-2.16-6.7-5-8.96-8.49-2.24-3.49-3.87-7.55-4.88-12.21-1.01-4.65-1.51-9.38-1.51-14.17s.47-9.78,1.4-14.42c.93-4.65,2.52-8.76,4.77-12.34,2.24-3.56,5.19-6.46,8.84-8.71,3.63-2.25,8.17-3.39,13.6-3.39s9.72,1.14,13.36,3.39c3.65,2.24,6.63,5.18,8.96,8.83,2.33,3.65,4,7.8,5,12.44,1.02,4.65,1.51,9.39,1.51,14.2s-.47,9.53-1.4,14.17Z" />
            </svg>
            <span className="sr-only">
              Book a Massage with Gosia via WhatsApp
            </span>
          </a>
        </div>

        {/* Image */}
        <div className="my-8 flex w-full justify-center overflow-hidden">
          <Image
            src={gosiaImage}
            width={744}
            height={418}
            alt="Portrait of Gosia, professional mobile massage therapist"
            sizes="(min-width: 768px) 744px, 100vw"
            className="rounded-lg"
            loading={'eager'}
            placeholder={'blur'}
            blurDataURL={rgbDataURL(229, 229, 229)}
          />
        </div>
      </div>

      {/* Services */}
      <div className="bg-neutral-200">
        <div className="container py-8 md:py-12 lg:py-20">
          <h2 className="mb-8 text-3xl font-medium">Services</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => {
              return (
                <div key={service.title} className="flex flex-col gap-2">
                  <div className="flex aspect-square w-12 items-center justify-center rounded-lg bg-neutral-500 text-white">
                    {service.icon}
                  </div>
                  <h3 className="mt-2 text-xl font-medium lg:mt-4">
                    {service.title}
                  </h3>
                  <p className="grow">{service.description}</p>
                  {/*p                  <Link*/}
                  {/*                    href="/"*/}
                  {/*                    className="w-fit text-black underline underline-offset-4"*/}
                  {/*                  >*/}
                  {/*                    Read more {'->'}*/}
                  {/*                  </Link>*/}
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
      <div className="bg-neutral-200">
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
    </>
  );
}
