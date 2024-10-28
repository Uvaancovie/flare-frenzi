// components/Contact.tsx
"use client";

import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
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
    </section>
  );
};

export default Contact;
