import React from "react";
import Bg from '../assets/bunglow 3.jpg';
import Bg2 from '../assets/bungalow 10.jpg';

function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 underline text-shadow-md text-shadow-black/50 my-8">
        ABOUT BE A DEALER
      </h1>

      {/* BUY SECTION */}
      <div className="overflow-hidden w-full rounded-lg shadow-md shadow-black/50 dark:bg-gray-800 mb-12">
        <img className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[70vh]" src={Bg} alt="Buy Section" />
        <div className="p-4 sm:p-6">
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-gray-400 leading-relaxed">
            Buy smart, negotiate smarter. In Be A Dealer, every item is an opportunity waiting to be grabbed.
            Whether it's a mobile, a car, a bungalow, or any electronic device — your goal is to bargain with
            the seller and secure the best possible deal. Every product has a base value, every seller has a limit,
            and your negotiation skills decide how much you save. This isn’t just buying… it’s strategic deal-making.
          </p>
        </div>
      </div>

      {/* SELL SECTION */}
      <div className="overflow-hidden w-full rounded-lg shadow-md shadow-black/50 dark:bg-gray-800 mb-12">
        <img className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[70vh]" src={Bg2} alt="Sell Section" />
        <div className="p-4 sm:p-6">
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-gray-400 leading-relaxed">
            Sell boldly, earn massively. Once you own an item, you step into the role of a seller.
            Set your price, receive offers from buyers, and negotiate your way to the highest profit.
            Your timing, pricing strategy, and bargaining decisions shape your success.
            Every sale strengthens your journey from a casual trader to a true dealer.
          </p>
        </div>
      </div>

      <h1 className="bg-black h-1 mt-5"></h1>
    </div>
  );
}

export default AboutPage;
