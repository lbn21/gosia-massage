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
    id: 3,
    name: 'John',
    content:
      'I highly recommend gosia massage, i am a sufferer of sciatica in my back and both legs, I also have an old shoulder injury that effects not only my neck but my arms aswell. Gosia helps me with my day to day working life with the massage that\'s tailored for me without her caring and willingness to listen to my needs I wouldn\'t be able to work my job which I love. For a truly professional massage therapist gosia is by far the best massage I\'ve ever received.',
    rating: 5,
    date: new Date(1690708758000),
    avatar: generateColorsAndInitials('John'),
    link: 'https://g.co/kgs/xArbBr',
  },
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
