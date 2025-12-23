import React from "react";
import DashboardLayout from '../Dashboard/DashboardLayout';

function Dashboard() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      
      {/* Dashboard Layout */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <DashboardLayout />
      </div>

    </div>
  );
}

export default Dashboard;
