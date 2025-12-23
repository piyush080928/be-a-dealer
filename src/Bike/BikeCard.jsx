import React from "react";
import Gamedata from '../Data/data';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function BikeCard() {
  const bikes = Gamedata.filter(item => item.category === "BIKE");
  const navigate = useNavigate();

  // BUY LOGIC
  const handleBuy = (product) => {
    const user = localStorage.getItem("user");

    if (!user) {
      toast.error("Please login first!");
      navigate("/auth");
      return;
    }

    navigate("/buypage", { state: product });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-black cursor-pointer transition-all duration-300 ease-in-out text-shadow-md text-shadow-black/50 hover:text-shadow-lg hover:scale-95 hover:underline text-center underline text-3xl sm:text-4xl font-bold my-6">
        BIKES
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {bikes.map((b) => (
          <div
            key={b.id}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] shadow-md shadow-black/50 hover:shadow-lg cursor-pointer transition-all ease-in duration-300 overflow-hidden h-auto sm:h-[50vh] bg-gray-300 rounded-lg dark:bg-gray-800"
          >
            <div className="relative">
              <img
                className="object-cover cursor-pointer transition duration-300 hover:scale-95 w-full h-48 sm:h-60 md:h-64 lg:h-72"
                src={b.img}
                alt={b.name}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[1px] p-2">
                <p className="text-white text-xs sm:text-[10px] leading-tight">
                  {b.description}
                </p>
              </div>
            </div>

            <div className="text-center px-4 py-2">
              <h1 className="text-black font-bold underline text-lg sm:text-xl md:text-2xl">
                {b.name}
              </h1>
              <h1 className="text-black font-bold text-base sm:text-lg md:text-[20px]">
                ₹{b.price}
              </h1>

              <button
                onClick={() => handleBuy(b)}
                className="px-4 py-2 text-sm sm:text-[15px] w-full font-semibold cursor-pointer text-white shadow-md shadow-black/50 hover:shadow-lg uppercase transition-colors duration-300 transform bg-green-400 rounded hover:bg-green-300 hover:underline focus:outline-none mt-2"
              >
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeCard;
