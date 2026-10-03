// app/pages/tours/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { toursData, type Tour } from "@/app/pages/data/toursData";
import { itinerariesData, type Itinerary } from "@/app/pages/data/itenraydata";

export default function BhutanToursPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="bg-gray-50 min-h-screen py-12 px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 mt-5">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              “Explore Bhutan, Experience Happiness”
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover breathtaking landscapes, timeless culture, spiritual
              traditions, and unforgettable adventures with Bhutan Happiness
              Tours & Treks.
            </p>
            <div className="w-24 h-1.5 bg-[#063b1a] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {toursData.map((tour: Tour) => (
              <Link key={tour.id} href={`/pages/tours/${tour.slug}`}>
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
                  <div className="flex-grow relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-end p-6 text-right">
                      <div className="backdrop-blur-md bg-black/40 px-4 py-2 rounded-lg">
                        <p className="text-orange-400 text-lg font-medium">
                          {tour.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Our Signature Bhutan Journeys Section */}
          <div className="w-full h-auto mt-16">
            <h1 className="text-black font-bold text-4xl">
              Our Signature Bhutan Journeys
            </h1>
            <p className="text-gray-500 text-xl mt-2 italic">
              Handpicked experiences designed to help you discover Bhutan’s
              culture, nature, spirituality, and breathtaking landscapes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {itinerariesData.map((itinerary: Itinerary) => (
                <Link
                  key={itinerary.id}
                  href={`/pages/itenary/${itinerary.slug}`}
                >
                  <div className="w-full h-[220px] border border-amber-500 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-600 transition-all cursor-pointer flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-700">
                        {itinerary.title}
                      </h3>
                      <p className="text-amber-900 font-medium mt-1 text-sm">
                        {itinerary.duration}
                      </p>
                      <p className="text-gray-600 mt-2 line-clamp-2 text-sm">
                        {itinerary.overview}
                      </p>
                    </div>
                    <span className="text-amber-800 font-semibold text-sm self-end">
                      View Itinerary Details &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
