import { MetadataRoute } from 'next';

import { getLocationsSlugs } from '@app/app/utils/LocationHelpers';
import { getPostsSlugs } from '@app/app/utils/PostHelpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPostsSlugs();
  const locations = getLocationsSlugs();
  const modified = new Date();

  const postsUrls = posts.map((slug) => {
    return {
      url: `https://www.gosiamassage.com/blog/${slug}`,
      lastModified: modified,
    };
  });

  const locationsUrls = locations.map((slug) => {
    return {
      url: `https://www.gosiamassage.com/${slug}`,
      lastModified: modified,
    };
  });

  return [
    {
      url: 'https://www.gosiamassage.com',
      lastModified: modified,
    },
    {
      url: 'https://www.gosiamassage.com/about-me',
      lastModified: modified,
    },
    {
      url: 'https://www.gosiamassage.com/blog',
      lastModified: modified,
    },
    ...postsUrls,
    {
      url: 'https://www.gosiamassage.com/contact',
      lastModified: modified,
    },
    ...locationsUrls,
  ];
}
