import React from "react";
import Navbar from "@/app/components/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* 1. Hero Section: CEO & Introduction */}
        <section className="relative py-16 lg:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image container with a decorative background element */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#063b1a]/10 rounded-full blur-3xl"></div>
              <img
                src="/ceoprofile.png"
                alt="Som Nath Acharya"
                className="relative z-10 w-full max-w-md rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-[3/4]"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-[#063b1a] font-bold tracking-widest text-sm mb-4">
                LEADERSHIP
              </h2>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                CEO: Som Nath Acharya
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Som Nath Acharya is a dedicated tourism professional with
                  experience working as a Cultural Guide in Bhutan.
                </p>
                <p>
                  Trained in the Tourism and Hospitality sector, he brings
                  strong knowledge of Bhutanese culture, traditions, and history
                  to every journey.
                </p>
                <p className="italic text-gray-800 font-medium border-l-4 border-[#063b1a] pl-6 py-2">
                  "With a passion for sharing the true spirit of Bhutan, he is
                  committed to providing authentic, well-organized, and
                  memorable travel experiences for every guest."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Company Background & Mission (The 'Z' Layout) */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Company Background */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Company Background</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We are a locally owned and licensed tour company based in
                  Bhutan. With years of experience in the tourism industry, our
                  team is dedicated to providing safe, comfortable, and
                  meaningful travel experiences.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Locally owned travel agent in Bhutan",
                    "Experienced and licensed tour operators",
                    "Passionate about Bhutanese culture and hospitality",
                    "Committed to sustainable tourism",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    >
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-96 w-full bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-inner">
                {/* Place for a local scenery or office image */}
                <div className="flex items-center justify-center h-full text-gray-400 italic">
                  Exploring Bhutan's Essence
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#063b1a] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Mission
                </h3>
                <p className="text-green-50/80 leading-relaxed text-lg">
                  Our mission is to deliver personalized and responsible travel
                  experiences while preserving Bhutan’s rich culture and natural
                  beauty.
                </p>
              </div>
              <div className="bg-[#063b1a] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">👁️</span> Vision
                </h3>
                <p className="text-green-50/80 leading-relaxed text-lg">
                  To become a trusted travel partner for visitors seeking
                  authentic Bhutan experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What Makes Us Different? (Icon Grid) */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              What makes us different is our attention to detail and personal
              care. We design customized itineraries based on your interests.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { label: "Customized tour packages", icon: "🗺️" },
              { label: "Friendly local guides", icon: "🤝" },
              { label: "24/7 support ", icon: "📞" },
              { label: "Transparent pricing", icon: "💎" },
              { label: "Focus on happiness & comfort", icon: "😊" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Final Quote / Call to Action */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#063b1a] to-[#0a5225] rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl relative">
            <div className="relative z-10">
              <span className="text-5xl opacity-30 block mb-6">“</span>
              <p className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
                Let us take you on a journey where happiness meets adventure.
                Discover Bhutan with us and create memories that last a
                lifetime.
              </p>
              <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
