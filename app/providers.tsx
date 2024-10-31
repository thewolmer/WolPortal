'use client';

import { ModalsProvider } from '@/components/modals/ModalsProvider';
import Lenis from 'lenis';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export function Providers({ children }: ThemeProviderProps) {
	React.useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<NextThemesProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
			{children}
			<ModalsProvider />
		</NextThemesProvider>
	);
}
