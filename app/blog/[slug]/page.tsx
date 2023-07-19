import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';

import { rgbDataURL } from '@app/app/utils/DataURL';
import { getPostsSlugs, readPost } from '@app/app/utils/PostHelpers';

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const postContent = readPost(params.slug);

  return {
    title: postContent.pageTitle,
    description: postContent.pageMetaDescription,
    keywords: postContent.pageMetaKeywords,
  };
}

export async function generateStaticParams() {
  const slugs = getPostsSlugs();
  return slugs.map((slug) => {
    return {
      slug,
    };
  });
}

export default function Post({ params }: Props) {
  const postContent = readPost(params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.gosiamassage.com/blog/${params.slug}`,
    },
    headline: postContent.title,
    image: `https://www.gosiamassage.com${postContent.image}`,
    author: {
      '@type': 'Person',
      name: 'Gosia',
    },
    publisher: {
      '@type': 'Organization',
      name: "Gosia's Mobile Massage Therapy",
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gosiamassage.com/images/gosia-massage-logo.png',
      },
    },
    datePublished: format(new Date(postContent.date), 'yyyy-MM-dd'),
    description: postContent.pageMetaDescription,
  };

  return (
    <div className="prose balance-text mx-auto my-8 flex flex-col px-4">
      <h1 className="mb-0">{postContent.title}</h1>
      <p className="mt-0 text-gray-500">
        {format(new Date(postContent.date), 'MMMM d, yyyy')}
      </p>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          alt={postContent.altText}
          src={postContent.image}
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

      <article dangerouslySetInnerHTML={{ __html: postContent.content }} />
      <Link
        title="Back to Blog Overview"
        className="mx-auto my-4 w-fit text-sm text-yellow-900 underline underline-offset-4 lg:col-start-2"
        href={`/blog`}
      >
        {'<- View all posts'}
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
