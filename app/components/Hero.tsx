// components/Hero.tsx
"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const [hover, setHover] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP animation to bring in elements smoothly
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-black flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Overlay text */}
      <div className="relative z-10 text-center text-yellow-500 p-6 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold"
        >
          Ignite Your Event with PyroDecor!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg mt-4 text-red-500"
        >
          Premium Pyrotechnics and Stunning Decor for Unforgettable Experiences.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          animate={{ scale: hover ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded shadow-lg hover:bg-red-500 transition duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
