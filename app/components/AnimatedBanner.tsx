// components/AnimatedBanner.tsx
"use client";

const servicesText = "• Pyrotechnics  • Fog Machines  • Confetti Blasts  • Bubble Machines • ";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-black py-0.5">
      <div className="container mx-auto text-center">
        <span className="text-lg font-semibold">{servicesText}</span>
      </div>
    </div>
  );
};

export default AnimatedBanner;
