import React from "react";
import Gamedata from '../Data/data';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ElectronicCard() {
  const elec = Gamedata.filter(item => item.category === "ELECTRONICS");

  const navigate = useNavigate();

  // UPDATED BUY LOGIC
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
    <div className="px-2 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      <h1 className="text-black cursor-pointer transition-all duration-300 ease-in-out text-center text-3xl sm:text-4xl md:text-5xl font-bold underline mb-10 hover:scale-95">
        ELECTRONICS
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {elec.map((e) => (
          <div
            key={e.id}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] shadow-md shadow-black/50 hover:shadow-lg cursor-pointer transition-all ease-in duration-300 overflow-hidden h-auto md:h-[52vh] bg-gray-300 rounded-lg dark:bg-gray-800"
          >
            <div className="relative">
              <img
                className="object-cover w-full h-48 sm:h-60 md:h-72 cursor-pointer transition duration-300 hover:scale-95"
                src={e.img}
                alt={e.name}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[1px] p-2">
                <p className="text-white text-xs sm:text-sm leading-tight">
                  {e.description}
                </p>
              </div>
            </div>

            <div className="text-center px-4 py-4">
              <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl underline mb-1">
                {e.name}
              </h1>
              <h1 className="text-black font-bold text-base sm:text-lg md:text-xl mb-2">
                ₹{e.price}
              </h1>

              <button
                onClick={() => handleBuy(e)}
                className="px-4 py-2 text-sm sm:text-[15px] w-full font-semibold text-white shadow-md shadow-black/50 hover:shadow-lg uppercase transition-colors duration-300 transform bg-green-400 rounded hover:bg-green-300 hover:underline focus:outline-none"
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

export default ElectronicCard;
