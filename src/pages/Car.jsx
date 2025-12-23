import React from "react";
import CarCard from '../Car/CarCard';

function Car() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* Car Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <CarCard />
      </div>

    </div>
  );
}

export default Car;
