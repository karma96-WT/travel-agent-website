"use client";
import React from "react";
import Navbar from "@/app/components/navbar";

const TreksPage = () => {
  const treks = [
    {
      id: 1,
      title: "Tiger’s Nest (Paro Taktsang) Trek",
      duration: "Half-day / Full-day",
      difficulty: "Moderate",
      season: "March–May, September–November",
      highlights:
        "Iconic cliffside monastery, scenic Paro valley, meditation caves",
      accommodation: "Stay in Paro or Thimphu hotels/lodges",
      icon: "🏔️",
    },
    {
      id: 2,
      title: "Druk Path Trek",
      duration: "6–7 days",
      difficulty: "Moderate",
      season: "March–May, September–November",
      highlights:
        "Connects Paro and Thimphu, high mountain passes, alpine lakes, prayer flags, local wildlife",
      accommodation: "Camping along trek; some lodges in remote points",
      icon: "👣",
    },
    {
      id: 3,
      title: "Jomolhari Trek",
      duration: "10–12 days",
      difficulty: "Challenging",
      season: "April–June, September–October",
      highlights:
        "Views of Mount Jomolhari, yak herding villages, glaciers, sacred lakes",
      accommodation: "Tented camps and mountain lodges",
      icon: "🏔️",
    },
    {
      id: 4,
      title: "Snowman Trek",
      duration: "20+ days",
      difficulty: "Very Challenging (for experienced trekkers)",
      season: "May–June, September",
      highlights:
        "Remote high Himalayas, 11 mountain passes, glaciers, rare flora and fauna",
      accommodation: "Tented camps only (very basic, self-contained)",
      icon: "❄️",
    },
    {
      id: 5,
      title: "Bumthang Cultural Trek",
      duration: "4–6 days",
      difficulty: "Moderate",
      season: "March–May, September–November",
      highlights:
        "Temples, monasteries, scenic valleys, sacred lakes, traditional villages",
      accommodation: "Guesthouses, homestays, or small lodges",
      icon: "🏯",
    },
    {
      id: 6,
      title: "Laya Gasa Trek",
      duration: "10–12 days",
      difficulty: "Challenging",
      season: "May–October",
      highlights:
        "Tibetan-influenced villages, hot springs, panoramic Himalayan views",
      accommodation: "Tented camps, basic mountain lodges",
      icon: "🏕️",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Hero Header */}
        <header className="py-16 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Trekkings in <span className="text-[#063b1a]">Bhutan</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Bhutan offers an incredible variety of treks, from easy hikes to
            challenging high-altitude adventures. Each trek combines{" "}
            <span className="text-[#063b1a] font-semibold">
              breathtaking scenery, cultural experiences, and authentic local
              encounters
            </span>
          </p>
        </header>

        {/* Trekking Cards Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((trek) => (
              <div
                key={trek.id}
                className="group flex flex-col bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl">{trek.icon}</span>
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        trek.difficulty.includes("Challenging")
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-[#063b1a]"
                      }`}
                    >
                      {trek.difficulty}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#063b1a] transition-colors">
                    {trek.title}
                  </h2>

                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-400 uppercase text-[10px] w-16">
                        Duration
                      </span>
                      <span className="bg-gray-50 px-3 py-1 rounded-md font-medium">
                        {trek.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-400 uppercase text-[10px] w-16">
                        Best Season
                      </span>
                      <span className="font-medium">{trek.season}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-50">
                      <p className="leading-relaxed">
                        <strong className="text-gray-900 block mb-1 uppercase text-[10px] tracking-widest">
                          Highlights
                        </strong>
                        {trek.highlights}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-8 bg-gray-50/50 border-t border-gray-50">
                  <p className="text-xs italic text-gray-500 mb-4">
                    <strong>Accommodation:</strong> {trek.accommodation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="bg-[#063b1a] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">
                Tips for Trekkers in Bhutan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    text: "Minimum 1 guide required (mandatory for all treks)",
                  },
                  { text: "Permit required for most regions" },
                  {
                    text: "Carry warm clothing, good hiking shoes, and trekking poles",
                  },
                  { text: "Respect local culture and environment" },
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm"
                  >
                    <span className="text-xl">🏔️</span>
                    <p className="text-lg text-green-50">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </section>
      </div>
    </>
  );
};
export default TreksPage;
