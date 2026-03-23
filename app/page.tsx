import Image from "next/image";
import Navbar from "./components/navbar";
import "./local.css";
import { CheckCircle2 } from "lucide-react";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page-div">
        <div className="home-page-image-div">
          <img
            src="/Home-page-image.png"
            alt="Home Page Image"
            className="home-page-image h-64 w-64 rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl hover:brightness-110"
          />
        </div>
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
        <div style={{ height: "10vh", width: "100vw" }} />
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Why choose <span className="text-[#063b1a]">Bhutan?</span>
            </h1>
            <div className="w-20 h-1 bg-[#063b1a] mt-4 rounded-full" />{" "}
            {/* Premium accent line */}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-2lx-solid">
            {/* Text Content */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                Pristine Natural <br className="hidden md:block" /> Beauty
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience untouched Himalayan landscapes, fresh mountain air,
                and breathtaking scenery preserved in its purest form.
              </p>
            </div>

            {/* Image Grid / Carousel */}
            <div className="lg:w-2/3">
              {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
              <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                {/* Image 1 */}
                <div className="min-w-[85%] md:min-w-full snap-center group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      src="/Prestine1.png"
                      alt="Bhutan Landscape"
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Image 2 */}
                <div className="min-w-[85%] md:min-w-full snap-center group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      src="/Prestine2.png"
                      alt="Bhutan Mountains"
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Image 3 */}
                <div className="min-w-[85%] md:min-w-full snap-center group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      src="/Prestine3.png"
                      alt="Bhutan Scenery"
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Mobile hint: Only shows on small screens */}
              <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                Swipe to explore →
              </p>
            </div>
          </div>
        </section>
        <div style={{ height: "10vh", width: "100vw" }} />
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Container with a subtle background glow to match the 'spiritual' theme */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Text Content Area */}
              <div className="lg:w-1/3 z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Living Spiritual Heritage
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Discover a deeply rooted culture where ancient traditions,
                  sacred rituals, and peaceful values shape everyday life.
                </p>

                {/* Optional Decorative Quote */}
                <p className="mt-6 text-[#063b1a] italic font-medium border-l-2 border-[#063b1a]/20 pl-4">
                  "Where every breath is a prayer and every mountain is sacred."
                </p>
              </div>

              <div className="lg:w-2/3">
                {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {/* Image 1 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Spirit1.png"
                        alt="Bhutan Landscape"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Spirit2.png"
                        alt="Bhutan Mountains"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Spirit3.png"
                        alt="Bhutan Scenery"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Mobile hint: Only shows on small screens */}
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>

              {/* Subtle background decoration (A soft green circle in the corner) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
        <div style={{ height: "10vh", width: "100vw" }} />
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Container with a subtle background glow to match the 'spiritual' theme */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Text Content Area */}
              <div className="lg:w-1/3 z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Vibrant Cultural Festivals
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Witness colorful celebrations filled with traditional music,
                  masked dances, and joyful community spirit
                </p>
              </div>

              <div className="lg:w-2/3">
                {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {/* Image 1 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Culture1.png"
                        alt="Bhutan Landscape"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Culture2.png"
                        alt="Bhutan Mountains"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Culture3.png"
                        alt="Bhutan Scenery"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Mobile hint: Only shows on small screens */}
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>

              {/* Subtle background decoration (A soft green circle in the corner) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Container with a subtle background glow to match the 'spiritual' theme */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Text Content Area */}
              <div className="lg:w-1/3 z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Safe & Peaceful Destination
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Travel with confidence in one of the world’s most serene and
                  welcoming environments.
                </p>
              </div>

              <div className="lg:w-2/3">
                {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {/* Image 1 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Safe1.png"
                        alt="Bhutan Landscape"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Safe2.png"
                        alt="Bhutan Mountains"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Safe3.png"
                        alt="Bhutan Scenery"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Mobile hint: Only shows on small screens */}
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>

              {/* Subtle background decoration (A soft green circle in the corner) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Container with a subtle background glow to match the 'spiritual' theme */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Text Content Area */}
              <div className="lg:w-1/3 z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Sustainable & Responsible Tourism
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore a nation committed to environmental protection and
                  mindful travel experiences.
                </p>
              </div>

              <div className="lg:w-2/3">
                {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {/* Image 1 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Sustain1.png"
                        alt="Bhutan Landscape"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Sustain2.png"
                        alt="Bhutan Mountains"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Sustain3.png"
                        alt="Bhutan Scenery"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Mobile hint: Only shows on small screens */}
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>

              {/* Subtle background decoration (A soft green circle in the corner) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Container with a subtle background glow to match the 'spiritual' theme */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Text Content Area */}
              <div className="lg:w-1/3 z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-400 rounded-full inline-block"></span>
                  Exclusive Travel Experience
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Enjoy uncrowded destinations, personalized services, and
                  meaningful journeys crafted with care.
                </p>
              </div>

              <div className="lg:w-2/3">
                {/* On Mobile: Horizontal Scroll | On Desktop: Grid */}
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-3 md:overflow-visible">
                  {/* Image 1 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Travel1.png"
                        alt="Bhutan Landscape"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Travel2.png"
                        alt="Bhutan Mountains"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="min-w-[85%] md:min-w-full snap-center group">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="/Travel3.png"
                        alt="Bhutan Scenery"
                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Mobile hint: Only shows on small screens */}
                <p className="text-xs text-gray-400 mt-2 md:hidden italic">
                  Swipe to explore →
                </p>
              </div>

              {/* Subtle background decoration (A soft green circle in the corner) */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#063b1a]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 max-w-7xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Travel Information for Visitors to Bhutan
              <span className="block text-lg md:text-xl text-[#063b1a] mt-2 font-medium bg-green-50 inline-block px-4 py-1 rounded-full border border-green-100">
                (Current Rules – 2026)
              </span>
            </h1>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Visa & Entry */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl bg-blue-50 p-3 rounded-2xl">🛂</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Visa & Entry
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Most foreigners need visa approval before arrival.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Indians, Bangladeshis & Maldivians need an Entry Permit (no
                  visa).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Passport must be valid at least 6 months.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Apply online via the Department of Immigration or through a
                  tour operator.
                </li>
              </ul>
            </div>

            {/* Card 2: SDF */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl bg-green-50 p-3 rounded-2xl">💰</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Sustainable Development Fee (SDF)
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  International tourists: USD 100 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Indian nationals: INR 1,200 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Children discounts apply.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  SDF is separate from hotel, guide, transport, and visa fees.
                </li>
              </ul>
            </div>

            {/* Card 3: Entry Points */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl bg-orange-50 p-3 rounded-2xl">
                  ✈️
                </span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Entry Points
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Main airport: Paro International Airport
                </li>
                <li className="flex items-start gap-3 flex-col w-full">
                  <div className="flex items-start gap-3">
                    <span className="text-[#063b1a] mt-1.5">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
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
                        className="bg-gray-50 px-3 py-1 rounded-lg text-sm border border-gray-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 4: Travel Rules */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl bg-purple-50 p-3 rounded-2xl">
                  🧭
                </span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Travel Rules
                </h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Independent travel allowed.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Licensed guide required for some restricted areas.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </span>
                  Popular places like Thimphu and Paro are easily accessible.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="px-6 py-16 max-w-5xl mx-auto text-center">
          <div className="relative overflow-hidden bg-[#063b1a] rounded-[2.5rem] p-10 md:p-20 shadow-2xl group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              {/* Subtle radial gradient for depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
                READY TO EXPLORE?
              </h2>

              <p className="text-green-100/80 text-lg md:text-xl mb-10 max-w-md mx-auto leading-relaxed">
                Your journey to the Land of the Thunder Dragon begins with a
                single step. Let us craft your perfect Bhutanese escape.
              </p>

              <button className="relative overflow-hidden bg-white text-[#063b1a] px-10 py-4 rounded-full font-bold text-lg md:text-xl shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-50 active:scale-95 flex items-center gap-3">
                PLAN YOUR TRIP
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>

            {/* Bottom Corner Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
