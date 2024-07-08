/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
// images
import user1Image from "../../../public/Images/user1Image.png";
import user2Image from "../../../public/Images/user2Image.png";
import quote from "../../../public/Images/quote.png";
import star from "../../../public/Images/Star.png";
export default function Testimonial() {
  return (
    <div className="bg-[#FBF4EE]">
      <section className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4">
        {/* Header section */}
        <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h3
            data-aos="fade-up"
            className="text-xl sm:text-3xl font-light text-black border border-black px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto montserrat-font"
          >
            Testimonial
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl md:leading-[55px] playfair-display-font"
          >
            Our Clients Review
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:text-xl text-sm font-normal open-sans-font"
          >
            Hear from Our Satisfied Clients: Genuine Reviews Highlighting Their
            Experiences and Our Success Stories
          </p>
        </header>

        {/* Testimonials Section */}
        <section>
          <div
            className="flex w-full flex-col lg:flex-row gap-20"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Testimonial Card 1 */}
            <div className="border-b-2 pb-4 border-b-primary border border-x-0 border-t-0">
              <div className="flex items-center gap-6 md:gap-10 justify-start ">
                <Image
                  src={user1Image}
                  alt="client image"
                  className="rounded-lg w-1/2 lg:w-auto"
                  height="180"
                  width="240"
                />
                <div>
                  <h3 className="md:text-[32px] text-2xl font-medium montserrat-font ">
                    Anna Waugh
                  </h3>
                  <p className="md:text-2xl text-xl font-light  open-sans-font lg:mt-2">
                    Happy Client
                  </p>
                  <div className="flex gap-2 mt-3 md:mt-5">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={star}
                        alt="star rating"
                        className="w-6 md:w-full"
                        height="40"
                        width="40"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center mt-10">
                  <Image
                    src={quote}
                    alt="quote image"
                    className="rounded-lg"
                    height="78"
                    width="32"
                  />
                </div>
                <p className="text-justify text-base sm:text-xl mt-6 montserrat-font">
                  Matthew Davidson exceeded our expectations in every way. From
                  our initial consultation to the closing of our condo, he
                  provided exceptional service and guidance. His attention to
                  detail and commitment to our satisfaction were evident
                  throughout the entire process. Robert's marketing strategies
                  were top-notch, and our property sold quickly at a great
                  price. We couldn't be happier with the outcome and will
                  definitely work with Robert again in the future.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="divider hidden lg:block lg:divider-horizontal bg-primary"></div>

            {/* Testimonial Card 2 */}
            <div className="border-b-2 pb-4 border-b-primary border border-x-0 border-t-0">
              <div className="flex items-center gap-6 md:gap-10 justify-start ">
                <Image
                  src={user2Image}
                  alt="client image"
                  className="rounded-lg w-1/2 lg:w-auto"
                  height="180"
                  width="240"
                />
                <div>
                  <h3 className="md:text-[32px] text-2xl font-medium montserrat-font ">
                    James Milner
                  </h3>
                  <p className="md:text-2xl text-xl font-light  open-sans-font lg:mt-2">
                    Happy Client
                  </p>
                  <div className="flex gap-2 mt-3 md:mt-5">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={star}
                        alt="star rating"
                        className="w-6 md:w-full"
                        height="40"
                        width="40"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center mt-10">
                  <Image
                    src={quote}
                    alt="quote image"
                    className="rounded-lg"
                    height="78"
                    width="32"
                  />
                </div>
                <p className="text-justify text-base sm:text-xl mt-6 montserrat-font">
                  As an investor, I've worked with several real estate brokers,
                  but Matthew Davidson stands out as the best. His deep
                  understanding of the commercial real estate market and his
                  strategic approach helped us secure a fantastic deal on a new
                  office space. Robert is always available to answer questions
                  and provide valuable insights. His professionalism and
                  dedication are truly commendable. I look forward to many more
                  successful transactions with Robert.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex mt-10">
            <a
              href="#"
              className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white shadow transition-all duration-300 ease-in-out transform  hover:shadow-lg  focus:outline-none focus:ring montserrat-font"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              See All
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
