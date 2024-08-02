import Image from "next/image";
import React from "react";
// images
import callIcon from "../../../public/Images/callIcon.png";
import heroBG from "../../../public/Images/hero-background.png";

export default function Hero() {
  return (
    <section className="relative lg:px-0 overflow-hidden">
      {/* Hero section background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBG.src})` }}
        data-aos="fade-in"
      >
        <div className="relative mx-auto max-w-[1420px] px-4 h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center mt-20 2xl:mt-0">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl md:leading-[55px] font-bold text-white playfair-display-font"
              data-aos="fade-up"
            >
              Your 15 Guide To Finding The Perfect Property
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg md:text-xl font-normal leading-[27.24px] mt-4 text-white open-sans-font"
            >
              Positions the realtor as a knowledgeable advisor
            </p>

            <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 flex gap-3 md:gap-6 lg:gap-8 justify-center w-full">
              <a
                href="#"
                className="w-auto rounded-md lg:rounded-xl bg-secondary px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-lg md:text-xl lg:text-2xl font-medium text-black shadow transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#f5d9bc] hover:to-[#d4aa7f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 montserrat-font"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Explore Listing
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 lg:gap-4 w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-lg md:text-xl lg:text-2xl font-medium text-white shadow transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea6d53] hover:to-[#b3503c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 montserrat-font"
                data-aos="fade-left"
              >
                <Image
                  src={callIcon}
                  height="24"
                  width="24"
                  alt="Call Icon"
                  className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8"
                />
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
