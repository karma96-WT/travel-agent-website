import Image from "next/image";
import Navbar from "./components/navbar";
import "./local.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-page-div">
        <h1>Welcome to our Travel Agency!</h1>
        <p>
          We offer the best travel packages to destinations around the world.
          Whether you're looking for a relaxing beach vacation, an adventurous
          mountain trek, or a cultural city tour, we have something for
          everyone.
        </p>
      </div>
    </>
  );
}
