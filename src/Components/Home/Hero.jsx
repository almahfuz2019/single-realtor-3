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
              className="sm:text-4xl text-3xl md:text-5xl md:leading-[55px] font-bold text-white playfair-display-font"
              data-aos="fade-up"
            >
              Your 15 Guide To Finding The Perfect Property
            </h1>
            <p
              data-aos="fade-up"
              className="sm:text-xl text-base font-normal leading-[27.24px] mt-4 text-white open-sans-font"
            >
              Positions the realtor as a knowledgeable advisor
            </p>

            <div className="mt-10 sm:mt-20 flex gap-3 md:gap-8 justify-center w-full">
              <a
                href="#"
                className="sm:w-auto rounded-md lg:rounded-xl bg-secondary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-black shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-t hover:from-primary hover:via-primary/10 hover:to-secondary focus:outline-none focus:ring montserrat-font"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Explore Listing
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 lg:gap-4 sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow focus:outline-none focus:ring hover:shadow-md montserrat-font"
                data-aos="fade-left"
              >
                <Image
                  src={callIcon}
                  height="24"
                  width="24"
                  alt="Call Icon"
                  className="md:h-auto md:w-auto h-4 w-4 "
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
