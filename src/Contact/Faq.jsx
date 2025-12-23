import React from "react";

function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 sm:px-6 md:px-10 py-12 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">

          {/* FAQ Item */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white">
                How does buying work in the game?
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-300">
                You choose an item, make an offer, and negotiate with the seller. The seller gives counter-offers until both agree on a final price. Once bought, the item is added to your dashboard.
              </p>
            </div>
          </div>

          {/* Repeat similar blocks for each FAQ item */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white">
                How do I sell an item?
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-300">
                Once you own an item, you can list it for sale from your dashboard. Set your desired price and negotiate with buyers to earn profit.
              </p>
            </div>
          </div>

          {/* Add remaining FAQ items following the same structure */}
        </div>
      </div>

      <div className="bg-black h-[1px] mt-6 w-full"></div>
    </section>
  );
}

export default Faq;
