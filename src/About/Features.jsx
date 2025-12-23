import React from "react";
import wall from '../assets/wall 3.jpg'

function Features() {
  return(
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-4 sm:px-6 lg:px-10 py-10 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white capitalize">
                explore our <br/> awesome Features
              </h1>
              <div className="mt-2 flex items-center gap-1">
                <span className="w-10 h-1 bg-blue-500 rounded-full inline-block"></span>
                <span className="w-2 h-1 bg-blue-500 rounded-full inline-block"></span>
                <span className="w-1 h-1 bg-blue-500 rounded-full inline-block"></span>
              </div>
            </div>

            {/* Feature Items */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <span className="p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 flex-shrink-0">
                  {/* SVG icon */}
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">Buy & Bargain</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                    Start as a buyer, negotiate with sellers, and try to get the lowest price through smart bargaining.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <span className="p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 flex-shrink-0">
                  {/* SVG icon */}
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">Sell & Earn Profit</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                    Sell your owned items at higher prices by negotiating with buyers and make profit on every deal.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <span className="p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 flex-shrink-0">
                  {/* SVG icon */}
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">Realistic Deal System</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm sm:text-base">
                    Every product has a base price, counter-offers, and limits — making every deal feel real and strategic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover" 
              src={wall} 
              alt="Features"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features;
