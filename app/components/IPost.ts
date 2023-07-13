export interface IPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  altText: string;
  pageTitle: string;
  pageMetaDescription: string;
  pageMetaKeywords: string[];
  content: string;
}
