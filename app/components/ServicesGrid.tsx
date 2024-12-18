// components/ServicesGrid.tsx
"use client";

import { motion } from 'framer-motion';
import { FaFire, FaSnowflake, FaBirthdayCake, FaTint, FaCouch } from 'react-icons/fa'; // Import icons

const services = [
  {
    title: "Cold Sparks",
    description:
      "We offer a variety of cold spark machines, from traditional vertical cold sparks to waterfall sprays from above.",
    icon: <FaFire className="text-4xl text-red-500" />,
  },
  {
    title: "Fog Machines",
    description:
      "Our water-based fog machines deliver stunning visuals while keeping safety in mind.",
    icon: <FaSnowflake className="text-4xl text-blue-500" />,
  },
  {
    title: "Confetti Blasts",
    description:
      "Perfect for baby gender reveals, birthdays, and weddings, adding a festive touch to any celebration.",
    icon: <FaBirthdayCake className="text-4xl text-pink-500" />,
  },
  {
    title: "Bubble Machines",
    description:
      "Bubble machines add a hint of enchantment to any event, perfect for all ages.",
    icon: <FaTint className="text-4xl text-purple-500" />, // Updated icon here
  },
  {
    title: "Decor Hire",
    description:
      "We offer a variety of props and decor for hire. Browse our catalog on social media.",
    icon: <FaCouch className="text-4xl text-yellow-500" />,
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Our Services</h2>
        <p className="text-lg text-yellow-500 mt-4">
          Discover the services we offer to make your events unforgettable!
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 0, 0.5)" }}
            className="bg-yellow-500 p-6 rounded-lg shadow-lg text-black flex flex-col items-center hover:bg-red-500 hover:text-yellow-500 transition duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            {/* Description */}
            <p className="text-sm text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
