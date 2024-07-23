'use client';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

interface AnimatedNumberProps {
	targetNumber: number;
	duration?: number; // Optional: duration of the animation in seconds
	startNumber?: number; // Optional: starting number for the animation
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
	targetNumber,
	duration = 2, // Default animation duration
	startNumber = 50, // Default starting number
}) => {
	const controls = useAnimation();

	React.useEffect(() => {
		controls.start({
			number: targetNumber,
			transition: {
				duration,
				ease: [0.33, 1, 0.68, 1], // Custom easing function to create fast-slow effect
			},
		});
	}, [targetNumber, duration, controls]);

	return (
		<motion.div initial={{ number: startNumber }} animate={controls}>
			{/* Interpolating the animated number */}
			{({ number }) => <span>{Math.round(number)}</span>}
		</motion.div>
	);
};

export default AnimatedNumber;
