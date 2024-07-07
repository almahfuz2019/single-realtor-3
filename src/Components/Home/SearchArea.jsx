"use client";
// components/SearchSection.js
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import searchAreaBackground from "../../../public/Images/searchAreaBackground.png";

const SearchArea = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32 lg:py-[218px] mb-16 lg:mb-[218px] flex items-center justify-center px-4 "
      style={{ backgroundImage: `url(${searchAreaBackground.src})` }}
      id="contact"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white  mx-auto max-w-[1420px] ">
        {/* Section Header */}
        <header>
          <h1
            className="sm:text-4xl text-3xl md:text-5xl md:leading-[55px] font-bold playfair-display-font"
            data-aos="fade-up"
          >
            Search Listings by Area, Price, and More
          </h1>
          <p
            className="mt-8  font-normal  max-w-screen-lg mx-auto open-sans-font sm:text-xl text-sm "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find Your Ideal Property: Utilize Our Advanced Search Tools to
            Browse Listings by Area, Price Range, Property Type and discover the
            Perfect Home or Investment Opportunity
          </p>
        </header>

        {/* Search Tabs */}
        <div
          className="md:mt-20 mt-16  w-full bg-[#AAC3D2] py-8 px-4 rounded-xl text-black"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Tabs>
            <TabList className="flex flex-wrap justify-center space-x-2 lg:space-x-4 mb-8 playfair-display-font">
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-xl font-normal"
                selectedClassName="border-b-2 border-red-500"
              >
                Sell
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-xl font-normal"
                selectedClassName="border-b-2 border-red-500"
              >
                Buy
              </Tab>
              <Tab
                className="px-2 lg:px-4 py-2 cursor-pointer text-xl font-normal"
                selectedClassName="border-b-2 border-red-500"
              >
                Rent
              </Tab>
            </TabList>

            {/* Sell Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4 open-sans-font sm:px-20 lg:px-0">
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Property Category</option>
                  <option>Property Category sell</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Location</option>
                  <option>Location1 sell</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  <option>Average Price sell</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full  lg:w-1/4 p-2 bg-[#C61414CC] text-2xl text-white rounded-xl"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Buy Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Property Category</option>
                  <option>Property Category buy</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Location</option>
                  <option>Location1 buy</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Average Price</option>
                  <option>Average Price buy</option>
                  <option>Average Price</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full  lg:w-1/4 p-2 bg-[#C61414CC] md:text-2xl text-lg text-white rounded-xl"
                >
                  Browse
                </button>
              </form>
            </TabPanel>

            {/* Rent Tab */}
            <TabPanel>
              <form className="flex flex-wrap lg:flex-nowrap justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Property Category</option>
                  <option>Property Category rent</option>
                  <option>Property Category</option>
                  <option>Property Category</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Location</option>
                  <option>Location1 rent</option>
                  <option>Location2</option>
                  {/* Add more options here */}
                </select>
                <select className="w-full  lg:w-1/4 p-2 border rounded-xl text-base">
                  <option>Average Price</option>
                  <option>Average Price rent</option>
                  <option>Average Price</option>
                  {/* Add more options here */}
                </select>
                <button
                  type="submit"
                  className="w-full  lg:w-1/4 p-2 bg-[#C61414CC] text-2xl text-white rounded-xl"
                >
                  Browse
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;
