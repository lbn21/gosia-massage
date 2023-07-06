import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gosiamassage.com',
      lastModified: new Date(),
    },
  ];
}
