"use client";
import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function LandscapingHomePage() {
  const images = [
    "/spring.jpeg",
    "/summer.jpeg",
    "/fall.jpeg",
    "/winter.jpeg",
    "/smainfall.jpeg",
    "/zoller.jpeg",
    "/shepardstripes.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-6 relative font-sans">
      {/* Top Banner */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-green-800/80' : 'bg-green-800'} text-white py-2 px-4 flex justify-between items-center text-sm`}>
        <span className="font-semibold">EAP Landscaping LLC</span>
        <div className="flex space-x-6 items-center">
          <a href="mailto:EAPLandscapingLLC@gmail.com" className="flex items-center hover:underline">
            <FaEnvelope className="mr-1" /> EAPLandscapingLLC@gmail.com
          </a>
          <a href="tel:8603728467" className="flex items-center hover:underline">
            <FaPhone className="mr-1" /> 860-372-8467
          </a>
        </div>
      </div>

      {/* Faint Logo Background */}
      <img 
        src="/eap-logo.png" 
        alt="EAP Landscaping Logo Background" 
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none z-0" 
      />

      <div className="relative z-10 pt-14">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-md">EAP Landscaping LLC</h1>
          <p className="text-xl text-green-600 mt-3">
            Commercial & Residential Landscaping | Servicing West Hartford and Greater Hartford Areas
          </p>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center space-x-8 text-green-800 font-medium text-lg mb-12">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Our Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="tel:8603728467" className="hover:underline">Book Now</a>
        </nav>

        {/* Hero Slider */}
        <section id="home" className="text-center mb-20">
          <div className="w-full max-w-4xl mx-auto mb-6 overflow-hidden rounded-xl shadow-md">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-[300px] object-cover rounded-md transition-all duration-500"
            />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Welcome to EAP Landscaping LLC</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            At EAP Landscaping, we&apos;re committed to keeping your property beautiful and safe through all four seasons. From lush summer lawns to dependable snow removal, we deliver quality, reliability, and care for every job—big or small.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Spring", "Summer", "Fall", "Winter"].map((season) => {
              const serviceData = {
                Spring: ["Yard cleanups", "Mulch installation", "Garden bed prep", "Hedge Trimming"],
                Summer: ["Mowing & edging", "Weeding", "General landscaping"],
                Fall: ["Leaf cleanups", "Brush Removal", "Lawn Aeration"],
                Winter: ["Snow plowing", "Salting & de-icing", "Junk Removal"]
              };
              return (
                <div key={season} className="p-6 bg-white rounded shadow hover:scale-105 transition-transform duration-300 h-full">
                  <img src={`/${season.toLowerCase()}.jpeg`} alt={season} className="w-full h-64 object-cover rounded mb-4" />
                  <h3 className="text-xl font-semibold text-green-700">{season}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {serviceData[season].map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            EAP Landscaping is proudly run by Evan, a college student at UConn studying Finance and Economics. We believe in empowering students through flexible, meaningful work. That’s why our team is made up of hardworking, dependable college students who care deeply about doing the job right.
          </p>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="bg-white p-4 rounded shadow text-gray-800">
              <p className="mb-2 italic">&quot;All that is said in the reviews are true! Evan and the PMB team are a breath of fresh air — on time, communicative, and enthusiastic about what they do. My house has never looked better.&quot;</p>
              <cite className="text-sm text-gray-600">— Tim Sanford, Facebook</cite>
            </blockquote>
            <blockquote className="bg-white p-4 rounded shadow text-gray-800">
              <p className="mb-2 italic">&quot;They did an amazing job weeding around our house. Very meticulous and professional. Reasonable pricing.&quot;</p>
              <cite className="text-sm text-gray-600">— Genna Giammatteo, Facebook</cite>
            </blockquote>
            <blockquote className="bg-white p-4 rounded shadow text-gray-800">
              <p className="mb-2 italic">&quot;Evan at PMB Landscaping is professional, meticulous and a hard worker. He’s done weeding, planting and spread mulch for us — always leaving the areas very tidy.&quot;</p>
              <cite className="text-sm text-gray-600">— Ellen Seageart, Facebook</cite>
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-600">
          <div className="mb-2">
            <a href="https://www.facebook.com/profile.php?id=100095750785021" className="text-blue-600 hover:underline mx-2">Facebook</a>
            <a href="https://www.instagram.com/pmb_landscaping/" className="text-pink-600 hover:underline mx-2">Instagram</a>
            <a href="https://www.linkedin.com/company/98739212/admin/dashboard/" className="text-blue-800 hover:underline mx-2">LinkedIn</a>
          </div>
          &copy; {new Date().getFullYear()} EAP Landscaping LLC. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
