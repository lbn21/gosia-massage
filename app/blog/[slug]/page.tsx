import { IPost } from '@/components/IPost';
import { format } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  return [
    {
      slug: 'first-post',
    },
    {
      slug: 'second-post',
    },
  ];
}
const readPost = (slug: string): IPost => {
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), 'posts', `${slug}.md`),
    'utf8'
  );
  const { data, content } = matter(fileContent);
  const htmlContent = remark().use(html).processSync(content).toString();
  return {
    title: data.title,
    subtitle: data.subtitle,
    date: data.date,
    content: htmlContent,
  };
};
export default function Post({ params }: { params: { slug: string } }) {
  const postContent = readPost(params.slug);
  return (
    <div>
      <h1>{postContent.title}</h1>
      <p>{postContent.subtitle}</p>
      <p>{format(postContent.date, 'PPP')}</p>
      <div dangerouslySetInnerHTML={{ __html: postContent.content }} />
    </div>
  );
}
