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
          About Flare Frenzi 
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-red-500"
        >
          Welcome to Flare Frenzi, we are a one stop shop for all your event special effects needs. We specialise in pyrotechnics to transform any event into a magical and memorable moment. 

Our effects displays will leave your guests with an unforgettable experience which will be talked about for years to come. Flare Frenzi has got everything you need from pyrotechnics to revolving smoke jets and much more! Feel free to contact us and watch as We Light Up Your Way!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
