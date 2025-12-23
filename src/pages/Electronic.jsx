import React from "react";
import ElectronicCard from '../Electronic/ElectronicCard';

function Electronic() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* Electronic Section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <ElectronicCard />
      </div>

    </div>
  );
}

export default Electronic;
