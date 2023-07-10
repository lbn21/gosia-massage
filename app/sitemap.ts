import { MetadataRoute } from 'next';

import { getPostsSlugs } from '@app/utils/PostHelpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostsSlugs();
  const modified = new Date();

  const postsUrls = posts.map((slug) => {
    return {
      url: `https://www.gosiamassage.com/blog/${slug}`,
      lastModified: modified,
    };
  });

  return [
    {
      url: 'https://www.gosiamassage.com',
      lastModified: modified,
    },
    {
      url: 'https://www.gosiamassage.com/blog',
      lastModified: modified,
    },
    ...postsUrls,
  ];
}
