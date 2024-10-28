// app/page.tsx
"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <h1>Hello world</h1>
    </div>
  );
}
