'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { type ReactNode, useEffect, useRef } from 'react';

import { fadeInUp } from '@/utils/animations';

interface Props {
	children: ReactNode;
}

const Reveal = ({ children }: Props) => {
	const rootContainer = useRef(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-35% 0px -35% 0px' });
	const mainControls = useAnimation();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	return (
		<section ref={rootContainer}>
			<div ref={ref} className="relative w-full">
				<motion.div
					variants={{
						hidden: {
							opacity: 0,
							y: 20,
							filter: 'blur(10px)',
						},
						exit: {
							opacity: 0,
							y: 20,
							filter: 'blur(10px)',
						},
						visible: {
							opacity: 1,
							y: 0,
							filter: 'blur(0px)',
							transition: {
								duration: 0.6,
								ease: 'easeOut',
								staggerChildren: 0.1,
								type: 'ease',
								bounce: 0.3,
							},
						},
					}}
					initial="hidden"
					animate={mainControls}
					exit="exit"
				>
					{children}
				</motion.div>
			</div>
		</section>
	);
};

export default Reveal;
