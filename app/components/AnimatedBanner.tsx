// components/AnimatedBanner.tsx
"use client";

import Link from 'next/link';

const services = [
  { name: "Cold Sparks", href: "/services#pyrotechnics" },
  { name: "Fog Machines", href: "/services#fog-machines" },
  { name: "Confetti Blasts", href: "/services#confetti-blasts" },
];

const secondaryServices = [
  { name: "Bubble Machines", href: "/services#bubble-machines" },
  { name: "Decor Hire", href: "/services#decor-hire" },
];

const AnimatedBanner: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-black py-0.5">
      <div className="container mx-auto text-center">
        {/* First line of services */}
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="text-sm font-semibold mx-1 hover:text-red-500">
            {service.name}
          </Link>
        ))}
        {/* Line break */}
        <br />
        {/* Second line of services */}
        {secondaryServices.map((service, index) => (
          <Link key={index} href={service.href} className="text-sm font-semibold mx-1 hover:text-red-500">
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBanner;
