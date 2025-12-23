import React from "react";
import Buy from '../Buy/Buy';

function BuyPage() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      
      {/* Buy Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <Buy />
      </div>

    </div>
  );
}

export default BuyPage;
