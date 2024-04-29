'use client';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import { Fade } from '@/lib/animations';

interface Props {
  children: ReactNode;
}
// Animates children

export const FadeUp = ({ children }: Props) => (
  <section>
    <div className="relative w-full overflow-hidden">
      <motion.div variants={Fade} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </div>
  </section>
);
