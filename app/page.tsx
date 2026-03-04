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
            src="/Home-Page-image.png"
            alt="Home Page Image"
            className="home-page-image"
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
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h1 className="text-4xl font-bold mb-4">Why choose Bhutan?</h1>
          <hr />
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Pristine Natural Beauty
          </h2>
          <p className="text-base text-gray-600">
            Experience untouched Himalayan landscapes, fresh mountain air, and
            breathtaking scenery preserved in its purest form
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img
              src="/Prestine1.png"
              alt=""
              className="home-page-image-style"
            />
            <img
              src="/Prestine2.png"
              alt=""
              className="home-page-image-style"
            />
            <img
              src="/Prestine3.png"
              alt=""
              className="home-page-image-style"
            />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Living Spiritual Heritage
          </h2>
          <p>
            Discover a deeply rooted culture where ancient traditions, sacred
            rituals, and peaceful values shape everyday life
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Spirit1.png" alt="" className="home-page-image-style" />
            <img src="/Spirit2.png" alt="" className="home-page-image-style" />
            <img src="/Spirit3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Vibrant Cultural Festivals
          </h2>
          <p>
            Witness colorful celebrations filled with traditional music, masked
            dances, and joyful community spirit
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Culture1.png" alt="" className="home-page-image-style" />
            <img src="/Culture2.png" alt="" className="home-page-image-style" />
            <img src="/Culture3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Safe & Peaceful Destination
          </h2>
          <p className="text-base text-gray-600">
            Travel with confidence in one of the world’s most serene and
            welcoming environments.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Safe1.png" alt="" className="home-page-image-style" />
            <img src="/Safe2.png" alt="" className="home-page-image-style" />
            <img src="/Safe3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Sustainable & Responsible Tourism
          </h2>
          <p>
            Explore a nation committed to environmental protection and mindful
            travel experiences.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Sustain1.png" alt="" className="home-page-image-style" />
            <img src="/Sustain2.png" alt="" className="home-page-image-style" />
            <img src="/Sustain3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Authentic Himalayan Adventure
          </h2>
          <p className="text-base text-gray-600">
            From scenic hikes to immersive cultural journeys, enjoy adventures
            designed for both thrill and meaning.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img
              src="/Authentic1.png"
              alt=""
              className="home-page-image-style"
            />
            <img
              src="/Authentic2.png"
              alt=""
              className="home-page-image-style"
            />
            <img
              src="/Authentic3.png"
              alt=""
              className="home-page-image-style"
            />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">Warm Hospitality</h2>
          <p>
            Feel genuinely welcomed by friendly locals who share their
            traditions, stories, and smiles.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Warm1.png" alt="" className="home-page-image-style" />
            <img src="/Warm2.png" alt="" className="home-page-image-style" />
            <img src="/Warm3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Exclusive Travel Experience
          </h2>
          <p className="text-base text-gray-600">
            Enjoy uncrowded destinations, personalized services, and meaningful
            journeys crafted with care.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src="/Travel1.png" alt="" className="home-page-image-style" />
            <img src="/Travel2.png" alt="" className="home-page-image-style" />
            <img src="/Travel3.png" alt="" className="home-page-image-style" />
          </div>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Travel Information for Visitors to Bhutan (Current Rules – 2026)
          </h1>
          <h2 className="text-2xl font-semibold mt-6 mb-2">🛂 Visa & Entry</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Most foreigners need visa approval before arrival.</li>
            <li>
              Indians, Bangladeshis & Maldivians need an Entry Permit (no visa).
            </li>
            <li>Passport must be valid at least 6 months.</li>
            <li>
              Apply online via the Department of Immigration or through a tour
              operator.
            </li>
          </ul>
          <br />

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            💰 Sustainable Development Fee (SDF)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>International tourists: USD 100 per night.</li>
            <li>Indian nationals: INR 1,200 per night.</li>
            <li>Children discounts apply.</li>
            <li>
              SDF is separate from hotel, guide, transport, and visa fees.
            </li>
          </ul>
          <br />

          <h2 className="text-2xl font-semibold mt-6 mb-2">✈️ Entry Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Main airport: Paro International Airport</li>
            <li>
              Land borders from India:
              <ul className="list-disc pl-5 space-y-2">
                <li>Phuentsholing</li>
                <li>Gelephu</li>
                <li>Samdrup Jongkhar</li>
                <li>Samtse</li>
              </ul>
            </li>
          </ul>
          <br />

          <h2 className="text-2xl font-semibold mt-6 mb-2">🧭 Travel Rules</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Independent travel allowed.</li>
            <li>Licensed guide required for some restricted areas.</li>
            <li>Popular places like Thimphu and Paro are easily accessible.</li>
          </ul>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{
            padding: "10px",
            border: "2px solid",
            borderRadius: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-4xl font-bold mb-4">READY TO EXPLORE!</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            PLAN YOUR TRIP
          </button>
        </div>
        <div style={{ height: "10vh", width: "100vw" }} />
        <div
          style={{ padding: "10px", border: "2px solid", borderRadius: "10px" }}
        >
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="flex items-center justify-around"
          >
            <h1 className="text-4xl font-bold mb-4">CONTACT US</h1>
            <h1 className="text-4xl font-bold mb-4">FOLLOW US</h1>
          </div>
        </div>
      </div>
    </>
  );
}
