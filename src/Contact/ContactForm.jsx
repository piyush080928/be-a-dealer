import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-2 sm:px-6 md:px-10">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          CONTACT <span className="text-green-600">US</span>
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">WE'D LOVE TO HEAR FROM YOU</p>
        <p className="text-gray-600 text-sm sm:text-base">CHAT TO OUR FRIENDLY TEAM</p>
      </div>

      {/* Banner Image */}
      <div className="w-full md:w-3/4 rounded-xl overflow-hidden mb-10 shadow-md">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="contact"
          className="w-full h-56 sm:h-72 md:h-96 object-cover"
        />
      </div>

      {/* Form + Info */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-6">What do you want to ask us?</h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-green-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-green-600"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-green-600"
            ></textarea>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center md:text-left">
              CONTACT US FOR MORE INFO
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <span>
                  Cecilia Chapman 711-2880 Nulla St.<br />
                  Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600 text-xl" />
                (257) 563-7401
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-green-600 text-xl" />
                abccompany@mail.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 text-center md:text-left">
            <p className="font-semibold mb-2">FOLLOW US:</p>

            <div className="flex justify-center md:justify-start items-center gap-5 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-green-600" />
              <FaInstagram className="cursor-pointer hover:text-green-600" />
              <FaTwitter className="cursor-pointer hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-[1px] mt-6 w-full"></div>
    </div>
  );
}

export default ContactForm;
