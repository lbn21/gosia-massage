'use client';

import { useState } from 'react';

import { formatDistance } from 'date-fns';

import { Review } from '@app/app/data/Reviews';

const REVIEW_LENGTH = 100;

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = review.content;
  const truncatedText =
    fullText.length > REVIEW_LENGTH
      ? fullText.slice(0, REVIEW_LENGTH) + ' ...'
      : fullText;

  return (
    <div
      key={review.name}
      className="flex flex-col gap-2 rounded-lg bg-neutral-100 p-8"
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
      <p className="grow">
        {isExpanded ? fullText : truncatedText}
        {fullText.length > REVIEW_LENGTH && !isExpanded && (
          <a
            onClick={() => setIsExpanded(true)}
            className="review-more-link ml-2 cursor-pointer text-blue-500"
            aria-expanded="false"
            role="button"
            tabIndex={0}
          >
            More
          </a>
        )}
      </p>
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
            href={review.link}
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
}
