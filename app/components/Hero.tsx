// components/Hero.tsx
"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link'; // Import Next.js Link component

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
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{ backgroundImage: `url('home-bg.jpeg')` }} // Replace with your image path
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-extrabold md:text-6xl lg:text-7xl"
        >
          We Light Up Your Way!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl lg:text-2xl mt-4 text-white"
        >
          Professional Pyrotechnics and Stunning Decor Hire for an Unforgettable Experience
        </motion.p>

        {/* Call to Action Button */}
        <Link href="/about" passHref>
          <motion.button
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            animate={{ scale: hover ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-8 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-red-500 transition duration-300"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
