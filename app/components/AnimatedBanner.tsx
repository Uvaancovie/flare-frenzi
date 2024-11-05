// components/AnimatedBanner.tsx
"use client";

import { motion } from 'framer-motion';

const servicesText = "Pyrotechnics • Fog Machines • Confetti Blasts • Bubble Machines";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-black py-2 overflow-hidden">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        <span className="text-lg font-semibold px-4">{servicesText} &nbsp; {servicesText}</span>
      </motion.div>
    </div>
  );
};

export default AnimatedBanner;
