import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pro-form");
  };
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">TailAdmin</h2>
      <ul className="space-y-4">
        <li
          className="font-semibold text-gray-300 hover:text-white cursor-pointer"
          onClick={handleNavigate}
        >
          Forms{" "}
        </li>
        <li
          className="font-semibold text-gray-300 hover:text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Dashboard
        </li>
        <li className="font-semibold text-gray-300 hover:text-white cursor-pointer">
          eCommerce{" "}
          <span className="text-sm bg-blue-600 px-2 rounded ml-2">Pro</span>
        </li>
        <li className="font-semibold text-gray-300 hover:text-white cursor-pointer">
          Analytics{" "}
          <span className="text-sm bg-blue-600 px-2 rounded ml-2">Pro</span>
        </li>
        <li className="font-semibold text-gray-300 hover:text-white cursor-pointer">
          Marketing{" "}
          <span className="text-sm bg-blue-600 px-2 rounded ml-2">Pro</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
