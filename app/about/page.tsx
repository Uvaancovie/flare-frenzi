// app/about/page.tsx
"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-red-500"
        >
          About Flare Frenzi
        </motion.h1>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-yellow-500 mb-6"
        >
          Flare Frenzi brings your events to life with unforgettable pyrotechnic displays,
          breathtaking decor, and magical effects. We’re dedicated to transforming ordinary
          occasions into extraordinary experiences, tailored to your vision.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg text-red-500 mb-6"
        >
          From spark shows and fog machines to confetti blasts and bubble machines,
          Flare Frenzi offers a comprehensive range of event enhancements to create an
          atmosphere that’s nothing short of magical.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg text-yellow-500 mb-6"
        >
          With safety, creativity, and your satisfaction as our top priorities, we work
          closely with you to ensure every detail of your event is flawless. Flare Frenzi
          is more than just pyrotechnics – it’s about creating moments that leave lasting
          memories for you and your guests.
        </motion.p>
      </div>
    </section>
  );
}
