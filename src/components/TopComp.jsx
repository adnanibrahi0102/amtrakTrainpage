import React from "react";
import { phoneNumber } from "../lib/phoneNumber";

const TopComp = () => {
  return (
    <div className="bg-white w-full">
      {/* Top Section */}
      <div className="bg-gray-400 bg-opacity-50 text-black py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-2xl font-semibold text-center md:text-left">
          Amtrak Train Reservation
        </p>

        <a
          href={`tel:${phoneNumber}`}
          className="sm:hidden inline-block px-4 py-4 mt-2 md:mt-0 text-base font-bold text-center 
             bg-white bg-opacity-20 text-black  rounded-full shadow-lg 
             transition-all hover:bg-opacity-30 hover:backdrop-blur-lg"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          CALL US NOW AND AVAIL DISCOUNTS | 24/7 SUPPORT {phoneNumber}
        </a>
      </div>

      {/* Middle Section with Background Image */}
      <div
        className="bg-cover bg-center text-white md:text-gray-900 text-center py-12"
        style={{
          backgroundImage: "url('/train.webp')",
        }}
      >
        <h2 className="text-3xl font-bold">Amtrak Train Reservation Online</h2>

        {/* Updated tick marks with a different color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <p className="mt-6 text-2xl flex items-center justify-center font-semibold">
            <span className="text-green-400 text-3xl mr-2">✓</span> Amtrak Tickets | New bookings
          </p>
          <p className="mt-4 text-2xl flex items-center justify-center font-semibold ">
            <span className="text-green-400 text-3xl mr-2">✓</span> Call Us Now And Avail Discounts  

          </p>
          <p className="mt-4 text-2xl flex items-center justify-center font-semibold">
            <span className="text-green-400 text-3xl mr-2">✓</span>{" "}
            24x7 Support No Waiting Time.
          </p>
          <p className="mt-4 text-2xl flex items-center justify-center font-semibold">
            <span className="text-green-400 text-3xl mr-2">✓</span>  Book Train Tickets Over Phone
          </p>
          <p className="mt-4 text-2xl flex items-center justify-center font-semibold">
            <span className="text-green-400 text-3xl mr-2">✓</span> Refunds | Cancellations
          </p>
        </div>
        <p className="mt-6 text-2xl font-bold text-gray-100">
        No Extra Fees Over the Phone

        </p>

        {/* Call to Action Button */}
        <div className="w-full text-center lg:text-start lg py-8">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-white bg-opacity-50 text-gray-900 text-2xl font-bold py-4 px-8 md:py-10 md:px-16 rounded-full 
           w-full md:w-auto md:max-w-md mx-auto animated-border mt-5 transition duration-300 hover:bg-opacity-40"
          >
            CALL US NOW <br className="md:hidden" /> {phoneNumber}
          </a>
        </div>
      </div>

      <div className="bg-gray-400 bg-opacity-50 text-black p-6 text-center">
        <h1 className="text-4xl font-bold">
          Current Wait Time: Less than 10 seconds
        </h1>
      </div>
    </div>
  );
};

export default TopComp;
