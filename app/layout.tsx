import './main.css';
import classNames from 'classnames';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import { geistmono, inter } from '@/components/fonts';
import { GoogleAnalytics } from '@/utils/GoogleAnalytics';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
			<body className={classNames(inter.className, geistmono.variable)}>
				<Providers attribute="class" defaultTheme="system">
					<Navbar />
					<main className="container mx-auto max-w-4xl p-10 md:p-0">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
