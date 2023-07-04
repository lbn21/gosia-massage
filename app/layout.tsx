import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import Footer from '@app/components/Footer';
import Header from '@app/components/Header';
import '@app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Gosia Massage',
    default: 'Experience Personalized Mobile Massage with Gosia Massage',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-white')}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
