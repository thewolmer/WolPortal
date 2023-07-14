import { Metadata } from 'next';

interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const generateSeo = ({ title, description, url, image }: Props): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'WolPortal',
    url,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: image ? image : '/wolportal-social.jpg',
        width: 640,
        height: 321,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WolmerTweets',
    title,
    description,
    images: [
      {
        url: image ? image : '/wolportal-social.jpg',
        width: 641,
        height: 321,
      },
    ],
  },
  alternates: {
    canonical: url,
  },
});
