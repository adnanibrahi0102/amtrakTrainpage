import React from "react";

const SupportCompareSection = () => {
  return (
    <div
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1674918349668-199d707b73ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black bg-opacity-50 px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - 24/7 Customer Support */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">24/7 CUSTOMER SUPPORT</h2>
            <p className="text-lg mb-4">
              We are happy to help you with any questions you may have about train changes, cancellations, and new reservations. 
              Our experienced customer success representatives are here to assist you with your upcoming or new train trip, 24 hours a day, 7 days a week. 
              Almost any train offers for travel bookings. <span className="font-bold">NO WAIT TIMES</span> to book train journeys with almost any train company.
            </p>
          </div>

          {/* Right Side - Compare Train Costs */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">COMPARE TRAIN COSTS</h2>
            <p className="text-lg">
              Find the best train deals available anywhere in the world. We can help you navigate each train journey’s terms before you book, 
              giving you the peace of mind to book the vacation you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCompareSection;
