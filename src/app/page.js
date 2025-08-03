/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function LandscapingHomePage() {
  const images = [
    "spring.jpeg",
    "summer.jpeg",
    "fall.jpeg",
    "winter.jpeg",
    "smainfall.jpeg",
    "Zoller.jpeg",
    "shepardstripes.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Top Banner */}
      <div className="fixed top-0 w-full bg-black bg-opacity-80 text-white z-50 py-2 px-4 flex justify-between items-center transition-opacity duration-300">
        <div className="text-sm font-semibold">EAP Landscaping LLC</div>
        <div className="flex gap-4 text-sm">
          <a href="mailto:EAPLandscapingLLC@gmail.com" className="flex items-center gap-1 hover:underline">
            <FaEnvelope /> EAPLandscapingLLC@gmail.com
          </a>
          <a href="tel:8603728467" className="flex items-center gap-1 hover:underline">
            <FaPhone /> (860) 372-8467
          </a>
        </div>
      </div>

      {/* Hero Image Background */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/logo.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      ></div>

      {/* Welcome Text */}
      <div className="text-center text-4xl font-bold my-12">Welcome to EAP Landscaping</div>

      {/* Image Slider */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <Image
          src={`/${images[currentImage]}`}
          alt="Seasonal Work"
          width={800}
          height={500}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Seasonal Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 px-4">
        {[
          { season: "Spring", img: "spring.jpeg" },
          { season: "Summer", img: "summer.jpeg" },
          { season: "Fall", img: "fall.jpeg" },
          { season: "Winter", img: "winter.jpeg" },
        ].map(({ season, img }) => (
          <div key={season} className="bg-white rounded-xl shadow-lg p-4">
            <Image
              src={`/${img}`}
              alt={season}
              width={400}
              height={300}
              className="rounded-md object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold text-center mt-2">{season}</h3>
          </div>
        ))}
      </div>

      {/* Book Now & Testimonials Buttons */}
      <div className="flex justify-center gap-6 my-12">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
          Book Now
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full">
          Testimonials
        </button>
      </div>
    </div>
  );
}
