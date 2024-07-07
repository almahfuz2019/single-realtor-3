"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import buyProperty from "/public/Images/buy-property.png";
import calculation from "/public/Images/calculation.png";
import homeEvaluation from "/public/Images/home-evaluation.png";
import sellProperty from "/public/Images/sell-property.png";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  // Services data
  const services = [
    {
      id: 1,
      title: "Buy Property",
      link: "Add Listing",
      img: buyProperty,
      alt: "Buy Property Icon",
    },
    {
      id: 2,
      title: "Sell Property",
      link: "Sell Listing",
      img: sellProperty,
      alt: "Sell Property Icon",
    },
    {
      id: 3,
      title: "Home Evaluation",
      link: "Evaluate",
      img: homeEvaluation,
      alt: "Home Evaluation Icon",
    },
    {
      id: 4,
      title: "Calculation",
      link: "Calculate",
      img: calculation,
      alt: "Calculation Icon",
    },
  ];

  return (
    <div className="bg-[#EAC9A833]">
      <section className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h3
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-light text-black border border-black px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto montserrat-font"
          >
            Services
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Explore What We Serve
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-sm font-normal open-sans-font"
          >
            Discover Our Comprehensive Services: From Buying & Selling to Home
            Evaluations & Market Analysis, Meet All Your Real Estate Needs.
          </p>
        </header>
        {/* services */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-center items-center custom-shadow bg-primary py-10 px-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1200" // Duration of the animation for this element
              data-aos-delay={index * 100} // Staggered delay for each item
            >
              <Image
                src={service.img}
                height="72"
                width="72"
                alt={service.alt}
              />
              <h3 className="font-semibold text-[32px] text-white mt-5 playfair-display-font">
                {service.title}
              </h3>
              <a
                href="#"
                className="text-[24px] font-normal text-white border border-white py-[8px] px-[21px] inline-block mx-auto mt-10 montserrat-font transition-colors hover:bg-white hover:text-primary"
              >
                {service.link}
              </a>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
