"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState, useEffect } from "react";

const TreksPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const weathers = [
    {
      id: 1,
      title: "Spring – March to May",
      img: "/spring.png",
      description:
        "Spring is one of the most beautiful seasons to visit Bhutan. The weather is generally pleasant, with comfortable temperatures in many valleys and clear views of the surrounding mountains. The countryside becomes vibrant with blooming flowers, including rhododendrons, while forests and hillsides turn green. Spring is particularly suitable for sightseeing, hiking, cultural tours, photography, and exploring Bhutan's natural landscapes.",
    },
    {
      id: 2,
      title: "Summer – June to August",
      img: "/summer.png",
      description:
        "Summer coincides with the monsoon season in Bhutan. The weather is generally warm and humid in the lower valleys, with regular rainfall, particularly during the monsoon months. Rain can occasionally affect road conditions and mountain visibility, but it also brings lush greenery and fresh landscapes. Travelers visiting during this period should carry rain protection and allow some flexibility in their travel schedules. Despite the rain, summer can be an excellent time to experience Bhutan's peaceful atmosphere, green valleys, cultural attractions, and fewer crowds.",
    },
    {
      id: 3,
      title: "Autumn – September to November",
      img: "/autumn.png",
      description:
        "Autumn is widely considered one of the most favorable seasons for traveling in Bhutan. The monsoon gradually ends, bringing clearer skies, fresh mountain air, and excellent visibility. Temperatures are generally comfortable, making this season ideal for sightseeing, trekking, hiking, photography, cultural tours, and outdoor activities. The beautiful mountain scenery combined with traditional festivals held in different parts of the country makes autumn a popular period for visitors.",
    },
    {
      id: 4,
      title: "Winter – December to February",
      img: "/winter.png",
      description:
        "Winter brings cold and generally dry conditions, particularly in the higher valleys and mountainous regions. Days can be sunny and pleasant, while temperatures may drop significantly during the night. Snowfall is possible at higher elevations and mountain passes, creating spectacular Himalayan scenery. Lower-altitude areas can remain relatively comfortable during the daytime. Winter is an excellent time for travelers interested in clear mountain views, cultural sightseeing, photography, and experiencing the peaceful side of Bhutan. Phobjikha Valley is also particularly attractive during this season, when the valley becomes a winter habitat for the endangered black-necked cranes.",
    },
  ];

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      {/* OLD (Broken) */}
      <div className=" bg-cover bg-center bg-no-repeat h-70 md:h-[80vh] lg:h-[80vh] w-full">
        <img
          src="/travel info bg.png"
          alt="Taktshang image"
          className="h-70 lg:h-[80vh] w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row bg-white pt-1 text-black">
        <section className="w-full lg:w-[30%] p-10">
          <span className=" text-orange-500">SECTION 01</span>
          <h1 className="text-2xl ">Sustainable Development Fee (SDF)</h1>
        </section>
        <section className="w-full lg:w-[70%] p-10">
          <p className="text-gray-700 text-[16px] text-justify">
            <span className="text-black block text-[18px] mb-5">
              The Sustainable Development Fee (SDF) is a mandatory daily charge
              supporting Bhutan's environmental conservation, cultural
              preservation, free healthcare, and education.
            </span>
            As of 2026 (and valid through at least August 2027 under current
            policy), it is USD 100 per person per night for most international
            tourists (children 6–12 pay USD 50; under 6 are exempt). Indian
            nationals pay INR 1,200 per person per night (with child discounts).
            The SDF is paid in advance during visa/permit processing and is
            separate from accommodation, meals, or tour costs—it funds
            sustainable development initiatives under Bhutan's high-value,
            low-volume tourism model.
          </p>
        </section>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row bg-white pt-1 text-black">
        <section className="w-full lg:w-[30%] p-10">
          <span className=" text-orange-500">SECTION 02</span>
          <h1 className="text-2xl ">Visa and entry</h1>
        </section>
        <section className="w-full lg:w-[70%] p-10">
          <p className="text-gray-700 text-[16px] text-justify">
            <span className="text-black block text-[18px] mb-5">
              All international visitors (except nationals of India, Bangladesh,
              and Maldives) require a visa in advance, processed online through
              the official Department of Immigration website or a licensed
              Bhutanese tour operator.
            </span>
            A one-time visa fee of USD 40 applies, along with required documents
            like a passport copy (valid for at least six months), photo, and
            travel insurance. Visa clearance is needed before booking flights,
            and the visa is stamped upon arrival (typically at Paro Airport).
            Indian nationals enter with an entry permit (often arranged online
            or at the border). Travelers must book through a licensed operator
            or guide, as independent travel is not permitted for most
            nationalities.
          </p>
        </section>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row bg-white pt-1 text-black">
        <section className="w-[30%] p-10">
          <span className=" text-orange-500">SECTION 03</span>
          <h1 className="text-2xl ">Food</h1>
        </section>
        <section className="w-full lg:w-[70%] p-10">
          <p className="text-gray-700 text-[16px] text-justify">
            <span className="text-black block text-[18px] mb-5">
              Bhutanese cuisine is hearty, flavorful, and heavily features
              chilies as a key ingredient. The national dish is ema datshi
              (green chilies cooked in a creamy cheese sauce), often served with
              red rice, a nutritious Bhutanese staple.{" "}
            </span>
            Other popular dishes include kewa datshi (potatoes with cheese),
            jasha maru (spicy chicken stew), and various meat preparations like
            dried beef or pork with chilies. Meals emphasize fresh vegetables,
            dairy (especially local cheese), and bold spices. Most tourist
            accommodations offer a mix of Bhutanese and international options,
            with vegetarian choices widely available. The food is generally
            spicy but can be adjusted for milder tastes.
          </p>
        </section>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row bg-white pt-1 text-black">
        <section className="w-full lg:w-[30%] p-10">
          <span className=" text-orange-500">SECTION 04</span>
          <h1 className="text-2xl ">Dress code</h1>
        </section>
        <section className="w-full lg:w-[70%] p-10">
          <p className="text-gray-700 text-[16px] text-justify">
            <span className="text-black block text-[18px] mb-5">
              Bhutan emphasizes modesty and respect, especially at religious
              sites like dzongs (fortresses) and temples. Visitors should wear
              clothing that covers shoulders and knees—no shorts, short skirts,
              sleeveless tops, or revealing outfits in these areas.{" "}
            </span>
            Long pants or skirts with full-sleeve shirts are ideal. Hats should
            be removed inside sacred spaces, and shoes are often taken off
            (socks are helpful). In everyday settings like towns or hikes,
            casual modern clothing is acceptable, but modest attire shows
            cultural respect. Bhutanese people commonly wear traditional dress
            (gho for men, kira for women) in formal or official contexts
          </p>
        </section>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row bg-white pt-1 text-black">
        <section className="w-full lg:w-[30%] p-10">
          <span className=" text-orange-500">SECTION 05</span>
          <h1 className="text-2xl ">Weather in Bhutan</h1>
        </section>
        <section className="w-full lg:w-[70%] p-10">
          <p className="text-gray-700 text-[16px] text-justify">
            <span className="text-black block text-[18px] mb-5">
              Bhutan experiences a diverse climate throughout the year, largely
              influenced by its varied altitude and mountainous landscape.{" "}
            </span>
            From the subtropical lowlands in the south to the cool valleys and
            high Himalayan mountains in the north, the weather can change
            significantly from one region to another. This diversity makes
            Bhutan a year-round destination, with each season offering its own
            unique beauty and travel experiences. Travelers are advised to
            consider the season, destination, and planned activities when
            preparing for their journey.
          </p>
        </section>
      </div>
      <div className="flex flex-col lg:flex-row overflow-x-auto md:grid md:grid-cols-3 gap-8 bg-white p-6">
        {weathers.map((item) => (
          <section
            key={item.id}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-0 flex-1 flex flex-col"
          >
            <Image
              src={item.img}
              alt={item.title || "Weather Image"}
              width={800}
              height={500}
              className="w-full h-[40vh] object-cover rounded-xl"
            />
            <h1 className="text-orange-500 text-2xl font-bold mt-4 mb-2">
              {item.title}
            </h1>
            <p className="text-justify text-black text-sm leading-relaxed">
              {item.description}
            </p>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default TreksPage;
