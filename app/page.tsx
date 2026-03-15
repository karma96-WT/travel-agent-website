import Image from "next/image";
import Navbar from "./components/navbar";
import "./local.css";

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
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Most foreigners need visa approval before arrival.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Indians, Bangladeshis & Maldivians need an Entry Permit (no
                  visa).
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Passport must be valid at least 6 months.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
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
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  International tourists: USD 100 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Indian nationals: INR 1,200 per night.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Children discounts apply.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
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
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Main airport: Paro International Airport
                </li>
                <li className="flex items-start gap-3 flex-col w-full">
                  <div className="flex items-start gap-3">
                    <span className="text-[#063b1a] mt-1.5">•</span>
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
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Independent travel allowed.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
                  Licensed guide required for some restricted areas.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#063b1a] mt-1.5">•</span>
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
        <section className="px-4 py-8 max-w-6xl mx-auto">
          <div className="bg-white border-2 border-gray-100 shadow-sm rounded-[2rem] p-6 md:p-10">
            {/* Main Wrapper: flex-row ensures they stay side-by-side even on tiny screens */}
            <div className="flex flex-row flex-wrap justify-around items-start gap-y-8 md:gap-y-0">
              {/* LEFT: Contact Section */}
              <div className="flex flex-col items-center md:items-start space-y-4 w-1/2 md:w-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                  CONTACT US
                </h2>
                <div className="flex items-center gap-4">
                  {/* WhatsApp Icon */}
                  <a
                    href="https://wa.me/+97517919281"
                    target="_blank"
                    className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all shadow-sm"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  {/* Email Icon */}
                  <a
                    href="mailto:acharyasomnath123@gmail.com"
                    className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* RIGHT: Follow Section */}
              <div className="flex flex-col items-center md:items-end space-y-4 w-1/2 md:w-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                  FOLLOW US
                </h2>
                <div className="flex items-center gap-4">
                  {/* Facebook Icon */}
                  <a
                    href="Facebook: https://www.facebook.com/share/1CBUMTBnXW/"
                    className="p-3 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/som_nath_lyripop?igsh=MWpnajA0NndtbGI1"
                    className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.585.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
