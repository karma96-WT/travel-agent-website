"use client";
import React from "react";
import { MapPin, Calendar, Leaf, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/navbar";

const BhutanBlog = () => {
  return (
    <>
      <Navbar />
      <article className="bg-white min-h-screen">
        {/* 1. Blog Hero Header */}
        <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#063b1a]">
          <div className="absolute inset-0 opacity-40">
            {/* Placeholder for a stunning Bhutan landscape image */}
            <img
              src="/bhutan-landscape.jpg"
              alt="Bhutan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
              Travel Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              “Why Bhutan Should Be Your Next Travel Destination”
            </h1>
            <p className="text-xl text-green-50/90 font-medium italic">
              Exploring the Land of Happiness
            </p>
          </div>
        </header>

        {/* 2. Main Article Body */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          {/* Intro Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-2xl text-gray-700 leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-[#063b1a] first-letter:mr-3 first-letter:float-left">
              Bhutan, often called the{" "}
              <span className="text-[#063b1a] font-bold">
                Land of Happiness
              </span>
              , is a destination that captivates travelers with its serene
              landscapes, vibrant culture, and warm-hearted people. Nestled in
              the eastern Himalayas, this small kingdom offers a unique blend of
              spirituality, adventure, and untouched natural beauty.
            </p>
          </div>

          {/* Blog Points Grid */}
          <div className="space-y-20">
            {/* Point 1: Culture */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gray-100 group-hover:text-emerald-700 transition-colors">
                  01
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Experience the Rich Culture
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-[#063b1a]">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bhutan is a country where{" "}
                  <span className="font-semibold text-gray-800">
                    tradition meets everyday life.{" "}
                  </span>
                  From majestic dzongs (fortresses) to colorful festivals, every
                  moment reflects Bhutanese heritage. Travelers can witness
                  sacred mask dances, visit ancient monasteries, and learn about
                  local crafts and customs.
                </p>
              </div>
            </div>

            {/* Point 2: Landscapes */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gray-100 group-hover:text-emerald-700 transition-colors">
                  02
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Explore Stunning Natural Landscapes
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-[#063b1a]">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether it’s the lush valleys of Punakha, the high-altitude
                  trails of Paro, or the pristine forests of Phobjikha, Bhutan
                  offers{" "}
                  <span className="font-semibold text-gray-800">
                    breathtaking scenery.{" "}
                  </span>
                  Hiking and trekking enthusiasts can enjoy trails ranging from
                  short scenic walks to challenging multi-day treks through the
                  Himalayas
                </p>
              </div>
            </div>

            {/* Point 3: Spiritual (Pull Quote Style) */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gray-100 group-hover:text-emerald-700 transition-colors">
                  03
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Spiritual and Mindful Journeys
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-[#063b1a]">
                <p className="text-lg text-gray-600 leading-relaxed">
                  "Bhutan is a destination for the soul as much as for the eyes.
                  Visitors can meditate in monasteries, hike to cliffside
                  temples like Tiger’s Nest, or simply enjoy the calm of its
                  remote valleys.The country’s philosophy of{" "}
                  <span className="font-semibold text-gray-800">
                    Gross National Happiness{" "}
                  </span>
                  encourages travelers to connect with nature and local
                  communities in meaningful ways.
                </p>
              </div>
            </div>
            {/* Point 4: Sustainable Tourism */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gray-100 group-hover:text-emerald-700 transition-colors">
                  04
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Sustainable Tourism
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-[#063b1a]">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bhutan emphasizes{" "}
                  <span className="font-semibold text-gray-800">
                    responsible tourism{" "}
                  </span>
                  , preserving its environment and culture. Travelers contribute
                  to local communities and enjoy a pristine, pollution-free
                  experience that is rare in today’s world.
                </p>
              </div>
            </div>
            {/* Point 5: Best Time to Visit */}
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gray-100 group-hover:text-emerald-700 transition-colors">
                  05
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Best Time to Visit
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] border-l-8 border-[#063b1a]">
                <p className="text-lg text-gray-600 leading-relaxed">
                  The ideal seasons to visit Bhutan are{" "}
                  <span className="font-semibold text-gray-800">
                    spring (March–May)
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-gray-800">
                    autumn (September–November).{" "}
                  </span>
                  Spring brings blooming rhododendrons, while autumn offers
                  clear skies and vibrant festivals.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion & CTA */}
          <footer className="mt-32 pt-16 border-t border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Bhutan is more than a travel destination; it’s an experience that
              touches the heart. Whether you seek{" "}
              <span className="italic">
                adventure, culture, or spiritual peace
              </span>
              , Bhutan promises memories that last a lifetime.
            </p>

            <div className="bg-[#063b1a] p-12 rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to explore the Land of Happiness?{" "}
              </h3>
              <p className="mb-8 text-green-100/80">
                Contact Bhutan Happiness Tours and Treks to customize your dream
                Bhutan trip today!{" "}
              </p>
            </div>
          </footer>
        </section>
      </article>
    </>
  );
};

export default BhutanBlog;
