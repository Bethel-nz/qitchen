import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Qitchen',
  description: 'Sushi Restaurant Design',
  authors: [
    {
      name: 'bethel nzekea',
      url: 'https://github.com/Bethel-nz',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} p-4 bg-muted h-dvh overflow-hidden text-default relative bg-texture `}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
