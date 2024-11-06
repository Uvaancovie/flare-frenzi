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

    // Display success message (simulating a submission)
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
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Send us a message</h2>

            {/* Display Success Message */}
            {success && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Flare Frenzi Contact Details */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Flare Frenzi</h2>
            <p className="text-gray-300 mb-4">Feel free to reach out via phone, email, or visit our location:</p>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Telephone:</strong> 071 880 1007
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:flarefrenzi@gmail.com" className="text-red-600 hover:text-red-700">flarefrenzi@gmail.com</a>
              </li>
              <li>
                <strong>Address:</strong> 2 Kruger Place
              </li>
            </ul>

            {/* Google Map for Flare Frenzi Location */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg border-4 border-red-600 transition-all duration-500 hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.401776478053!2d30.9765865!3d-29.9148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa1125f3e229%3A0x2a1d5fa1d9eec991!2sUnit%2029%20Jacobs%20Industrial%20Park%2C%20166%20Bluff%20Rd%2C%20Jacobs%2C%20Durban%2C%204052!5e0!3m2!1sen!2sza!4v1695826101837!5m2!1sen!2sza"
                allowFullScreen={true}
                loading="lazy"
                title="Flare Frenzi Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
