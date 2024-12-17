import React from "react";

const StatCard = ({ icon, title, value, percentage, isIncrease }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-bold mb-1">{value}</h4>
          <p className="text-gray-500">{title}</p>
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
      <div
        className={`mt-2 text-sm ${
          isIncrease ? "text-green-500" : "text-red-500"
        }`}
      >
        {isIncrease ? "▲" : "▼"} {percentage}%
      </div>
    </div>
  );
};

export default StatCard;
