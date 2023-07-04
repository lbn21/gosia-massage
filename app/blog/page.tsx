import { Metadata } from 'next';
import Link from 'next/link';

import * as fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Blog',
};

const readPosts = () => {
  const posts = fs.readdirSync(path.join(process.cwd(), 'posts'));
  return posts.map((filename) => {
    return filename.replace('.md', '');
  });
};

export default function Blog() {
  const posts = readPosts();
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post}>
              <Link href={`/blog/${post}`}>{post}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
