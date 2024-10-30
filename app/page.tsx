// app/page.tsx
"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Slideshow/>
      <Services />
      <Contact />
      <h1>Hello world</h1>
    </div>
  );
}
