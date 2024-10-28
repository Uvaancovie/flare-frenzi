// components/About.tsx
"use client";

import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          About PyroDecor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-red-500"
        >
          PyroDecor specializes in unforgettable events with premium pyrotechnics
          and stunning decor. Our expert team ensures every celebration is truly magical,
          with vibrant colors and unique setups to captivate your guests.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
