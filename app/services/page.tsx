// services/page.tsx
"use client";

import React from 'react';
import { FaFire, FaCloud, FaBirthdayCake, FaMagic, FaCouch } from 'react-icons/fa'; // Importing icons for event services
import { IconType } from 'react-icons'; // Importing IconType from 'react-icons'
import FlareFrenziCarousel from '../components/FlareFrenziCarousel'; 

interface ServiceCardProps {
  title: string;
  items: string[];
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, Icon }) => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-500 group">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-yellow-500 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      <h3 className="text-2xl font-semibold text-yellow-500">{title}</h3>
    </div>
    <ul className="mt-4 space-y-2 text-white">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-yellow-500 mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const services = [
  {
    title: "Pyrotechnics",
    items: [
      "Vertical cold sparks",
      "Waterfall sprays from above",
      "Custom pyrotechnic effects",
    ],
    Icon: FaFire,
  },
  {
    title: "Fog Machines",
    items: [
      "Water-based fog for safety",
      "Adds stunning visual effects",
      "Perfect for indoor and outdoor events",
    ],
    Icon: FaCloud,
  },
  {
    title: "Confetti Blasts",
    items: [
      "Ideal for celebrations",
      "Perfect for gender reveals, birthdays, and weddings",
      "Adds a festive touch",
    ],
    Icon: FaBirthdayCake,
  },
  {
    title: "Bubble Machines",
    items: [
      "Creates enchanting atmosphere",
      "Perfect for guests of all ages",
      "Adds magic to any event",
    ],
    Icon: FaMagic,
  },
  {
    title: "Decor Hire",
    items: [
      "Wide variety of props",
      "Themed decor options",
      "Available on our social media catalog",
    ],
    Icon: FaCouch,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Carousel Section */}
      <FlareFrenziCarousel />

      {/* Services Grid Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-yellow-500">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-yellow-500 text-center mb-12 animate-fade-in">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
