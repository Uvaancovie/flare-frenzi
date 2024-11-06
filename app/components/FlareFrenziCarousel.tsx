// components/FlareFrenziCarousel.tsx
"use client";

import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

// Image paths and corresponding service details
const services = [
  {
    image: '/white.jpeg',
    title: 'Confetti Blasts',
    description: 'What’s a celebration without a confetti blast? Confetti blasts are perfect for baby gender reveals, birthdays and weddings!',
  },
  {
    image: '/darkie-vit.jpeg',
    title: 'Fog Machines',
    description: 'Our fog machines are water based which allows us to deliver stunning visuals whilst keeping safety in mind. We offer low fog blasts and jet fog blasts.',
  },
  {
    image: '/pyro.jpeg',
    title: 'Pyrotechnics',
    description: 'We offer a variety of different pyrotechnic machines such as traditional cold up sparks, revolving cold up sparks and waterfall cold sparks. Contact us for any variation that you may require!',
  },
  {
    image: '/bubbles.jpeg',
    title: 'Bubble Machines',
    description: 'Bubble machines are a great addition to any event to deliver a hint of enchantment.',
  },
];

export default function FlareFrenziCarousel() {
  return (
    <section className="py-16 bg-black text-yellow-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">Event Highlights</h2>

        {/* Splide Carousel */}
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            speed: 1000,
            gap: '1rem',
          }}
        >
          {services.map((service, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-center items-center flex-col bg-black rounded-lg shadow-lg">
                
                {/* Centralized Image */}
                <div className="flex justify-center md:w-2/3 lg:w-1/2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>

                {/* Service Card for Each Image */}
                <div className="p-6 text-center bg-gray-800 bg-opacity-80 rounded-b-lg mt-4 md:w-2/3 lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-yellow-500">{service.title}</h3>
                  <p className="text-white mt-2">{service.description}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
