// components/FullSectionImage.tsx
"use client";

import Image from 'next/image';

const FullSectionImage: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/inside-firework.jpg" // Make sure this path is correct and the image is in the public directory
        alt="Inside Firework"
        layout="fill" // Makes the image cover the whole container
        objectFit="cover" // Ensures the image fills the section without distortion
        quality={100} // Optional: Increase quality if needed
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        {/* Optional overlay content */}
        <h2 className="text-4xl font-bold text-yellow-500"></h2>
      </div>
    </section>
  );
};

export default FullSectionImage;
