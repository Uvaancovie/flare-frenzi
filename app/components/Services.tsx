// components/Services.tsx
"use client";

import { motion } from 'framer-motion';

const services = [
  { title: "Fireworks Display", description: "Stunning fireworks to light up any occasion." },
  { title: "Event Lighting", description: "Professional lighting to set the perfect mood." },
  { title: "Decor Setup", description: "Breathtaking decor to make your event unforgettable." },
];

const Services: React.FC = () => {
  return (
    <section className="bg-yellow-500 text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
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
              className="bg-black p-6 rounded-lg text-yellow-500"
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
