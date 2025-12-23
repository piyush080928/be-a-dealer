import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './pages/About';
import Bike from './pages/Bike';
import Car from './pages/Car';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import Contact from './pages/Contact';
import Electronic from './pages/Electronic';
import Property from './pages/Property';
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import DashboardLayout from "./Dashboard/DashboardLayout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sellpage" element={<SellPage />} />
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/property" element={<Property />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/car" element={<Car />} />

        {/* Auth route */}
        <Route path="/auth" element={!user ? <AuthModal onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={user ? <DashboardLayout user={user} /> : <Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
