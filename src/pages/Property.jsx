import React from "react";
import PropertyCard from '../property/PropertyCard';

function Property() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* Property Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <PropertyCard />
      </div>

    </div>
  );
}

export default Property;
