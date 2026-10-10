"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const GalleryPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  // Array of 61 images: /Gallery1.jpg to /Gallery61.jpg
  const images = Array.from({ length: 61 }, (_, i) => ({
    id: i + 1,
    src: `/Gallery${i + 1}.jpg`,
    alt: `Gallery Image ${i + 1}`,
  }));

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 50px
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keyboard navigation for Lightbox (Escape to close, Left/Right arrow keys to switch images)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : images.length - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImageIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1,
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1,
      );
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <div className="h-20 bg-white"></div>
      <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-slate-800 pt-20 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900 leading-tight text-center">
          Explore Our Gallery
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-12">
          A glimpse into the unforgettable experiences that await you in Bhutan.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImageIndex(index)}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group bg-slate-100"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-xs">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-out Lightbox Modal with high z-index to stay above Navbar */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 select-none"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Prominent Cancel / Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="fixed top-5 right-5 z-[10000] text-white bg-black/60 hover:bg-black/90 border border-white/20 hover:border-white/40 flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium shadow-lg backdrop-blur-md focus:outline-none cursor-pointer"
            aria-label="Close modal and back to grid"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>Close</span>
          </button>

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="fixed left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 border border-white/10 rounded-full p-3 transition-all z-[10000] focus:outline-none cursor-pointer"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="fixed right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 border border-white/10 rounded-full p-3 transition-all z-[10000] focus:outline-none cursor-pointer"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Active Popped Image Container */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Counter */}
            <div className="mt-4 bg-black/70 border border-white/10 text-white text-xs md:text-sm px-4 py-1.5 rounded-full backdrop-blur-md">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
