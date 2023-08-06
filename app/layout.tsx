import '@style/main.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';

import { GoogleAnalytics } from '@element/GoogleAnalytics';
import Footer from '@module/Footer';
import Navbar from '@module/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className={classNames(inter.className, 'bg-wolblack')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
