// components/About.tsx
"use client";

import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 border-4 border-yellow-500 rounded-lg p-8">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center md:text-left text-yellow-500 border-b-4 border-red-500 pb-4"
          >
            About Flare Frenzi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg leading-relaxed text-red-500"
          >
            Welcome to Flare Frenzi, your one-stop shop for all event special effects needs! 
            We specialize in pyrotechnics to transform any event into a magical and memorable moment. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg leading-relaxed text-yellow-500"
          >
            Our effects displays leave your guests with an unforgettable experience that will be talked about for years. 
            From pyrotechnics to revolving smoke jets, Flare Frenzi has everything to light up your way! 
            Feel free to contact us to make your next event truly unforgettable.
          </motion.p>
        </div>

        {/* Decorative Image or Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 h-64 md:h-auto w-full rounded-lg border-4 border-red-500 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/flare-frenzi-event.jpg')", // Make sure this image is in the public/images folder
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
