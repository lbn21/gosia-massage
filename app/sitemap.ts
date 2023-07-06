import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gosiamassage.com',
      lastModified: new Date(),
    },
  ];
}
