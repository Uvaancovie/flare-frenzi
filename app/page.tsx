// pages/index.tsx

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';
import ProductCard from './components/ProductCard';

import ServicesGrid from './components/ServicesGrid';

export default function Home() {
  return (
    <main>
     
      <Hero />
      <About />
      <ServicesGrid/>
      <Services />
      <Slideshow />

      {/* Product Section */}
      <section className="py-20 px-6 bg-yellow-500 text-black">
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-4xl font-bold text-red-500 mb-6">Our Product</h2>
          <ProductCard
            image="/inside-firework.jpg" // Ensure this path is correct and the image is in the public directory
            title="Inside Fireworks"
            description="Bring the magic indoors with our premium inside fireworks, designed to add sparkle to any event safely."
            price={`$${199.99}`} // Change price to a number
          />
        </div>
      </section>

      <Contact />
    </main>
  );
}
