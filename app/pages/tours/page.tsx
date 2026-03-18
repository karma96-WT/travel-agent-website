import React from "react";
import Navbar from "@/app/components/navbar";

const BhutanToursPage = () => {
  const tours = [
    {
      id: 1,
      title: "3 Days / 2 Nights – Bhutan Short Escape",
      icon: "⚡",
      color: "bg-emerald-50",
      textColor: "text-emerald-700",
      itinerary: [
        {
          day: "Day 1",
          activity:
            "Arrival & Capital Exploration: Arrive at Paro International Airport and transfer to Thimphu. Visit Buddha Dordenma, Memorial Chorten, and explore local markets. Overnight in Thimphu.",
        },
        {
          day: "Day 2",
          activity:
            "Thimphu – Paro Sightseeing: Drive to Paro. Visit Rinpung Dzong and National Museum. Evening leisure walk in Paro town. Overnight in Paro.",
        },
        {
          day: "Day 3",
          activity: "Departure: Transfer to airport for departure.",
        },
      ],
    },
    {
      id: 2,
      title: "5 Days / 4 Nights – Cultural Discovery",
      icon: "🏞",
      color: "bg-emerald-50",
      textColor: "text-emerald-700",
      itinerary: [
        { day: "Day 1", activity: "Arrival in Paro – Transfer to Thimphu" },
        {
          day: "Day 2",
          activity:
            "Thimphu sightseeing (Buddha Dordenma, Tashichho Dzong, Folk Heritage Museum)",
        },
        {
          day: "Day 3",
          activity: "Drive to Punakha via Dochula Pass – Visit Punakha Dzong",
        },
        { day: "Day 4", activity: "Paro – Hike to Tiger’s Nest Monastery" },
        { day: "Day 5", activity: "Departure" },
      ],
    },
    {
      id: 3,
      title: "7 Days / 6 Nights – Bhutan Highlights Tour",
      icon: "🏔",
      color: "bg-emerald-50",
      textColor: "text-emerald-700",
      itinerary: [
        { day: "Day 1", activity: "Arrival Paro – Thimphu" },
        { day: "Day 2", activity: "Thimphu full-day exploration" },
        { day: "Day 3", activity: "Thimphu to Punakha" },
        { day: "Day 4", activity: "Punakha to Paro" },
        { day: "Day 5", activity: "Hike to Tiger’s Nest Monastery" },
        {
          day: "Day 6",
          activity: "Excursion to Chele La Pass & local village visit",
        },
        { day: "Day 7", activity: "Departure" },
      ],
    },
    {
      id: 4,
      title: "10 Days / 9 Nights – Grand Bhutan Experience",
      icon: "🌸",
      color: "bg-emerald-50",
      textColor: "text-emerald-700",
      itinerary: [
        { day: "Day 1–2", activity: "Paro & Thimphu exploration" },
        { day: "Day 3–4", activity: "Punakha Valley" },
        {
          day: "Day 5–6",
          activity: "Phobjikha Valley (nature & black-necked crane habitat)",
        },
        { day: "Day 7–8", activity: "Bumthang cultural sites" },
        { day: "Day 9", activity: "Return to Paro" },
        { day: "Day 10", activity: "Departure" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Exclusive{" "}
              <span className="text-[#063b1a]">Tour Packages</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the magic of Bhutan through our carefully curated
              itineraries, designed to offer authentic cultural experiences and
              breathtaking adventures.
            </p>
            <div className="w-24 h-1.5 bg-[#063b1a] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className={`p-8 ${tour.color} border-b border-gray-100`}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl">{tour.icon}</span>
                    <h2 className={`text-2xl font-bold ${tour.textColor}`}>
                      {tour.title}
                    </h2>
                  </div>
                </div>

                {/* Itinerary List */}
                <div className="p-8 flex-grow">
                  <div className="space-y-6">
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#063b1a] mt-2"></div>
                          {index !== tour.itinerary.length - 1 && (
                            <div className="w-px h-full bg-gray-200 mt-2"></div>
                          )}
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-[#063b1a] uppercase tracking-wider">
                            {item.day}
                          </span>
                          <p className="text-gray-600 leading-relaxed mt-1">
                            {item.activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BhutanToursPage;
