import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { motion } from 'framer-motion';

const CallToActionBanner = () => {
  const phoneNumber = '(833) 368-6811';

  return (
    <a
      href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
      className="fixed bottom-0 inset-x-0 bg-white bg-opacity-40 backdrop-blur-md text-center p-4 flex items-center justify-center m-2 md:hidden rounded-md z-40 shadow-lg"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
      }}
    >
      <div className="flex items-center">
        <motion.div
          className="bg-white bg-opacity-80 p-1 rounded-md shadow-md"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MdOutlineWifiCalling3 className="w-6 h-6 text-black" />
        </motion.div>
        <div className="ml-3">
          <p className="text-base font-medium text-black">
          Call Now for Exclusive Train Deals and Discounts!
          </p>
          <p className="font-bold text-xl text-black">{phoneNumber}</p>
        </div>
      </div>
    </a>
  );
};

export default CallToActionBanner;
