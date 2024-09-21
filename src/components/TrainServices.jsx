import React from "react";

const TrainsServiced = () => {
  const trains = [
    "Amtrak",
    "BNSF",
    "Canadian National",
    "CPKC",
    "CSX Transportation",
    "Norfolk Southern",
  ];

  return (
    <>
    <div className="bg-gray-400 bg-opacity-30 py-8 mt-10">
      <h2 className="text-gray-900 text-4xl font-semibold text-center mb-6 tracking-wider">TRAINS SERVICED</h2>
      <div className="flex flex-wrap justify-center">
        {trains.map((train, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 text-gray-900 text-center mb-4 flex flex-row items-center justify-start sm:justify-center gap-2 px-4"
          >
            <span className="text-5xl font-bold">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-3xl font-light block">{train}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gray-100 py-12 px-6 sm:px-12">
      <h2 className="text-gray-900 text-4xl font-bold text-center mb-8">
        Our Reservations Desk
      </h2>
      {/* ReservationsDesk */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Train-reservations.com</span> has a specialized staff of train specialists
          standing by 24/7, to help you with any of your ticketing needs. We can help you with train reservations, date changes, ticket cancellations, and refund requests.
          We have a reputation for making our clients' vacations as easy and enjoyable as we can. Give us a call now to simplify and enjoy your holiday!
        </p>
      </div>
    </div>
    </>
  );
};

export default TrainsServiced;
