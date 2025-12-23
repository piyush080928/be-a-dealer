import { FaFacebookF, FaInstagram, FaXTwitter, FaGlobe } from "react-icons/fa6";
import bg from '../assets/bungalow 9.jpg';
import { Link } from 'react-router-dom';

export default function FeedbackFooter() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">

        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-lg">
          Send Us Your Feedback
        </h1>

        {/* Email Input */}
        <div className="mt-10 flex flex-col sm:flex-row items-center w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/20 border border-white rounded-2xl px-5 py-4 backdrop-blur-md">
          <input
            type="email"
            placeholder="johnexample.com"
            className="w-full bg-transparent text-white text-lg outline-none placeholder-white/80 mb-3 sm:mb-0 sm:mr-3"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-7 h-7 cursor-pointer hover:scale-110 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12h12m0 0l-4-4m4 4l-4 4"
            />
          </svg>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 w-full">

          {/* Left big paragraph */}
          <div className="text-white max-w-[420px] leading-relaxed text-[15px] mx-auto sm:mx-0">
            <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
            <p>
              We’d love to hear from you! Whether you have feedback, questions,
              or suggestions — we’re here to help.  
              Connect with us and stay updated with the latest listings,
              offers, and updates from our platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6 text-white text-2xl">
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaXTwitter className="cursor-pointer hover:scale-110 transition" />
              <FaGlobe className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          {/* Buy Section */}
          <div className="text-white">
            <h2 className="font-semibold text-lg mb-4">Buy</h2>
            <ul className="space-y-1 text-[15px]">
              <li><Link to="/property" className="hover:underline">Properties</Link></li>
              <li><Link to="/car" className="hover:underline">Cars</Link></li>
              <li><Link to="/bike" className="hover:underline">Bikes</Link></li>
              <li><Link to="/electronic" className="hover:underline">Mobiles</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="text-white">
            <h2 className="font-semibold text-lg mb-4">About</h2>
            <ul className="space-y-1 text-[15px]">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/about" className="hover:underline">BAD</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-white">
            <h2 className="font-semibold text-lg mb-4">Support</h2>
            <ul className="space-y-1 text-[15px]">
              <li><Link to="/contact" className="hover:underline">FAQ'S</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/contact" className="hover:underline">Email us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full border-t border-white/60 mt-16 py-4 text-center text-white/90 text-sm sm:text-base">
          © Piyush 2025. All rights reserved.  
          <br />
          Designed by Piyush and Developed By Piyush.
        </div>

      </div>
    </div>
  );
}
