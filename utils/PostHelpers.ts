import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import { IPost } from '@app/components/IPost';

export const getPostsSlugs = (): string[] => {
  const posts = fs.readdirSync(path.join(process.cwd(), 'posts'));
  return posts.map((filename) => {
    return filename.replace('.md', '');
  });
};

export const readPost = (slug: string): IPost => {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'posts', `${slug}.md`),
    'utf8'
  );
  const { data, content } = matter(fileContent);
  const htmlContent = remark().use(html).processSync(content).toString();
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
    altText: data.altText,
    pageTitle: data.pageTitle,
    pageMetaDescription: data.pageMetaDescription,
    pageMetaKeywords: data.pageMetaKeywords,
    content: htmlContent,
  };
};

export const getPosts = (): IPost[] => {
  const slugs = getPostsSlugs();
  return slugs
    .map((slug) => {
      return readPost(slug);
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
};
