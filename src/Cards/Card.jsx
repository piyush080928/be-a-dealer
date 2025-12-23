import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Gamedata from "../Data/data";

function Card() {
  const navigate = useNavigate();

  const handleBuy = (product) => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please login first!");
      navigate("/auth");
      return;
    }
    navigate("/buypage", { state: product });
  };

  const prop = Gamedata.filter((item) => item.show === "estate");
  const vehicle = Gamedata.filter((item) => item.vehicle === "four");
  const motor = Gamedata.filter((item) => item.motor === "cycle");

  const renderCards = (items) =>
    items.map((item) => (
      <div
        key={item.id}
        className="w-full sm:w-[300px] md:w-[360px] lg:w-[400px] shadow-md shadow-black/50 hover:shadow-lg cursor-pointer transition-all ease-in duration-300 overflow-hidden bg-gray-300 dark:bg-gray-800 rounded-lg flex flex-col"
      >
        <div className="relative">
          <img
            className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 transition duration-300 hover:scale-95"
            src={item.img}
            alt={item.name}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[1px] p-2">
            <p className="text-white  text-xs sm:text-[1px]">{item.description}</p>
          </div>
        </div>

        <div className="text-center px-4 py-3 flex flex-col gap-1">
          <h1 className="text-black font-bold underline text-lg sm:text-xl md:text-2xl">
            {item.name}
          </h1>
          <h1 className="text-black font-bold text-base sm:text-lg md:text-xl">
            ₹{item.price}
          </h1>
          <button
            onClick={() => handleBuy(item)}
            className="mt-2 px-4 py-2 text-sm sm:text-base font-semibold w-full text-white bg-green-400 rounded shadow-md hover:bg-green-300 hover:shadow-lg hover:underline transition"
          >
            BUY
          </button>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col gap-10 px-4 py-6">
      {/* PROPERTIES */}
      <h1 className="text-3xl sm:text-4xl text-center font-bold underline cursor-pointer hover:scale-105 transition-transform">
        PROPERTIES
      </h1>
      <div className="flex flex-wrap justify-center gap-6">{renderCards(prop)}</div>

      {/* CARS */}
      <h1 className="text-3xl sm:text-4xl text-center font-bold underline cursor-pointer hover:scale-105 transition-transform">
        CARS
      </h1>
      <div className="flex flex-wrap justify-center gap-6">{renderCards(vehicle)}</div>

      {/* BIKES */}
      <h1 className="text-3xl sm:text-4xl text-center font-bold underline cursor-pointer hover:scale-105 transition-transform">
        BIKES
      </h1>
      <div className="flex flex-wrap justify-center gap-6">{renderCards(motor)}</div>

      <h1 className="bg-black h-[1.2vh] mt-6 w-full">.</h1>
    </div>
  );
}

export default Card;
