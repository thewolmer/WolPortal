'use client';
import { Image } from '@/components/Image';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export const BitMoji = () => {
	const [url, setUrl] = useState('/images/avatar/hi.png');
	const [message, setMessage] = useState('');
	const [count, setCount] = useState(0);
	const [shake, setShake] = useState(false);

	const handleClick = () => {
		setCount((prevCount) => {
			const newCount = prevCount + 1;
			setShake(true);
			updateMessageAndImage(newCount);
			return newCount;
		});
	};

	const updateMessageAndImage = (count: number) => {
		switch (count) {
			case 2:
				setUrl('/images/avatar/hi.png');
				setMessage('Hey! Why did you click me?');
				break;
			case 3:
				setUrl('/images/avatar/mad.png');
				setMessage('Seriously? I said don’t!');
				break;
			case 4:
				setUrl('/images/avatar/mad.png');
				setMessage('You’re pushing my buttons!');
				break;
			case 5:
				setUrl('/images/avatar/mad.png');
				setMessage('Okay, now you’re just being rude!');
				break;
			case 6:
				setUrl('/images/avatar/mad.png');
				setMessage('This is getting out of hand!');
				break;
			case 7:
				setUrl('/images/avatar/moremad.png');
				setMessage('I’m warning you, last chance!');
				break;
			case 8:
				setUrl('/images/avatar/moremad.png');
				setMessage('Seriously!!! STOPPP!!!');
				break;
			case 9:
				setUrl('/images/avatar/moremad.png');
				setMessage('You are really testing my patience!');
				break;
			case 10:
				setUrl('/images/avatar/moremad.png');
				setMessage('You must really like clicking...');
				break;
			case 11:
				setUrl('/images/avatar/hi.png');
				setMessage('Okay, I give up. You win!');
				break;
			default:
				setUrl('/images/avatar/hi.png');
				setMessage('');
		}
	};

	useEffect(() => {
		if (shake) {
			const shakeTimeout = setTimeout(() => {
				setShake(false);
			}, 500);
			return () => clearTimeout(shakeTimeout);
		}
	}, [shake]);

	useEffect(() => {
		if (message) {
			const messageTimeout = setTimeout(() => {
				setMessage('');
			}, 5000);
			return () => clearTimeout(messageTimeout);
		}
	}, [message]);

	useEffect(() => {
		const resetTimeout = setTimeout(() => {
			setCount(0);
			setUrl('/images/avatar/hi.png');
		}, 20000);
		return () => clearTimeout(resetTimeout);
	}, []);

	const animationVariants = {
		initial: { scale: 0.5, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		clicked: { scale: 0.9 },
		exit: { scale: 0.5, opacity: 0 },
		transition: { type: 'spring', stiffness: 300, damping: 20 },
	};

	const messageVariants = {
		initial: { scale: 0.5, opacity: 0 },
		enter: { scale: 1, opacity: 1 },
		exit: { scale: 0.5, opacity: 0 },
		transition: { type: 'spring', stiffness: 300, damping: 20 },
	};

	const shakeVariants = {
		shake: {
			x: [0, -8, 8, -10, 10, -5, 5, 0],
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.div
			className="relative flex items-center justify-center"
			variants={shakeVariants}
			animate={shake ? 'shake' : ''}
		>
			<AnimatePresence>
				<motion.div initial="initial" animate="animate" whileTap="clicked" exit="exit" variants={animationVariants}>
					<Image
						onClick={handleClick}
						src={url}
						alt="Profile Picture"
						width={420}
						height={420}
						className="w-56 rounded-full"
					/>
				</motion.div>
			</AnimatePresence>
			<AnimatePresence>
				{message && (
					<motion.div
						initial="initial"
						animate="enter"
						exit="exit"
						variants={messageVariants}
						className="absolute top-0 right-0 rounded-full border border-destructive bg-background/10 px-2 py-1 text-destructive backdrop-blur-md"
					>
						<p className="max-w-32 text-center font-semibold">{message}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
