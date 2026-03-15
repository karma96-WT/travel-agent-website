"use client";

import React from "react";
import Navbar from "@/app/components/navbar";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight text-center">
          Explore Our Gallery
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-12">
          A glimpse into the unforgettable experiences that await you in Bhutan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Images - Replace with actual gallery images */}
          <img
            src="/gallery1.png"
            alt="Gallery Image 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery2.png"
            alt="Gallery Image 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery3.png"
            alt="Gallery Image 3"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery4.png"
            alt="Gallery Image 4"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery5.png"
            alt="Gallery Image 5"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery6.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />

          <img
            src="/gallery7.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />

          <img
            src="/gallery8.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery9.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />

          <img
            src="/gallery10.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery11.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery12.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery13.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery14.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery15.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery16.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/gallery17.png"
            alt="Gallery Image 6"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
};
export default GalleryPage;
