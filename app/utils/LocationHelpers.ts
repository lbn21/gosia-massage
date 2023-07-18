import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import { ILocation } from '@app/app/components/ILocation';
import { IPost } from '@app/app/components/IPost';

const locationsDirectory = path.join(process.cwd(), 'app/[location]/locations');

export const getLocationsSlugs = (): string[] => {
  const posts = fs.readdirSync(locationsDirectory);
  return posts.map((filename) => {
    return filename.replace('.md', '');
  });
};

export const readLocation = (slug: string): ILocation => {
  const fileContent = fs.readFileSync(
    path.join(locationsDirectory, `${slug}.md`),
    'utf8'
  );
  const { data, content } = matter(fileContent);
  const htmlContent = remark().use(html).processSync(content).toString();
  return {
    slug,
    name: data.name,
    borough: data.borough,
    image: data.image,
    content: htmlContent,
  };
};

export const getLocations = (): ILocation[] => {
  const slugs = getLocationsSlugs();
  return slugs
    .map((slug) => {
      return readLocation(slug);
    })
    .sort((a, b) => {
      if (a.slug > b.slug) {
        return 1;
      } else {
        return -1;
      }
    });
};
