import { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const generateSeo = ({
  title,
  description,
  url,
  image,
}: Props): Metadata => ({
  title,
  description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title,
    description,
    siteName: siteConfig.name,
    url,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: image ? image : siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitterHandle,
    title,
    description,
    images: [
      {
        url: image ? image : siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  alternates: {
    canonical: url,
  },
});
