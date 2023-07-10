import { Metadata } from 'next';
import Link from 'next/link';

import { format } from 'date-fns';

import { getPosts, getPostsSlugs } from '@app/utils/PostHelpers';

export const metadata: Metadata = {
  title:
    'Gosia Massage Blog - Insights and Tips on Personalized Massage Therapy',
  description:
    'Explore the Gosia Massage Blog for valuable insights, tips, and information on personalized massage therapy. Learn about the benefits of different types of massages and how they can enhance your well-being.',
  keywords:
    'Gosia Massage Blog, Personalized Massage Therapy, Massage Benefits, Relaxation, Rejuvenation, Stress Relief, Muscle Tension, Pregnancy Massage, Post-Injury Massage, Massage Tips',
};

export default function Blog() {
  const posts = getPosts();
  return (
    <div className="container balance-text flex flex-col py-8 md:pb-12 lg:pb-20">
      <h1 className="mb-6 text-4xl font-medium">
        Latest From The Massage Table
      </h1>
      <p className="mb-8 text-neutral-800">
        Delve into my latest posts where I share insights, tips, and benefits of
        various massage therapies. Discover how these therapies can enhance your
        wellness journey, provide relief, and promote overall rejuvenation.
      </p>

      <div className="flex flex-col gap-8">
        {posts.map((post) => {
          return (
            <div key={post.title} className="grid lg:grid-cols-[150px_1fr]">
              <hr className="mb-8 lg:col-span-2" />
              <p className="mb-1 text-sm text-neutral-500 lg:col-start-1 lg:text-black">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </p>
              <h2 className="mb-4 text-lg font-bold text-black lg:col-start-2">
                {post.title}
              </h2>
              <p className="mb-4 lg:col-start-2">{post.description}</p>
              <Link
                title={`Read more about ${post.title}`}
                className="w-fit text-sm text-yellow-600 underline underline-offset-4 lg:col-start-2"
                href={`/blog/${post.slug}`}
              >
                Read more {'->'}
              </Link>
            </div>
          );
        })}
      </div>

      {/*<ul>*/}
      {/*  {posts.map((post) => {*/}
      {/*    return (*/}
      {/*      <li key={post}>*/}
      {/*        <Link href={`/blog/${post}`}>{post}</Link>*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ul>*/}
    </div>
  );
}
