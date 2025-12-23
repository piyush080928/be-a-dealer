import React from "react";
import WallPaper from "../components/WallPaper";
import Card from "../Cards/Card";
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      
      {/* WALLPAPER */}
      <div className="w-full">
        <WallPaper />
      </div>

      {/* CARDS */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <Card />
      </div>

      {/* FOOTER */}
      <div className="w-full mt-auto">
        <Footer />
      </div>

    </div>
  );
}

export default Home;
