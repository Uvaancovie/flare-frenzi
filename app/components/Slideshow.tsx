// components/Slideshow.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/party1.jpeg', // Correct paths assuming images are in the public directory
  '/party2.jpeg',
  '/party3.jpeg',
  '/party4.jpeg',
];

const Slideshow: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to handle image navigation
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full max-w-4xl mx-auto py-20">
      <h2 className="text-center text-4xl font-bold text-yellow-500 mb-6">Our Event Gallery</h2>
      
      {/* Slideshow container */}
      <div className="relative w-full h-96 overflow-hidden bg-black rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt={`Event ${currentImage + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-yellow-500 text-black rounded shadow hover:bg-red-500 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-yellow-500 text-black rounded shadow hover:bg-red-500 transition duration-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
