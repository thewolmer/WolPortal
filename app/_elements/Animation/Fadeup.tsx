'use client';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

import { fadeInUp } from '@util/animations';

interface Props {
  children: ReactNode;
}
// Animates children

const FadeUp = ({ children }: Props) => (
  <section>
    <div className="relative w-full overflow-hidden">
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        {children}
      </motion.div>
    </div>
  </section>
);

export default FadeUp;
