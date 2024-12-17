import React from "react";
import { FiEye, FiShoppingBag, FiBox, FiUsers } from "react-icons/fi";
import StatCard from "../miscellenious/StatCard";
import ChartSection from "../miscellenious/ChartSection";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard
          icon={<FiEye size={24} />}
          title="Total Views"
          value="$3.456K"
          percentage="0.43"
          isIncrease={true}
        />
        <StatCard
          icon={<FiShoppingBag size={24} />}
          title="Total Profit"
          value="$45.2K"
          percentage="4.35"
          isIncrease={true}
        />
        <StatCard
          icon={<FiBox size={24} />}
          title="Total Product"
          value="2.450"
          percentage="2.59"
          isIncrease={true}
        />
        <StatCard
          icon={<FiUsers size={24} />}
          title="Total Users"
          value="3.456"
          percentage="0.95"
          isIncrease={false}
        />
      </div>

      {/* Chart Section */}
      <ChartSection />
    </div>
  );
};

export default Dashboard;
