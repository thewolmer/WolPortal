import { Inconsolata } from 'next/font/google';
import localFont from 'next/font/local';

export const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export const goudy = localFont({
  src: [
    {
      path: './Goudy/OFLGoudy.otf',
      style: 'normal',
    },
    {
      path: './Goudy/OFLGoudyItalic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-goudy',
  display: 'swap',
});
