import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bg from "../assets/wall 3.jpg";

export default function Buy() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const [buyerAmount, setBuyerAmount] = useState("");
  const [sellerAmount, setSellerAmount] = useState(product?.price || 0);

  if (!product) {
    return (
      <h1 className="text-black font-bold text-center text-2xl sm:text-3xl mt-10">
        ❗ No product found — BUY THEM FROM THEIR SECTIONS.
      </h1>
    );
  }

  // SMART NEGOTIATION
  const handleBuyerChange = (e) => {
    const value = e.target.value;
    setBuyerAmount(value);

    if (!value) {
      setSellerAmount(product.price);
      return;
    }

    const buyer = Number(value);
    const original = Number(product.price);

    let sellerReply;

    if (buyer < original * 0.4) {
      sellerReply = original - Math.floor(Math.random() * 500);
    } else if (buyer < original) {
      sellerReply =
        Math.floor((buyer + original) / 2) +
        Math.floor(Math.random() * 200 - 100);
    } else {
      sellerReply = buyer - Math.floor(Math.random() * 200);
    }

    if (sellerReply < original * 0.5) sellerReply = original * 0.5;

    setSellerAmount(Math.floor(sellerReply));
  };

  const handleDeal = () => {
    if (!buyerAmount) {
      toast.error("Enter your amount!");
      return;
    }

    let user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please login first!");
      navigate("/auth");
      return;
    }

    user = JSON.parse(user);

    const pay = Number(buyerAmount);
    const balance = Number(user.amount);

    if (pay > balance) {
      toast.error("Not enough balance!");
      return;
    }

    user.amount = balance - pay;

    if (!user.purchased) user.purchased = [];
    user.purchased.push(product);

    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Deal Successful!");
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 bg-cover bg-center bg-no-repeat px-4 sm:px-6"
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

      {/* BUYER & SELLER BOXES */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
        {/* BUYER BOX */}
        <div className="flex-1 bg-white/80 shadow-lg rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">BUYER</h2>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="number"
              placeholder="Enter Your Amount"
              value={buyerAmount}
              onChange={handleBuyerChange}
              className="flex-1 px-4 py-2 rounded-lg border outline-none text-sm sm:text-base"
            />
            <span className="text-lg sm:text-xl font-bold">₹{buyerAmount || 0}</span>
          </div>
        </div>

        {/* SELLER BOX */}
        <div className="flex-1 bg-white/80 shadow-lg rounded-xl p-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">SELLER</h2>
          <div className="text-lg sm:text-xl font-bold">₹{sellerAmount}</div>
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
          onClick={() => toast("Bargain mode ON")}
          className="flex-1 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-center"
        >
          BARGAIN
        </button>
        <button
          onClick={() => {
            toast("Transaction Cancelled");
            navigate("/");
          }}
          className="flex-1 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-center"
        >
          REJECT
        </button>
      </div>
    </div>
  );
}
