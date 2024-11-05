// components/Services.tsx
"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "💥 Pyrotechnics",
    description: "We offer a variety of different pyrotechnic machines, from traditional vertical cold sparks to waterfall sprays from above. Contact us for any variation that you may require!"
  },
  {
    title: "💨 Fog Machines",
    description: "Our fog machines are water-based, delivering stunning visuals while keeping safety in mind."
  },
  {
    title: "🎉 Confetti Blasts",
    description: "What’s a celebration without a confetti blast? Perfect for baby gender reveals, birthdays, and weddings!"
  },
  {
    title: "🫧 Bubble Machines",
    description: "Bubble machines add a hint of enchantment to any event, perfect for guests of all ages."
  },
  {
    title: "Decor Hire",
    description: "We offer a wide variety of props and decor for hire. Browse our catalog on our social media accounts."
  }
];

const Services: React.FC = () => {
  return (
    <section className="relative bg-black text-yellow-500 py-20 px-6 overflow-hidden">
      {/* Fireworks animation layer */}
      <div className="absolute inset-0 z-0 fireworks-animation"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-red-500"
        >
          Our Services
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="bg-yellow-500 p-6 rounded-lg text-black shadow-lg"
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-red-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
