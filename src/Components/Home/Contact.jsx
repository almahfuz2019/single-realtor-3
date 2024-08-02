"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage("Your message has been sent successfully!");
    reset();
  };

  return (
    <div>
      {/* Grid Header */}
      <div
        id="contact"
        className="grid grid-cols-2 lg:grid-cols-2 justify-center mt-32 lg:mt-[180px] "
      >
        <div className="text-center bg-primary sm:text-2xl text-xl text-white md:text-3xl lg:text-5xl py-4 font-bold playfair-display-font">
          <p>Property Estimate</p>
        </div>
        <div className="text-center md:text-3xl sm:text-2xl text-xl lg:text-5xl bg-secondary text-black py-4 font-bold playfair-display-font">
          Instant Alert
        </div>
      </div>

      <section className="max-w-[1420px] mx-auto py-32 px-4 lg:py-[180px]">
        <div>
          {/* Header section */}
          <header className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
            <h3
              data-aos="fade-up"
              className="text-xl sm:text-3xl font-light text-black border border-black px-2 py-1 sm:py-[11px] sm:px-[21px] inline-block mx-auto montserrat-font"
            >
              Contact Us
            </h3>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primary font-bold sm:text-4xl text-3xl md:text-5xl md:leading-[55px] playfair-display-font"
            >
              We're here to help
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="sm:text-xl text-sm font-normal open-sans-font"
            >
              Your Trusted Real Estate Partner: Offering Expert Guidance,
              Personalized Support to Assist You in Every Step of Your Property
              Journey
            </p>
          </header>

          {/* Contact Form */}
          <div
            className="max-w-[938px] mx-auto bg-[#f9f6f2] p-6 md:p-10 lg:p-14 rounded-lg custom-shadow"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`p-3 border rounded ${
                      errors.name && "border-red-500"
                    }`}
                    {...register("name", { required: "Name is required" })}
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className={`p-3 border rounded ${
                      errors.phone && "border-red-500"
                    }`}
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Type Your Email ..."
                  className={`p-3 border rounded ${
                    errors.email && "border-red-500"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <div>
                  <label className="block text-gray-700 font-normal text-xl md:text-2xl mb-4 mt-3 open-sans-font">
                    What are you interested in?
                  </label>
                  <div className="flex flex-col space-y-2 montserrat-font">
                    {["Buying", "Selling", "Just a chat"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          {...register("interestedIn", {
                            required: "At least one option must be selected",
                          })}
                          value={option}
                        />
                        <span className="ml-2 text-base md:text-xl">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  rows="6"
                  placeholder="Share Your Thoughts ..."
                  className={`p-3 border rounded ${
                    errors.thoughts && "border-red-500"
                  }`}
                  {...register("thoughts", {
                    required: "Thoughts are required",
                  })}
                ></textarea>
              </div>
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name.message}</p>
              )}
              {errors.phone && (
                <p className="text-red-500 mt-1">{errors.phone.message}</p>
              )}
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
              {errors.interestedIn && (
                <p className="text-red-500 mt-1">
                  {errors.interestedIn.message}
                </p>
              )}
              {errors.thoughts && (
                <p className="text-red-500 mt-1">{errors.thoughts.message}</p>
              )}
              {successMessage && (
                <p className="text-green-500 mt-4">{successMessage}</p>
              )}
              <button
                type="submit"
                className="w-full mt-4 rounded-md lg:rounded-xl bg-primary px-4 md:px-[33px] py-2 md:py-[14px] text-lg md:text-2xl font-medium text-white focus:outline-none focus:ring montserrat-font shadow transition duration-300 ease-in-out transform  hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#ea6d53] hover:to-[#b3503c]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
