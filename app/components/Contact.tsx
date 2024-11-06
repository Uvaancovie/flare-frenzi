// components/Contact.tsx
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/inside-firework.jpg" // Ensure this image is in the public directory
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Overlay for Contact Form */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center">
        <div className="max-w-3xl p-8 bg-black bg-opacity-80 text-yellow-500 rounded-lg shadow-lg text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-lg text-red-500"
          >
            Have questions or want to book us for your event? Send us a message below.
          </motion.p>

          <form className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-yellow-500 text-black rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-yellow-500 text-black rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-yellow-500 text-black rounded h-32"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 w-full p-3 bg-red-500 text-yellow-500 font-bold rounded"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
