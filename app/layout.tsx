import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Gosia Massage',
    default: 'Experience Personalized Mobile Massage with Gosia Massage',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
