export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <main className="relative mx-auto min-h-screen overflow-hidden px-6 md:overflow-visible">{children}</main>;
}
