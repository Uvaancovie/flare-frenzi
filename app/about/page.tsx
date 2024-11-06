// app/about/page.tsx
"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6 min-h-screen flex items-center justify-center">
      {/* Main Box Container */}
      <div className="max-w-5xl mx-auto bg-black border border-yellow-500 rounded-lg shadow-lg p-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-red-500 border-b-4 border-yellow-500 pb-4"
          >
            About Flare Frenzi
          </motion.h1>
        </div>

        {/* Content Section with Flexbox */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Left Section - Main Information */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg text-yellow-500 leading-relaxed"
            >
              Flare Frenzi brings your events to life with unforgettable pyrotechnic displays,
              breathtaking decor, and magical effects. We’re dedicated to transforming ordinary
              occasions into extraordinary experiences, tailored to your vision.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg text-red-500 leading-relaxed"
            >
              From spark shows and fog machines to confetti blasts and bubble machines,
              Flare Frenzi offers a comprehensive range of event enhancements to create an
              atmosphere that’s nothing short of magical.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-lg text-yellow-500 leading-relaxed"
            >
              With safety, creativity, and your satisfaction as our top priorities, we work
              closely with you to ensure every detail of your event is flawless. Flare Frenzi
              is more than just pyrotechnics – it’s about creating moments that leave lasting
              memories for you and your guests.
            </motion.p>
          </div>

          {/* Right Section - Decorative Element */}
          <div className="hidden md:flex flex-col items-center space-y-6">
            <div className="h-full w-px bg-red-500"></div> {/* Vertical decorative line */}
            <div className="text-4xl text-red-500">🎇</div> {/* Decorative icon */}
          </div>
        </div>
      </div>
    </section>
  );
}
