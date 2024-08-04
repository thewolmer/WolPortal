'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { Fade } from '@/utils/animations';

interface Props {
	title: string;
	description: string;
}

export const ContentGrid = ({ title, description }: Props) => (
	<motion.div
		variants={Fade}
		className='card-base cursor-pointer overflow-x-hidden rounded-lg bg-default p-4 transition-colors hover:bg-active'
	>
		<div className="space-y-2 overflow-x-hidden leading-relaxed">
			<h2 className='truncate font-medium text-wolwhite'>{title}</h2>
			<p className='line-clamp-2 text-md text-white/30'>{description}</p>
		</div>
	</motion.div>
);
