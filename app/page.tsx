// pages/index.tsx

import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import AnimatedBanner from './components/AnimatedBanner';
import FullSectionImage from './components/FullSectionImage';

export default function Home() {
  return (
    <main>
      <AnimatedBanner />
      <Hero />
      <About />
      <Slideshow />

      <FullSectionImage/>
     

      <Contact />
      <Footer/>
    </main>
  );
}
