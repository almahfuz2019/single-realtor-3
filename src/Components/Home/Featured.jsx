import Image from "next/image";
import React from "react";
// images
import bedIcon from "../../../public/Images/Bed.png";
import bathsIcon from "../../../public/Images/Baths.png";
import measurementIcon from "../../../public/Images/measurement.png";
import featuredImage1 from "../../../public/Images/featuredImage-1.png";
import featuredImage2 from "../../../public/Images/featuredImage-2.png";
import featuredImage3 from "../../../public/Images/featuredImage-3.png";
import featuredImage4 from "../../../public/Images/featuredImage-4.png";
import featuredImage5 from "../../../public/Images/featuredImage-5.png";
import featuredImage6 from "../../../public/Images/featuredImage-6.png";

export default function Featured() {
  const properties = [
    // Properties data
    {
      id: 1,
      image: featuredImage1,
      address: "45/A, Kennedy Road, NY",
      price: "$23,20,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Sale",
      type: "Residential",
      community: "Indo-african",
    },
    {
      id: 2,
      image: featuredImage2,
      address: "45/A, Kennedy Road, NY",
      price: "$2,406",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Rent",
      type: "Residential",
      community: "Indo-african",
    },
    {
      id: 3,
      image: featuredImage3,
      address: "45/A, Kennedy Road, NY",
      price: "$10,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Lease",
      type: "Office",
      community: "Indo-african",
    },
    {
      id: 4,
      image: featuredImage4,
      address: "45/A, Kennedy Road, NY",
      price: "$2,406",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Rent",
      type: "Residential",
      community: "Indo-african",
    },
    {
      id: 5,
      image: featuredImage5,
      address: "45/A, Kennedy Road, NY",
      price: "$10,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Lease",
      type: "Office",
      community: "Indo-african",
    },
    {
      id: 6,
      image: featuredImage6,
      address: "45/A, Kennedy Road, NY",
      price: "$10,545",
      beds: 3,
      baths: 2,
      area: 430,
      status: "For Lease",
      type: "Office",
      community: "Indo-african",
    },
  ];

  return (
    <div
      id="listing"
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4"
    >
      {/* Header section */}
      <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h3
          data-aos="fade-up"
          className="text-xl sm:text-3xl font-light text-black border border-black px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto montserrat-font"
        >
          Listing
        </h3>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl md:leading-[55px] playfair-display-font"
        >
          All Our Featured Properties
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="sm:text-xl text-sm font-normal open-sans-font"
        >
          Handpicked Selection of Premier Properties, Offering the Best in
          Luxury, Comfort, and Location to Suit Your Lifestyle and Investment
          Goals
        </p>
      </header>

      {/* Latest Featured Property */}
      <section className="mb-20">
        {properties.slice(0, 1).map((property) => (
          <article
            key={property.id}
            className="rounded-lg flex lg:flex-row flex-col-reverse items-end"
            data-aos="fade-up"
          >
            <div className="lg:w-[60%] w-full ">
              <header className="mr-10">
                <h2 className="font-semibold text-[32px] text-black playfair-display-font mb-2 lg:mt-0 mt-6">
                  Latest Featured
                </h2>
                <p className="font-normal text-lg text-[#000000B2] open-sans-font mb-6">
                  Stay Updated with Our Newest Listings: Discover the Latest
                  Featured Properties
                </p>
              </header>
              <div className="p-4 custom-shadow rounded-l-lg">
                <address className="flex not-italic justify-between">
                  <p className="text-lg md:text-xl font-normal mb-2 py-2 open-sans-font">
                    {property.address}
                  </p>
                  <p className="text-[#FF0000] font-bold text-lg md:text-xl playfair-display-font">
                    {property.price}
                  </p>
                </address>
                <div className="mb-2 flex justify-between border border-x-0 py-2 border-secondary open-sans-font">
                  <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                    <Image src={bedIcon} alt="bed" height="24" width="24" />
                    {property.beds} Beds
                  </p>
                  <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                    <Image src={bathsIcon} alt="bath" height="24" width="24" />
                    {property.baths} Baths
                  </p>
                  <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                    <Image
                      src={measurementIcon}
                      alt="area"
                      height="24"
                      width="24"
                    />
                    {property.area} Sq/Ft
                  </p>
                </div>
                <div>
                  <p className="mb-2 mt-7 text-lg md:text-xl">
                    <span className="font-normal montserrat-font">Status:</span>
                    <span className="font-light open-sans-font">
                      {" "}
                      {property.status}
                    </span>
                  </p>
                  <p className="mb-2 text-lg md:text-xl">
                    <span className="font-normal montserrat-font">Type:</span>
                    <span className="font-light open-sans-font">
                      {" "}
                      {property.type}
                    </span>
                  </p>
                  <p className="mb-2 text-lg md:text-xl">
                    <span className="font-normal montserrat-font">
                      Community:
                    </span>
                    <span className="font-light open-sans-font">
                      {" "}
                      {property.community}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <Image
                src={property.image}
                alt={`Image of ${property.address}`}
                width="819"
                height="489"
                className="rounded-t-lg w-full"
              />
            </div>
          </article>
        ))}
      </section>

      {/* All Featured Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        <article>
          <h2
            data-aos-delay="100"
            data-aos="fade-up"
            className="text-[32px] font-semibold text-black"
          >
            All Featured Listing
          </h2>
          <p
            data-aos-delay="200"
            data-aos="fade-up"
            className="text-lg font-normal mt-2 mb-12 text-justify text-black"
          >
            A Comprehensive Collection of Premier Properties, Highlighting the
            Best Homes and Real Estate Opportunities Available in the Market
            Today
          </p>
          <a
            href="#"
            className="sm:w-auto rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white focus:outline-none focus:ring montserrat-font shadow transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea6d53] hover:to-[#b3503c]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Browse All
          </a>
        </article>
        {properties.slice(1, 6).map((property) => (
          <article
            key={property.id}
            className="border rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <div className="relative w-full">
              <Image
                src={property.image}
                alt={`Image of ${property.address}`}
                width="449"
                height="250"
                className="rounded-t-lg w-full"
              />
            </div>
            <div className="p-4">
              <address className="flex not-italic justify-between">
                <p className="text-lg md:text-2xl font-normal mb-2 py-2 montserrat-font">
                  {property.address}
                </p>
                <p className="text-[#FF0000] font-bold text-lg md:text-2xl playfair-display-font">
                  {property.price}
                </p>
              </address>
              <div className="mb-2 flex justify-between border border-x-0 py-2 border-secondary montserrat-font">
                <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                  <Image src={bedIcon} alt="bedIcon" height="24" width="24" />
                  {property.beds} Beds
                </p>
                <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                  <Image
                    src={bathsIcon}
                    alt="bathsIcon"
                    height="24"
                    width="24"
                  />
                  {property.baths} Baths
                </p>{" "}
                <p className="flex items-center gap-2 text-lg md:text-2xl font-normal">
                  <Image
                    src={measurementIcon}
                    alt="measurementIcon"
                    height="24"
                    width="24"
                  />
                  {property.area} Sq/Ft
                </p>
              </div>
              <div>
                <p className="mb-2 mt-7 text-lg md:text-xl">
                  <span className="font-normal montserrat-font">Status:</span>
                  <span className="font-light open-sans-font">
                    {" "}
                    {property.status}
                  </span>
                </p>
                <p className="mb-2 text-lg md:text-xl">
                  <span className="font-normal montserrat-font">Type:</span>
                  <span className="font-light open-sans-font">
                    {" "}
                    {property.type}
                  </span>
                </p>
                <p className="mb-2 text-lg md:text-xl">
                  <span className="font-normal montserrat-font">
                    Community:
                  </span>
                  <span className="font-light open-sans-font">
                    {" "}
                    {property.community}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
