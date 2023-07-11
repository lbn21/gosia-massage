import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';

import { rgbDataURL } from '@app/utils/DataURL';
import { getPostsSlugs, readPost } from '@app/utils/PostHelpers';

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
  return (
    <div className="prose balance-text mx-auto my-8 flex flex-col px-4">
      <h1 className="mb-0">{postContent.title}</h1>
      <p className="mt-0 text-gray-500">
        {format(new Date(postContent.date), 'MMMM d, yyyy')}
      </p>

      <div className="relative h-96 overflow-hidden rounded-lg">
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
    </div>
  );
}
