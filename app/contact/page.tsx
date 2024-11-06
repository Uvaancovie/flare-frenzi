// app/contact/page.tsx
"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-black text-yellow-500 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-yellow-500">Get in Touch</h1>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black border border-yellow-500 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Send us a message</h2>

            {/* Display Success Message */}
            {success && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-black text-yellow-500 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-black text-yellow-500 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Message</label>
                <textarea
                  className="w-full p-3 bg-black text-yellow-500 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-yellow-500 py-3 rounded-lg font-bold transition-colors duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Flare Frenzi Contact Details */}
          <div className="bg-black border border-yellow-500 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Flare Frenzi</h2>
            <p className="text-yellow-500 mb-4">Feel free to reach out via phone, email, or visit our location:</p>
            <ul className="text-yellow-500 space-y-3">
              <li>
                <strong>Telephone:</strong> 071 880 1007
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:flarefrenzi@gmail.com" className="text-red-500 hover:text-red-600">flarefrenzi@gmail.com</a>
              </li>
              <li>
                <strong>Address:</strong> 2 Kruger Place
              </li>
            </ul>

            {/* Updated Google Map for Flare Frenzi Location */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg border-4 border-red-500 transition-all duration-500 hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9877498614887!2d31.004225899999994!3d-29.7201141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef704623b566757%3A0xa55e3e5598c5d83a!2sKruger%20Pl%2C%20Phoenix%20Industrial%2C%20Phoenix%2C%204156!5e0!3m2!1sen!2sza!4v1730931313514!5m2!1sen!2sza"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flare Frenzi Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
