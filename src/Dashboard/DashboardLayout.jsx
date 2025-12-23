import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import { Link } from 'react-router-dom';

function DashboardLayout() {
  const userData = JSON.parse(localStorage.getItem("user")) || { amount: 0, purchased: [] };
  const [user, setUser] = useState(userData);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingId, setEditingId] = useState(null);
  const [newPrice, setNewPrice] = useState(0);

  const handleEditPrice = (itemId) => {
    const updatedUser = { ...user };
    updatedUser.purchased = updatedUser.purchased.map((p) =>
      p.id === itemId ? { ...p, price: Number(newPrice) } : p
    );
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditingId(null);
    setNewPrice(0);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Sidebar */}
      <aside className="flex-shrink-0 w-full md:w-64 h-auto md:h-screen shadow-lg shadow-black/50 px-4 py-6 overflow-y-auto bg-white border-b md:border-b-0 md:border-r dark:bg-gray-900 dark:border-gray-700">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </div>

        <div className="text-center md:text-left mt-4">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="mt-3 text-lg font-semibold text-green-600">
            Balance: ₹{user.amount}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex w-full items-center px-4 py-2 rounded-lg mb-2 ${activeTab === "dashboard" ? "bg-gray-100 dark:bg-gray-800" : ""}`}
            >
              Own Products
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-5 text-center md:text-left">Purchased Products</h1>

            {user.purchased && user.purchased.length > 0 ? (
              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8">
                {user.purchased.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white w-full sm:w-[250px] md:w-[300px] lg:w-[320px] shadow-md hover:shadow-lg shadow-black/50 rounded-lg"
                  >
                    <img src={item.img} className="h-36 sm:h-40 md:h-44 w-full object-cover rounded" />
                    <h2 className="text-lg sm:text-xl font-bold mt-2">{item.name}</h2>

                    {editingId === item.id ? (
                      <div className="flex flex-col sm:flex-row gap-2 items-center mt-2">
                        <input
                          type="number"
                          value={newPrice}
                          onChange={(e) => setNewPrice(e.target.value)}
                          className="px-2 py-1 border rounded-lg w-full"
                        />
                        <button
                          onClick={() => handleEditPrice(item.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 w-full sm:w-auto transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 w-full sm:w-auto transition"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <p className="font-semibold mt-2">₹{item.price}</p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2 mt-3">
                      <button
                        onClick={() => {
                          setEditingId(item.id);
                          setNewPrice(item.price);
                        }}
                        className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600 shadow-md w-full"
                      >
                        Edit Price
                      </button>

                      <Link
                        to='/sellpage'
                        state={{ product: item }}
                        className="bg-green-500 p-2 rounded-lg shadow-md hover:bg-green-600 w-full text-center"
                      >
                        Sell
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-10">No Purchased Items</p>
            )}
          </div>
        )}

        {activeTab === "accounts" && (
          <h1 className="text-2xl sm:text-3xl font-semibold text-center">This is Accounts Screen</h1>
        )}
      </main>
    </div>
  );
}

export default DashboardLayout;
