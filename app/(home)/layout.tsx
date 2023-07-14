import { generateSeo } from '@util/generateSeo';

export const generateMetadata = () =>
  generateSeo({
    title: 'WolPortal',
    description:
      'Explore the website of Wolmer a.k.a Karan Roy, a young web developer with a passion for gaming, VFX, and Film-making. Browse for Web3 projects and much more! Contact to discuss potential projects.',
    url: '/',
  });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <> {children} </>;
}
