import React from "react";

const StatCard = ({ icon, title, value, percentage, isIncrease }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <div className="block gap-5">
        <div className="text-blue-500">{icon}</div>
        <div className="mt-5">
          <h4 className="text-xl font-bold mb-1">{value}</h4>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">{title}</p>
            <div
              className={`ml-5 text-sm ${
                isIncrease ? "text-green-500" : "text-blue-300"
              }`}
            >
              {percentage}% {isIncrease ? "↑" : "↓"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
