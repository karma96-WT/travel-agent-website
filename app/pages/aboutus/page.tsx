"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import { useState, useEffect } from "react";
import Footer from "@/app/components/footer";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data from the provided text
  const services = [
    {
      title: "Cultural Tours",
      description:
        "Explore Bhutan's magnificent dzongs, monasteries, temples, museums, and traditional villages while experiencing the country's rich history and living culture.",
    },
    {
      title: "Trekking Adventures",
      description:
        "Discover breathtaking Himalayan landscapes through guided trekking routes suitable for beginners and experienced trekkers alike.",
      icon: "🥾",
    },
    {
      title: "Festival (Tshechu) Tours",
      description:
        "Witness Bhutan's vibrant religious festivals featuring colourful mask dances, traditional music, and sacred ceremonies.",
      icon: "🎭",
    },
    {
      title: "Nature & Wildlife Tours",
      description:
        "Visit national parks and protected areas to experience Bhutan's diverse flora, fauna, and birdlife, including the famous Black-necked Crane.",
      icon: "🦅",
    },
    {
      title: "Customised Holiday Packages",
      description:
        "Every traveller is unique. We design personalised itineraries based on your interests, travel style, and budget.",
      icon: "✏️",
    },
    {
      title: "Luxury & Family Holidays",
      description:
        "Enjoy comfortable accommodations, private transport, and carefully planned itineraries ideal for couples, families, and groups.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Adventure Activities",
      description:
        "Experience exciting activities such as hiking, mountain biking, camping, rafting, photography tours, and village walks.",
      icon: "🚵",
    },
    {
      title: "Corporate & Educational Tours",
      description:
        "We organise educational trips, study tours, incentive travel, conferences, and group excursions with professional planning and support.",
      icon: "🏢",
    },
  ];

  const whyChooseUs = [
    "Experienced and licensed local tour guides.",
    "Tailor-made itineraries to suit your preferences.",
    "Reliable transportation and comfortable accommodation.",
    "Authentic cultural experiences.",
    "Friendly and professional customer service.",
    "Competitive pricing with excellent value.",
    "Commitment to sustainable tourism.",
    "24/7 travel assistance throughout your journey.",
  ];

  const values = [
    "Customer satisfaction comes first.",
    "Honest and transparent service.",
    "Respect for Bhutanese culture and traditions.",
    "Commitment to sustainable and responsible tourism.",
    "Professionalism, safety, and reliability.",
  ];

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="h-20 bg-gradient-to-r from-[#063b1a] to-[#0a5225]"></div>
      <div className="bg-white text-gray-800">
        {/* ===== HERO ===== */}
        <section className="relative bg-gradient-to-r from-[#063b1a] to-[#0a5225] text-white py-24 md:py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Bhutan Happiness
              <br />
              <span className="text-yellow-300">Tours and Treks</span>
            </h1>
          </div>
        </section>

        {/* ===== INTRODUCTION ===== */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="prose prose-lg prose-green mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Bhutan Happiness Tours and Treks is a locally owned and operated
              travel company dedicated to creating authentic, personalised, and
              unforgettable travel experiences across the Kingdom of Bhutan.
              Inspired by Bhutan's philosophy of{" "}
              <strong className="text-[#063b1a]">
                Gross National Happiness (GNH)
              </strong>
              , we strive to provide journeys that combine cultural discovery,
              natural beauty, adventure, and genuine Bhutanese hospitality.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you are visiting Bhutan for the first time or returning to
              explore more of its hidden treasures, our experienced team is
              committed to making every moment of your journey safe,
              comfortable, and memorable.
            </p>
          </div>
        </section>

        {/* ===== MISSION & VISION ===== */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h2 className="text-2xl font-bold text-[#063b1a] mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To deliver exceptional travel experiences that showcase
                  Bhutan's unique culture, pristine environment, and warm
                  hospitality while promoting responsible and sustainable
                  tourism.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
                <h2 className="text-2xl font-bold text-[#063b1a] mb-4 flex items-center gap-3">
                  <span className="text-3xl">👁️</span> Our Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become one of Bhutan's most trusted travel companies by
                  providing high-quality service, authentic experiences, and
                  unforgettable memories for every traveller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-start gap-4"
              >
                <span className="text-[#063b1a] font-bold text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose{" "}
                <span className="text-[#063b1a]">Bhutan Happiness</span>?
              </h2>
              <ul className="space-y-3">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#063b1a] font-bold text-lg">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#063b1a] rounded-3xl p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 Our Commitment
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                At Bhutan Happiness Tours and Treks, we believe travel should
                inspire, educate, and create lasting memories. We are committed
                to providing meaningful experiences while helping preserve
                Bhutan's unique culture, traditions, and natural environment for
                future generations.
              </p>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="px-6 pb-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#063b1a] to-[#0a5225] rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl">
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
              Join us and discover the Land of the Thunder Dragon through
              journeys filled with happiness, adventure, and unforgettable
              moments.
            </p>
            <div className="w-16 h-1 bg-yellow-400/50 mx-auto rounded-full mt-6"></div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
