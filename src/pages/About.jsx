import React from "react";
import AboutPage from "../About/AboutPage";
import Features from "../About/Features";
import Footer from '../Footer/Footer';

function About() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">

      {/* ABOUT PAGE */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <AboutPage />
      </div>

      {/* FEATURES */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <Features />
      </div>

      {/* FOOTER */}
      <div className="w-full mt-auto">
        <Footer />
      </div>

    </div>
  );
}

export default About;
