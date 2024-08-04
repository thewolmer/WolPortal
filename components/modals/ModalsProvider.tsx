'use client';
import { useMounted } from '@/hooks/useMounted';
import { DetailsModel } from './DetailsModel';

export const ModalsProvider = () => {
	const isMounted = useMounted();
	if (!isMounted) return null;

	return (
		<>
			<DetailsModel />
		</>
	);
};
