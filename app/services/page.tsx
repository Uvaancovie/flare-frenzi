// services/page.tsx
"use client";

import React from 'react';
import { FaFire, FaCloud, FaBirthdayCake, FaMagic, FaCouch } from 'react-icons/fa'; // Importing icons for event services
import { IconType } from 'react-icons'; // Importing IconType from 'react-icons'
import FlareFrenziCarousel from '../components/FlareFrenziCarousel';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-500 group">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-yellow-500 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      <h3 className="text-2xl font-semibold text-yellow-500">{title}</h3>
    </div>
    <p className="text-white mt-4">{description}</p>
  </div>
);

const services = [
  {
    title: "Pyrotechnics",
    description: "We offer a variety of different pyrotechnic machines such as traditional cold up sparks, revolving cold up sparks, and waterfall cold sparks. Contact us for any variation that you may require!",
    Icon: FaFire,
  },
  {
    title: "Fog Machines",
    description: "Our fog machines are water based which allows us to deliver stunning visuals whilst keeping safety in mind. We offer low fog blasts and jet fog blasts.",
    Icon: FaCloud,
  },
  {
    title: "Confetti Blasts",
    description: "What’s a celebration without a confetti blast? Confetti blasts are perfect for baby gender reveals, birthdays, and weddings!",
    Icon: FaBirthdayCake,
  },
  {
    title: "Bubble Machines",
    description: "Bubble machines are a great addition to any event to deliver a hint of enchantment.",
    Icon: FaMagic,
  },
  {
    title: "Decor Hire",
    description: "We offer a wide variety of props and decor for hire. Browse through our catalog on our social media accounts.",
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
