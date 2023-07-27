'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react';

import { fadeInUp } from '@util/animations';

interface Props {
  children: ReactNode;
}

const Reveal = ({ children }: Props) => {
  const rootContainer = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-35% 0px -35% 0px' });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <section ref={rootContainer}>
      <div ref={ref} className="relative w-full overflow-hidden">
        <motion.div variants={fadeInUp} initial="hidden" animate={mainControls}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Reveal;
