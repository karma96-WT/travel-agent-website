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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Image Section - Fixed height 500px */}
            <div className="lg:w-[55%] border-2 border-black rounded-2xl overflow-hidden">
              <img
                src="Prestine Natural Beauty.jpg"
                alt="Pristine Natural Beauty Photo"
                className="w-full h-[500px] object-cover rounded-2xl border-black"
              />
            </div>

            {/* Text Section - Will only be as tall as its content */}
            <div className="lg:w-[45%] border-2 border-black rounded-2xl p-5 flex flex-col">
              <h1 className="text-center font-bold text-green-900 text-3xl mb-3 border-b-2 border-green-200 pb-2">
                Prestine Natural Beauty
              </h1>
              <p className="text-green-900 text-sm leading-relaxed">
                Bhutan, the Land of the Thunder Dragon nestled in the eastern
                Himalayas, epitomizes pristine natural beauty with its
                snow-capped peaks soaring dramatically against clear blue skies,
                lush emerald valleys carved by ancient glaciers, and dense
                forests blanketing over 70% of its land, preserved through a
                constitutional mandate requiring at least 60% forest cover. This
                untouched kingdom harbors extraordinary biodiversity across
                diverse ecosystems—from subtropical lowlands to high alpine
                zones—protecting rare species like the elusive snow leopard, the
                unique national animal takin, playful red pandas, majestic
                tigers, and iconic black-necked cranes, all thriving in vast
                protected areas that span more than half the country, where
                crystal-clear rivers, glacial lakes, and vibrant
                rhododendron-filled woodlands create a profound sense of harmony
                and purity. Iconic landmarks such as the breathtaking Taktsang
                Monastery (Tiger&#39;s Nest), dramatically perched on sheer
                cliffs amid misty forests, perfectly blend spiritual heritage
                with majestic landscapes of terraced rice fields, traditional
                farmhouses, and serene trails, offering visitors a rare,
                restorative experience of living in balance with nature&#39;s
                timeless splendor.
              </p>
            </div>
          </div>
        </section>

        {/* Gross National Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center p-6 z-20 mt-[-100px]">
          {/* Text Section - Will only be as tall as its content */}
          <div className="lg:w-[45%] border-2 border-black rounded-2xl p-5 flex flex-col relative bg-white shadow-xl">
            <h1 className="text-center font-bold text-green-900 text-3xl mb-3 border-b-2 border-green-200 pb-2">
              Gross National Happiness
            </h1>
            <p className="text-green-900 text-sm leading-relaxed">
              Gross National Happiness (GNH) is Bhutan&#39;s unique guiding
              philosophy for development, introduced in the early 1970s by the
              Fourth King, Jigme Singye Wangchuck, who famously declared that
              Gross National Happiness is more important than Gross Domestic
              Product. Instead of prioritizing economic growth alone, GNH
              promotes holistic well-being by balancing material progress with
              spiritual, cultural, and environmental values, rooted in Buddhist
              principles and the idea that the government&#39;s purpose is to
              foster citizens&#39; happiness. It rests on *four pillars*:
              sustainable and equitable socio-economic development, preservation
              and promotion of culture, conservation of the environment (with
              Bhutan maintaining over 60% forest cover as constitutionally
              mandated), and good governance. These pillars expand into nine
              domains—including psychological well-being, health, education,
              community vitality, and ecological resilience—measured through the
              GNH Index by the Centre for Bhutan &amp; GNH Studies, which guides
              policies to enhance collective happiness and sustainability rather
              than individual wealth.
            </p>
          </div>
          {/* Image Section - Fixed height 500px */}
          <div className="lg:w-[55%] border-2 border-black rounded-2xl overflow-hidden">
            <img
              src="GNH.JPG"
              alt="GNH Photo"
              className="w-full h-[500px] object-cover rounded-2xl border-black"
            />
          </div>
        </div>

        {/* Sustainable and resposnible tourism */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center p-6 z-20 mt-[-75px]">
          {/* Image Section - Fixed height 500px */}
          <div className="lg:w-[55%] border-2 border-black rounded-2xl overflow-hidden">
            <img
              src="Sustainable and....jpg"
              alt="Sustainable and Responsible Tourism Photo"
              className="w-full h-[500px] object-cover rounded-2xl border-black"
            />
          </div>
          {/* Text Section - Will only be as tall as its content */}
          <div className="lg:w-[45%] border-2 border-black rounded-2xl p-5 flex flex-col relative bg-white shadow-xl">
            <h1 className="text-center font-bold text-green-900 text-3xl mb-3 border-b-2 border-green-200 pb-2">
              Sustainable and Responsible Tourism
            </h1>
            <p className="text-green-900 text-sm leading-relaxed">
              Bhutan pioneered sustainable and responsible tourism through its
              renowned *&quot;High Value, Low Impact&quot;* (sometimes phrased
              as High Value, Low Volume) policy, introduced since the 1970s and
              guided by the principle of Gross National Happiness. This approach
              prioritizes quality over quantity by limiting visitor numbers to
              protect the kingdom&#39;s pristine environment, rich cultural
              heritage, and social fabric while generating meaningful economic
              benefits. All international tourists pay a daily *Sustainable
              Development Fee (SDF)* of USD 100 per person (currently discounted
              until 2027), which funds conservation, infrastructure, cultural
              preservation, and community development. Visitors must travel with
              licensed operators, ensuring guided, low-impact experiences that
              foster authentic engagement rather than mass tourism. This model
              has earned global acclaim for successfully balancing tourism with
              long-term sustainability.
            </p>
          </div>
        </div>

        {/* Sustainable and resposnible tourism */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center p-6 z-20 mt-[-75px]">
          {/* Text Section - Will only be as tall as its content */}
          <div className="lg:w-[45%] border-2 border-black rounded-2xl p-5 flex flex-col relative bg-white shadow-xl">
            <h1 className="text-center font-bold text-green-900 text-3xl mb-3 border-b-2 border-green-200 pb-2">
              Living Spiritual Heritage
            </h1>
            <p className="text-green-900 text-sm leading-relaxed">
              Bhutan proudly preserves its living spiritual heritage, where
              Vajrayana Buddhism—the tantric form of Mahayana Buddhism—remains
              vibrantly alive and deeply integrated into every facet of daily
              life, governance, art, architecture, and community. Often
              described as a &quot;living museum of Buddhist heritage,&quot; the
              kingdom is dotted with thousands of ancient temples, chortens
              (stupas), meditation retreats, and majestic dzongs
              (fortress-monasteries) that serve as both religious centers and
              symbols of cultural continuity. Iconic sites like *Paro Taktsang*
              (Tiger&#39;s Nest Monastery), dramatically perched on a sheer
              cliff and revered as a sacred pilgrimage spot blessed by Guru
              Rinpoche (Padmasambhava), embody profound spiritual power,
              offering visitors a chance for inner purification, mindfulness,
              and connection to enlightenment. Colorful *tshechu* festivals,
              featuring masked dances, sacred rituals, and the unveiling of
              giant thangkha (thongdroel), bring communities together in joyous
              celebration of Buddhist teachings, compassion, and harmony with
              nature. In Bhutan, spirituality is not confined to
              monasteries—it&#39;s a guiding philosophy that prioritizes Gross
              National Happiness, non-violence, tolerance, and respect for the
              environment—inviting travelers to experience an authentic,
              unbroken tradition that nurtures the soul amid the breathtaking
              Himalayan landscapes.
            </p>
          </div>
          {/* Image Section - Fixed height 500px */}
          <div className="lg:w-[55%] border-2 border-black rounded-2xl overflow-hidden">
            <img
              src="Living heritage....jpg"
              alt="Living Heritage Photo"
              className="w-full h-[500px] object-cover rounded-2xl border-black"
            />
          </div>
        </div>

        <div style={{ height: "8vh", width: "100%" }} className="bg-white" />

        {/* Travel Information Section */}
        {/* Tips Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto bg-gradient-to-b from-white to-green-50">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Tips for <span className="text-[#063b1a]">Visiting Bhutan</span>
            </h2>
            <div className="w-24 h-1 bg-[#063b1a] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Essential tips to make your Bhutan journey unforgettable
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Plan Your Trip Early
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Secure flights, accommodation, and permits in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Keep Your Documents Ready
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Carry a valid passport and required travel documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Prepare for High Altitude
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Stay hydrated and take time to acclimatize.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Respect Local Culture
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dress modestly and follow local customs at religious sites.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Pack Smart
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bring warm clothing, comfortable shoes, and weather
                    essentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Experience Bhutanese Cuisine
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Try authentic local dishes and traditional drinks.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 7 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Travel Responsibly
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Protect nature and support sustainable tourism.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 8 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <div className="bg-[#063b1a]/10 rounded-full p-3 group-hover:bg-[#063b1a] transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#063b1a] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#063b1a] transition-colors">
                    Embrace Bhutan's Happiness
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Slow down, connect with locals, and enjoy the unique
                    culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
