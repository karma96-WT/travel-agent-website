"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import "./local.css";
import { CheckCircle2, Link } from "lucide-react";
import Footer from "./components/footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-page-div bg-white">
        <Navbar isScrolled={isScrolled} />

        {/* Hero Section with Buddha Image and Text Overlay */}
        <div className="hero-container">
          <div className="home-page-image-div">
            <img
              src="/1000152315.jpg"
              alt="Home Page Image"
              className="home-page-image shadow-lg transition-all duration-500 ease-in-out"
            />
          </div>
          {/* Text Overlay on Buddha Image */}
          <div className="hero-text-overlay">
            <p className="hero-quote">
              "Step Into the Last Shangri-La:
              <br />
              <span className="hero-sub-text">
                Where Travel Protects Paradise and Happiness is Measured.
              </span>
              "
            </p>
          </div>
        </div>

        {/* Taktsang Section */}
        <div className="Taktsang-image-div">
          <div className="text-overlay">
            <p>
              Welcome to{" "}
              <span style={{ fontWeight: "bold" }}>
                Bhutan Happiness Tours and Treks
              </span>
              , your trusted partner for unforgettable journeys in the Land of
              Happiness.
            </p>
            <p>
              We specialize in creating personalized travel experiences that
              showcase the true beauty, culture, and spirit of Bhutan. From
              breathtaking mountain landscapes and peaceful monasteries to
              vibrant festivals and authentic village life, we offer journeys
              that connect you deeply with nature and traditions
            </p>
            <p>
              At Bhutan Happiness Tours and Treks, we don’t just plan trips — we
              create meaningful experiences filled with joy, discovery, and
              lasting memories.
            </p>
          </div>
        </div>

        <div style={{ height: "10vh", width: "100%" }} className="bg-white" />

        {/* Why Choose Bhutan Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Why choose <span className="text-[#063b1a]">Bhutan?</span>
            </h1>
            <div className="w-20 h-1 bg-[#063b1a] mt-4 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-snug">
                Pristine Natural <br className="hidden md:block" /> Beauty
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Experience untouched Himalayan landscapes, fresh mountain air,
                and breathtaking scenery preserved in its purest form.
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                {["/Prestine1.png", "/Prestine2.png", "/Prestine3.png"].map(
                  (src, index) => (
                    <div
                      key={index}
                      className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                    >
                      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          src={src}
                          alt="Bhutan Landscape"
                          className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  ),
                )}
              </div>
              <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                Swipe to explore →
              </p>
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Living Spiritual Heritage Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="lg:w-1/3 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Living Spiritual Heritage
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Discover a deeply rooted culture where ancient traditions,
                  sacred rituals, and peaceful values shape everyday life.
                </p>
                <p className="mt-4 sm:mt-6 text-[#063b1a] italic font-medium border-l-2 border-[#063b1a]/20 pl-4 text-sm sm:text-base">
                  "Where every breath is a prayer and every mountain is sacred."
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {["/Spirit1.png", "/Spirit2.png", "/Spirit3.png"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                      >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          <img
                            src={src}
                            alt="Bhutan Landscape"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Vibrant Cultural Festivals Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="lg:w-1/3 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Vibrant Cultural Festivals
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Witness colorful celebrations filled with traditional music,
                  masked dances, and joyful community spirit
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {["/Culture1.png", "/Culture2.png", "/Culture3.png"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                      >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          <img
                            src={src}
                            alt="Bhutan Landscape"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Safe & Peaceful Destination Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="lg:w-1/3 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Safe & Peaceful Destination
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Travel with confidence in one of the world's most serene and
                  welcoming environments.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {["/Safe1.png", "/Safe2.png", "/Safe3.png"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                      >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          <img
                            src={src}
                            alt="Bhutan Landscape"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Sustainable & Responsible Tourism Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="lg:w-1/3 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Sustainable & Responsible Tourism
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Explore a nation committed to environmental protection and
                  mindful travel experiences.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {["/Sustain1.png", "/Sustain2.png", "/Sustain3.png"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                      >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          <img
                            src={src}
                            alt="Bhutan Landscape"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Exclusive Travel Experience Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
              <div className="lg:w-1/3 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Exclusive Travel Experience
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Enjoy uncrowded destinations, personalized services, and
                  meaningful journeys crafted with care.
                </p>
              </div>

              <div className="lg:w-2/3">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {["/Travel1.png", "/Travel2.png", "/Travel3.png"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="min-w-[80%] sm:min-w-[85%] md:min-w-full snap-center group"
                      >
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                          <img
                            src={src}
                            alt="Bhutan Landscape"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Travel Information Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto bg-white">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Travel Information for Visitors to Bhutan
              <span className="block text-base sm:text-lg md:text-xl text-[#063b1a] mt-2 font-medium bg-green-50 inline-block px-3 sm:px-4 py-1 rounded-full border border-green-100">
                (Current Rules – 2026)
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Visa & Entry */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Visa & Entry
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Most foreigners need visa approval before arrival.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Indians, Bangladeshis & Maldivians need an Entry Permit (no
                  visa).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Passport must be valid at least 6 months.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Apply online via the Department of Immigration or through a
                  tour operator.
                </li>
              </ul>
            </div>

            {/* Card 2: SDF */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Sustainable Development Fee (SDF)
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  International tourists: USD 100 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Indian nationals: INR 1,200 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Children discounts apply.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  SDF is separate from hotel, guide, transport, and visa fees.
                </li>
              </ul>
            </div>

            {/* Card 3: Entry Points */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Entry Points
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Main airport: Paro International Airport
                </li>
                <li className="flex items-start gap-3 flex-col w-full">
                  <div className="flex items-start gap-3">
                    <span className="text-[#063b1a] mt-1.5">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </span>
                    <span>Land borders from India:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 ml-6 mt-2 w-full">
                    {[
                      "Phuentsholing",
                      "Gelephu",
                      "Samdrup Jongkhar",
                      "Samtse",
                    ].map((point) => (
                      <span
                        key={point}
                        className="bg-gray-50 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm border border-gray-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 4: Travel Rules */}
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Travel Rules
                </h2>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Independent travel allowed.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Licensed guide required for some restricted areas.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </span>
                  Popular places like Thimphu and Paro are easily accessible.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Ready to Explore Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-5xl mx-auto text-center bg-white">
          <div className="relative overflow-hidden bg-[#063b1a] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-20 shadow-2xl group">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter">
                READY TO EXPLORE?
              </h2>

              <p className="text-green-100/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed px-4">
                Your journey to the Land of the Thunder Dragon begins with a
                single step. Let us craft your perfect Bhutanese escape.
              </p>

              <a
                href="mailto:acharyasomnath123@gmail.com"
                className="relative overflow-hidden bg-white text-[#063b1a] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-50 active:scale-95 flex items-center gap-3"
              >
                PLAN YOUR TRIP
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
