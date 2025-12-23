import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import wall from "../assets/bungalow.jpg";
import logo from '../assets/LOGO.png';
import toast, { Toaster } from "react-hot-toast";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const signupSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
});

function AuthModal({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : signupSchema),
  });

  const onSubmit = (data) => {
    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
        const updatedUser = { ...storedUser, amount: 50000 };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        onLogin(updatedUser);
        toast.success("₹50,000 credited! Check your dashboard.");
        setTimeout(() => navigate("/dashboard"), 800);
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      const newUser = { 
        name: data.name,
        email: data.email,
        password: data.password,
        amount: 50000
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      onLogin(newUser);
      toast.success("Account created! ₹50,000 credited.");
      setTimeout(() => navigate("/dashboard"), 2000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <Toaster position="top-center" />

      {/* LEFT IMAGE */}
      <div className="hidden lg:block lg:w-2/3 relative">
        <img src={wall} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">BE A DEALER</h2>
            <p className="mt-3 text-white text-sm sm:text-base">Welcome! Please Register or Login.</p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex justify-center items-center w-full lg:w-1/3 px-6 py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <Link to="/" className="text-sm text-gray-700 hover:underline">← Back to Home</Link>
          <div className="text-center mt-4">
            <img src={logo} alt="logo" className="mx-auto w-auto h-8 sm:h-10 mb-2" />
            <p className="text-gray-500 dark:text-gray-300">
              {isLogin ? "Sign in to access your account" : "Create a new account"}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm mb-1 text-gray-600 dark:text-gray-200">Full Name</label>
                <input {...register("name")} type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-green-600 dark:bg-gray-800 dark:text-gray-200"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>
            )}

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-200">Email</label>
              <input {...register("email")} type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-green-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600 dark:text-gray-200">Password</label>
              <input {...register("password")} type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-green-600 dark:bg-gray-800 dark:text-gray-200"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <button type="submit"
              className="w-full bg-green-400 text-black py-2 rounded-lg shadow-md hover:bg-green-300 hover:underline transition"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-400">
            {isLogin ? (
              <>Don’t have an account? <button type="button" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">Sign up</button></>
            ) : (
              <>Already have an account? <button type="button" onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Login</button></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
