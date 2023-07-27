import { ColorResult, generateColorsAndInitials } from '@app/app/utils/Avatar';

export type Review = {
  id: number;
  name: string;
  content: string;
  rating: number;
  date: Date;
  avatar: ColorResult;
  link: string;
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Keith Rushton',
    content:
      'Excellent massage catered for your individual needs, would highly recommend.',
    rating: 5,
    date: new Date(1689964943000),
    avatar: generateColorsAndInitials('Keith Rushton'),
    link: 'https://g.co/kgs/P47D9E',
  },
];
