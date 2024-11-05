// app/contact/page.tsx
"use client";

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    
    <section className="bg-black text-yellow-500 py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-red-500"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-4 text-yellow-500"
        >
          We’d love to hear from you! Whether you have a question, a request, or want to book an unforgettable event with Flare Frenzi, reach out to us below.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-lg mx-auto bg-yellow-500 p-8 rounded-lg shadow-lg"
      >
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 text-black rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 text-black rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 text-black rounded-md h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-yellow-500 font-bold rounded-md hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
