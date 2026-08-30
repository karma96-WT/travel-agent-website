"use client";
import React from "react";
import { MapPin, Calendar, Leaf, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { useState, useEffect } from "react";

const BhutanBlog = () => {
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
  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <article className="bg-white min-h-screen ">
        {/* 1. Blog Hero Header */}
        <header className="relative h-[40vh] lg:h-[80vh] pt-25 flex items-center justify-center overflow-hidden w-full bg-black">
          {/* 1. Stretched image */}
          <img
            src="/banner-photo.jpg"
            alt="Bhutan Banner"
            className="absolute inset-0 w-full h-full object-fill z-10"
          />

          {/* 2. Dark overlay to make text visible (z-15 sits above image, below text) */}
          <div className="absolute inset-0 bg-black/50 z-15" />

          {/* 3. Your content layer */}
          <div className="relative z-20 text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black text-gray-200 leading-tight mb-6">
              Bhutan: A Journey into the Kingdom of Happiness
            </h1>
            <div className="text-gray-300 flex flex-row justify-between">
              <h1>23 August, 2026</h1>
              <h1>5 Min Read</h1>
            </div>
          </div>
        </header>

        {/* 2. Main Article Body */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-black text-justify mb-5">
            Nestled in the eastern Himalayas, Bhutan is a remarkable destination
            where breathtaking mountains, ancient traditions, peaceful
            monasteries, and warm hospitality come together to create an
            unforgettable travel experience. Known around the world as the “Land
            of the Thunder Dragon,” Bhutan offers visitors something different
            from ordinary holiday destinations. Here, travel is not only about
            visiting famous places or taking beautiful photographs; it is also
            about experiencing a unique culture, connecting with nature, meeting
            local communities, and discovering a slower and more meaningful way
            of life. From the moment travelers arrive, Bhutan's peaceful
            atmosphere and spectacular landscapes create a feeling that is
            difficult to describe but easy to remember.
          </p>
          <p className="text-black text-justify mb-5">
            Bhutan is a country where ancient traditions continue to play an
            important role in everyday life. Colorful festivals, traditional
            architecture, Buddhist monasteries, local handicrafts, traditional
            clothing, and centuries-old customs can be seen throughout the
            country. Visitors have the opportunity to explore historic dzongs,
            visit peaceful temples, observe traditional mask dances, and learn
            about Bhutanese beliefs and culture. The country's architecture is
            particularly distinctive, with beautifully decorated buildings
            featuring traditional Bhutanese designs. Places such as Punakha
            Dzong, Paro Rinpung Dzong, and Trongsa Dzong provide travelers with
            an opportunity to appreciate Bhutan's rich history while enjoying
            stunning natural surroundings.
          </p>
          <p className="text-black text-justify mb-5">
            For nature lovers and adventure seekers, Bhutan provides an
            incredible variety of experiences. The country is covered with
            forests, valleys, rivers, high mountain passes, and beautiful
            Himalayan landscapes. Travelers can enjoy scenic hikes, nature
            walks, cycling, birdwatching, camping, rafting, and trekking. One of
            the most famous hiking experiences is the journey to Taktsang
            Monastery, commonly known as Tiger’s Nest. Located dramatically on a
            cliff above the Paro Valley, the monastery is one of Bhutan's most
            iconic landmarks. The hike combines physical adventure with cultural
            and spiritual discovery, making it one of the most memorable
            experiences for many visitors.
          </p>
          <p className="text-black text-justify mb-5">
            Bhutan's valleys each have their own character and charm. Thimphu,
            the capital city, combines traditional Bhutanese culture with modern
            development and offers attractions such as Buddha Dordenma, Memorial
            Chorten, Tashichho Dzong, and local markets. Punakha is famous for
            its beautiful valley, warm climate, traditional villages, and
            magnificent Punakha Dzong located between two rivers. Paro is home
            to the country's international airport and offers historic sites,
            temples, museums, and spectacular mountain scenery. Further east,
            travelers can discover the cultural richness of Bumthang, the
            historic landscapes of Trongsa, and the peaceful beauty of Gangtey
            and Phobjikha Valley, a region especially known for its black-necked
            cranes during the winter season.
          </p>
          <p className="text-black text-justify mb-5">
            Bhutan is also an excellent destination for travelers interested in
            food and local traditions. Bhutanese cuisine is simple, distinctive,
            and full of character. Ema Datshi, a traditional dish made with
            chili and cheese, is one of the country's best-known foods. Visitors
            can also experience dishes prepared with red rice, buckwheat,
            vegetables, meat, and locally grown ingredients. A traditional
            Bhutanese meal can become more than just a dining experience because
            it provides an opportunity to understand local lifestyles and
            hospitality. Travelers who choose to stay in traditional farmhouses
            may also experience homemade meals, local customs, and the warmth of
            rural Bhutanese families.
          </p>
          <p className="text-black text-justify mb-5">
            One of the most special aspects of traveling in Bhutan is the
            opportunity to interact with local communities. Beyond the
            well-known tourist attractions, rural villages offer a glimpse into
            the everyday life of the Bhutanese people. Visitors can walk through
            traditional villages, meet farmers, learn about local agriculture,
            visit handicraft workshops, and experience traditional lifestyles.
            Homestays and community-based experiences can make a journey even
            more meaningful by allowing travelers to spend time with local
            families and understand Bhutan beyond its famous landmarks.
          </p>
          <p className="text-black text-justify mb-5">
            Bhutan is also widely recognized for its philosophy of Gross
            National Happiness, which places importance on well-being, cultural
            preservation, environmental conservation, good governance, and
            sustainable development. This philosophy has contributed to the
            country's distinctive approach to tourism. Bhutan aims to protect
            its natural environment and cultural heritage while ensuring that
            tourism provides meaningful benefits to local communities. For
            travelers, this creates an opportunity to explore a destination
            where sustainability and cultural authenticity are important parts
            of the travel experience.
          </p>
          <p className="text-black text-justify mb-5">
            Adventure is another major reason to visit Bhutan. Trekking routes
            range from relatively comfortable short hikes to challenging
            high-altitude journeys through remote Himalayan landscapes. Trekkers
            can experience forests, mountain passes, alpine meadows, traditional
            settlements, and spectacular views of the Himalayas. In addition to
            trekking, travelers can enjoy activities such as river rafting,
            mountain biking, camping, rock climbing, and scenic hiking. Each
            adventure offers a different perspective of Bhutan and allows
            visitors to experience the country's natural beauty at their own
            pace.
          </p>
          <p className="text-black text-justify mb-5">
            What makes Bhutan truly special, however, is the combination of
            nature, culture, spirituality, and hospitality found within a
            relatively small country. A traveler can spend the morning exploring
            an ancient monastery, enjoy a traditional Bhutanese lunch, walk
            through a peaceful village in the afternoon, and end the day
            surrounded by Himalayan scenery. Every journey can be customized
            according to a visitor's interests, whether they are looking for
            cultural discovery, adventure, relaxation, photography, nature,
            spiritual experiences, or a combination of everything.
          </p>
          <p className="text-black text-justify mb-5">
            At Bhutan Happiness Tours and Treks, our goal is to help travelers
            discover Bhutan in a comfortable, meaningful, and memorable way. We
            provide carefully planned travel experiences that can include
            cultural tours, adventure activities, trekking, nature exploration,
            village experiences, sightseeing, and customized journeys. Our local
            knowledge and understanding of Bhutan allow us to create experiences
            that go beyond simply visiting tourist attractions. We aim to
            introduce travelers to the culture, people, landscapes, food,
            traditions, and stories that make Bhutan unique.
          </p>
          <p className="text-black text-justify mb-5">
            A journey to Bhutan is more than a holiday; it can be an opportunity
            to slow down, reconnect with nature, discover a fascinating culture,
            and create memories that last a lifetime. Whether you dream of
            standing beneath the Himalayan mountains, hiking to Tiger’s Nest,
            exploring ancient dzongs, experiencing a colorful festival, tasting
            authentic Bhutanese cuisine, or simply enjoying the peaceful
            atmosphere of a mountain village, Bhutan has something special
            waiting for you. With its timeless traditions, spectacular
            landscapes, welcoming people, and distinctive approach to happiness
            and sustainability, Bhutan continues to inspire travelers from
            around the world to discover a different way of experiencing the
            world.
          </p>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default BhutanBlog;
