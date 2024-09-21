import React from "react";
import { FaCheck } from "react-icons/fa"; // Import the check icon
import { phoneNumber } from "../lib/phoneNumber";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1684709527501-e1c53c748b59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Main Transparent Glass Effect Section */}
      <div
        className="bg-white bg-opacity-20 text-black py-12 px-8 rounded-xl shadow-lg max-w-2xl mx-auto"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Amtrak Tickets
        </h2>

        {/* Updated points with check mark and pipe separator */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl text-center text-white mt-2 flex items-center">
            <FaCheck className="mr-2 text-green-400" /> Call Us Now And Avail
            Discounts | 24x7 Support | No Waiting Time
          </p>

          <p className="text-xl text-center text-white mt-2 flex items-center">
            <FaCheck className="mr-2 text-green-400" /> Book Train Tickets Over
            Phone
          </p>

          <p className="text-xl text-center text-white mt-2 flex items-center">
            <FaCheck className="mr-2 text-green-400" /> No Extra Fees Over the
            Phone
          </p>

          <p className="text-xl text-center text-white mt-2 flex items-center">
            <FaCheck className="mr-2 text-green-400" /> Book Amtrak Train Online
          </p>
        </div>

        <div className="flex flex-col items-center mt-8">
          <p className="text-2xl text-center font-bold mb-3 text-white">
            Book Amtrak Ticket Over Phone
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="text-gray-900 font-bold bg-white bg-opacity-20 py-2 px-4 flex items-center rounded-full shadow-lg transition-all hover:bg-opacity-30 hover:backdrop-blur-lg "
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
