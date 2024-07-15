import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/Featured";
import Hero from "@/Components/Home/Hero";
import SearchArea from "@/Components/Home/SearchArea";
import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import Animation from "@/Components/Shared/Animation";
import Image from "next/image";
import topArrowIcon from "../../public/Images/topArrowIcon.png";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Animation />
      {/* Navigation Icon */}
      <a
        href="#home"
        className="fixed bottom-0 right-0 mb-4 mr-4 z-50 cursor-pointer group"
      >
        <Image
          height="60"
          width="60"
          src={topArrowIcon}
          alt="Navigation Image"
          className="h-12 w-auto md:h-auto bg-[#861E32] rounded-full p-0.5 transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
        />
      </a>

      <Hero />
      <About />
      <Services />
      <Featured />
      <SearchArea />
      <Testimonial />
      <Contact />
    </div>
  );
}
