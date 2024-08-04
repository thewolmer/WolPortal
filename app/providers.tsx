'use client';

import { ModalsProvider } from '@/components/modals/ModalsProvider';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import * as React from 'react';

export function Providers({ children }: ThemeProviderProps) {
	return (
		<NextThemesProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
			{children}
			<ModalsProvider />
		</NextThemesProvider>
	);
}
