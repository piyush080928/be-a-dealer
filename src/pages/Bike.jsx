import React from "react";
import BikeCard from "../Bike/BikeCard";

function Bike() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* Bike Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <BikeCard />
      </div>

    </div>
  );
}

export default Bike;
