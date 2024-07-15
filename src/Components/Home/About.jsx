import Image from "next/image";
import React from "react";
// images
import ownerImage from "../../../public/Images/Owner.png";

export default function About() {
  // Fun facts data
  let data = [
    { id: "1", count: "15", name: "Years Of Experience" },
    { id: "2", count: "300+", name: "Property Transaction" },
    { id: "3", count: "1k+", name: "Happy Clients" },
    { id: "4", count: "1B+", name: "Net Revenue" },
  ];

  return (
    <section
      id="aboutme"
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4"
    >
      {/* Header section */}
      <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h3
          data-aos="fade-up"
          className="text-xl sm:text-3xl font-light text-black border border-black px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto montserrat-font"
        >
          About Me
        </h3>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl md:leading-[55px] playfair-display-font"
        >
          Know About Your Realtor
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="sm:text-xl text-sm font-normal open-sans-font"
        >
          Learn About Our Background, Experience, and Dedication to Providing
          Outstanding Real Estate Services Tailored to Your Needs
        </p>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 md:gap-y-24 items-center justify-center">
        <div data-aos="fade-right">
          <Image
            height="624"
            width="527"
            className="bg-[#E2E6EC] p-4 w-full lg:w-auto"
            src={ownerImage}
            alt="Owner Image"
          />
        </div>
        <div>
          <p
            className="text-xl md:text-2xl text-justify font-normal montserrat-font text-black mb-10 lg:mb-12"
            data-aos="fade-up"
          >
            Hi, I’m Alan Stephen, a Senior Broker at Lifespring Realty with 15
            years of NYC real estate experience.
            <br />
            <br />
            Specializing in luxury residential and commercial real estate, I
            offer expertise in high-end homes and in-depth market analysis to
            help clients make informed buying or selling decisions. My roles
            include client representation, negotiation, transaction management,
            and marketing. I offer extensive NYC real estate knowledge, strong
            communication, industry connections, and meticulous transaction
            attention. <br />
            <br />
            Recognized as a top broker with awards for sales excellence, high
            client satisfaction, and active community involvement through
            charity events and real estate associations.
          </p>
          <div data-aos="fade-up">
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white  focus:outline-none focus:ring montserrat-font shadow transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea6d53] hover:to-[#b3503c]"
              data-aos="fade-right"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Fun facts section */}
      <div className="bg-secondary grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-8 rounded-br-3xl px-4 rounded-tl-3xl rounded-bl-0 rounded-tr-0 mt-20 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="text-black text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 100} // Staggering delay
          >
            <h3
              className="font-bold text-4xl md:text-5xl mb-3 centuryGothic-font"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 100 + 200} // Staggering delay for the count
            >
              {item.count}
            </h3>
            <p
              className="font-normal text-base md:text-2xl"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 200 + 300} // Staggering delay for the description
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
