import React from "react";
import Gamedata from '../Data/data'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function PropertyCard() {
 const prop = Gamedata.filter(item => item.category === "MODERN")

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
     <div>
  <h1 className="text-black cursor-pointer transition-all duration-300 ease-in-out text-shadow-md text-shadow-black/50 hover:text-shadow-lg hover:scale-95 hover:underline text-center underline text-3xl font-bold">
    PROPERTIES
  </h1>

  <div className="flex flex-wrap justify-center gap-10 p-4 ">
    {prop.map((p) => (
      <div
        className="w-[400px] shadow-md shadow-black/50 hover:shadow-lg cursor-pointer transition-all ease-in duration-300 overflow-hidden h-[52vh] bg-gray-300 rounded-lg dark:bg-gray-800"
      >
      
        <div className="relative">
          <img
            className="object-cover cursor-pointer transition duration-300 hover:scale-95 sm:h-72 w-full h-[200px]"
            src={p.img}
            alt={p.name}
          />

         
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[1px] p-2">
            <p className="text-white text-[9.5px] leading-tight">
            {p.description}
            </p>
          </div>
        </div>

        <div className="text-center items-center justify-center px-4 py-2">
          <h1 className="text-black font-bold underline text-[25px]">{p.name}</h1>
          <h1 className="text-black font-bold text-[20px]">₹{p.price}</h1>

          <button  onClick={() => handleBuy(p)} className="px-4 py-2 text-[15px] w-full font-semibold cursor-pointer text-white ease-in shadow-md shadow-black/50 hover:shadow-lg uppercase transition-colors duration-300 transform bg-green-400 rounded hover:bg-green-300 hover:underline focus:outline-none">
            BUY
          </button>
        </div>
      </div>
    ))}
  </div>
  </div>

 )
}

export default PropertyCard;