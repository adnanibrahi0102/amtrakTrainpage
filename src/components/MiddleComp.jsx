import React from "react";
import { GiPriceTag } from "react-icons/gi";
import { GrServices, GrSecure } from "react-icons/gr";
import TrainsServiced from "./TrainServices";

const MiddleComp = () => {
  const guaranteeItems = [
    {
      icon: <GiPriceTag className="text-6xl mr-2" />,
      heading: "Best Price Guarantee",
      paragraph: "Cheap train tickets for all destinations",
    },
    {
      icon: <GrServices className="text-6xl mr-2" />,
      heading: "Excellent Customer Service",
      paragraph: "Quick changes and cancellations",
    },
    {
      icon: <GrSecure className="text-6xl mr-2" />,
      heading: "Secure Booking",
      paragraph: "Your Personal Information is secure",
    },
  ];

  return (
    <>
    <div className="flex flex-col  md:flex-row justify-around items-center p-8 bg-white h-[500px]">
      {guaranteeItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center mb-4 md:mb-0 md:mr-4 text-center">
          {item.icon}
          <h3 className="font-bold text-2xl md:text-3xl text-gray-500">{item.heading}</h3>
          <p className="text-lg text-gray-600">{item.paragraph}</p>
        </div>
      ))}
    </div>
    <TrainsServiced/>
    </>
  );
};

export default MiddleComp;
