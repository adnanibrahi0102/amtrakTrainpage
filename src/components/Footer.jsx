import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Informational Text */}
        <div className="text-base mb-6">
          <p>
            Train-reservations.com is an owned and operated property of
            Train-reservations.com and acts as a travel agent partner. We sell
            various travel related products on behalf of numerous transport and
            accommodation service providers, including, but not limited to,
            airlines, coach, rail, cruise line operators, and hotels.
            Train-reservations.com does not own, operate, manage, or control
            these independent suppliers of services and is not liable for their
            acts or omissions. Train-reservations.com connects you to a live
            travel agent specialist by using Train-reservations.com. We have no
            responsibility for these services, nor do we have the authority to
            make any warranty or representation regarding their standard.
            Requests cannot be guaranteed. All bookings are subject to the terms
            and conditions and limitations of liability imposed by these travel
            service providers. You understand that your legal recourse is
            against the specific carrier, not Train-reservations.com. Conditions
            can change in any country at any time. It is your responsibility to
            check the USA Government Travel advisories for your intended
            destination at{" "}
          </p>
        </div>

        {/* Links and Copyright */}
        <div className="text-sm">
          <p className="mb-4">
            <a
              href="/privacy-policy"
              className="text-black mr-4 text-2xl font-thin"
            >
              Our Privacy Policy
            </a>
            <a
              href="/terms-of-conditions"
              className="text-black text-2xl font-thin"
            >
              Terms of Conditions
            </a>
          </p>
          <p>©2024 All Rights Reserved - Train-reservations.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
