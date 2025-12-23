import React from "react";
import Sell from '../Sell/Sell';

function SellPage() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* Sell Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <Sell />
      </div>

    </div>
  );
}

export default SellPage;
