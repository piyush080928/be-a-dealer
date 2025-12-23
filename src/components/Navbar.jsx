import React, { useState } from "react";
import Logo from '../assets/LOGO.png';
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function Navbar({ user, handleLogout }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleUserClick = () => {
    if (user) navigate("/dashboard");
    else navigate("/auth");
  };

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/sellpage", name: "Sell" },
    { path: "/buypage", name: "Buy" },
    { path: "/bike", name: "Bike" },
    { path: "/car", name: "Car" },
    { path: "/electronic", name: "Electronic" },
    { path: "/property", name: "Property" },
  ];

  return (
    <nav className="relative shadow-md shadow-black/50 bg-white dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        <a href="#">
          <img className="w-auto h-6 sm:h-7" src={Logo} alt="Logo" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `text-[20px] font-sans transition hover:underline ${
                  isActive ? "underline text-green-600" : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop / Mobile Right Icons */}
        <div className="flex items-center gap-4">
          <button onClick={handleUserClick} title={user ? "Go to Dashboard" : "Login"}>
            <FaUser className="text-[22px] cursor-pointer text-gray-600 dark:text-gray-200" />
          </button>

          {user && (
            <button onClick={handleLogout} className="text-red-500 hover:text-red-600 transition">
              Logout
            </button>
          )}

          <NavLink to="/contact">
            <BsFillTelephoneFill className="text-[22px] text-gray-600 dark:text-gray-200" />
          </NavLink>

          {/* Hamburger for mobile */}
          <button
            className="lg:hidden text-gray-600 dark:text-gray-200 text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 gap-6 px-6">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold hover:text-green-600 ${
                  isActive ? "text-green-600" : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
