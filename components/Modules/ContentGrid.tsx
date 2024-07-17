'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { Fade } from '@util/animations';

interface Props {
  title: string;
  description: string;
}

export const ContentGrid = ({ title, description }: Props) => (
  <motion.div
    variants={Fade}
    className="p-4 overflow-x-hidden transition-colors rounded-lg cursor-pointer bg-default hover:bg-active card-base"
  >
    <div className="space-y-2 overflow-x-hidden leading-relaxed">
      <h2 className="font-medium truncate text-wolwhite">{title}</h2>
      <p className="text-white/30 text-md line-clamp-2">{description}</p>
    </div>
  </motion.div>
);
