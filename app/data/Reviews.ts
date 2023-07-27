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
    id: 2,
    name: 'John Harvey',
    content:
      'Brilliant massage from a lovely lady. Listens to your injuries and how she can give the correct massage, Great price and massage in your home. Great business well done Gosia.',
    rating: 5,
    date: new Date(1690486957000),
    avatar: generateColorsAndInitials('John Harvey'),
    link: 'https://g.co/kgs/iAwCeV',
  },
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
