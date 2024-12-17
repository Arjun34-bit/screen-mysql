import React from "react";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

// Register the required components for your chart
ChartJS.register(
  CategoryScale, // Register the category scale
  LinearScale, // Register the linear scale for the Y-axis
  BarElement, // Register the bar element for Bar charts
  Title, // Register the title plugin
  Tooltip, // Register the tooltip plugin
  Legend, // Register the legend plugin
  PointElement,
  LineElement
);

const ChartSection = () => {
  const lineData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Product One",
        data: [23, 30, 40, 20, 50, 60, 70],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: true,
      },
      {
        label: "Product Two",
        data: [30, 25, 35, 45, 60, 55, 80],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        data: [60, 80, 60, 70, 50, 40, 90],
      },
      {
        label: "Revenue",
        backgroundColor: "rgba(153, 102, 255, 0.8)",
        data: [40, 60, 80, 60, 70, 50, 100],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Total Revenue & Sales</h3>
        <Line data={lineData} />
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-4">Profit This Week</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default ChartSection;
