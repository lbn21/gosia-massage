import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import { ILocation, ILocationBasic } from '@app/app/components/ILocation';

const locationsDirectory = path.join(process.cwd(), 'app/[location]/locations');

const LOCATIONS: ILocationBasic[] = [
  { slug: 'altrincham', name: 'Altrincham' },
  { slug: 'atherton', name: 'Atherton' },
  { slug: 'bootle', name: 'Bootle' },
  { slug: 'bolton', name: 'Bolton' },
  { slug: 'bury', name: 'Bury' },
  { slug: 'chorley', name: 'Chorley' },
  { slug: 'crosby', name: 'Crosby' },
  { slug: 'darwen', name: 'Darwen' },
  { slug: 'eccles', name: 'Eccles' },
  { slug: 'farnworth', name: 'Farnworth' },
  { slug: 'golborne', name: 'Golborne' },
  { slug: 'great-sankey', name: 'Great Sankey' },
  { slug: 'hindley', name: 'Hindley' },
  { slug: 'kirkby', name: 'Kirkby' },
  { slug: 'leigh', name: 'Leigh' },
  { slug: 'leyland', name: 'Leyland' },
  { slug: 'litherland', name: 'Litherland' },
  { slug: 'liverpool', name: 'Liverpool' },
  { slug: 'manchester', name: 'Manchester' },
  { slug: 'northwich', name: 'Northwich' },
  { slug: 'ormskirk', name: 'Ormskirk' },
  { slug: 'prescot', name: 'Prescot' },
  { slug: 'prestwich', name: 'Prestwich' },
  { slug: 'radcliffe', name: 'Radcliffe' },
  { slug: 'runcorn', name: 'Runcorn' },
  { slug: 'saint-helens', name: 'Saint Helens' },
  { slug: 'sale', name: 'Sale' },
  { slug: 'salford', name: 'Salford' },
  { slug: 'skemersdale', name: 'Skemersdale' },
  { slug: 'stretford', name: 'Stretford' },
  { slug: 'tyldesley', name: 'Tyldesley' },
  { slug: 'urmston', name: 'Urmston' },
  { slug: 'walkden', name: 'Walkden' },
  { slug: 'warrington', name: 'Warrington' },
  { slug: 'westhoughton', name: 'Westhoughton' },
  { slug: 'whitefield', name: 'Whitefield' },
  { slug: 'widnes', name: 'Widnes' },
  { slug: 'wigan', name: 'Wigan' },
];

export const getLocationsBasic = (): ILocationBasic[] => {
  return LOCATIONS;
};

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
