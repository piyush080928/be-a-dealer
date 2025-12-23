import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bg from '../assets/wall 3.jpg';

export default function Sell() {
  const { state } = useLocation(); // product from dashboard
  const navigate = useNavigate();
  const product = state?.product;

  const [sellerAmount, setSellerAmount] = useState(product?.price || 0);

  if (!product) {
    return (
      <h1 className="text-black text-center font-extrabold text-3xl mt-10">
        ❗ Sell Them - FROM YOUR OWN PRODUCTS.
      </h1>
    );
  }

  const handleDeal = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("User not found, please login");
      navigate("/auth");
      return;
    }

    user.amount = Number(user.amount) + Number(sellerAmount);
    user.purchased = user.purchased.filter((p) => p.id !== product.id);
    localStorage.setItem("user", JSON.stringify(user));

    toast.success(`Sold for ₹${sellerAmount}! Balance updated.`);
    navigate("/dashboard");
  };

  const handleBargain = () => {
    const buyerOffer = Math.floor(
      Math.random() * (sellerAmount + 2000 - (sellerAmount - 1000)) + (sellerAmount - 1000)
    );
    setSellerAmount(buyerOffer);
    toast(`Buyer offers ₹${buyerOffer}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* PRODUCT CARD */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-white shadow-xl rounded-xl overflow-hidden mb-8">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 sm:h-64 md:h-72 object-cover"
        />
        <div className="p-4 text-center font-semibold text-lg sm:text-xl md:text-2xl">
          {product.name} – ₹{product.price}
        </div>
      </div>

      {/* SELLER / BUYER SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
        {/* SELLER (USER) */}
        <div className="flex-1 bg-white/80 shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            YOU (SELLER)
          </h2>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="number"
              value={sellerAmount}
              onChange={(e) => setSellerAmount(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border outline-none text-sm sm:text-base"
            />
            <span className="text-lg sm:text-xl font-bold">₹{sellerAmount}</span>
          </div>
        </div>

        {/* BUYER (COMPUTER) */}
        <div className="flex-1 bg-white/80 shadow-lg rounded-xl p-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">BUYER (Computer)</h2>
          <div className="text-lg sm:text-xl font-bold">
            ₹{Math.floor(Math.random() * (sellerAmount + 2000 - (sellerAmount - 1000)) + (sellerAmount - 1000))}
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-5xl">
        <button
          onClick={handleDeal}
          className="flex-1 px-6 py-2 cursor-pointer shadow-md bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-center"
        >
          DEAL
        </button>
        <button
          onClick={handleBargain}
          className="flex-1 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-center"
        >
          BARGAIN
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex-1 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-center"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
