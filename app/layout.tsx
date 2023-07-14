import '@style/main.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';

import Footer from '@module/Footer';
import Navbar from '@module/Navbar';
import { generateSeo } from '@util/generateSeo';

export const generateMetadata = () =>
  generateSeo({
    title: 'WolPortal',
    description:
      'Explore the website of Wolmer a.k.a Karan Roy, a young web developer with a passion for gaming, VFX, and Film-making. Browse for Web3 projects and much more! Contact to discuss potential projects.',
    url: '/',
  });

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
