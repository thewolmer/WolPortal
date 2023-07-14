import '@style/main.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';

import Footer from '@module/Footer';
import Navbar from '@module/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-wolblack')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
