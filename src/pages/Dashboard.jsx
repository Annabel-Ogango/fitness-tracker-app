import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  // Mock chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Weight Lifted (kg)",
        data: [200, 250, 300, 280, 320],
        borderColor: "#FF6B6B",
        backgroundColor: "rgba(255,107,107,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] p-6">
      {/* Top Navigation */}
      <nav className="flex justify-around bg-[#FF6B6B] text-white p-4 rounded-2xl shadow-md mb-6">
        <button className="font-semibold hover:text-[#FFD93D]">Dashboard</button>
        <button className="hover:text-[#FFD93D]">Exercises</button>
        <button className="hover:text-[#FFD93D]">History</button>
        <button className="hover:text-[#FFD93D]">Profile</button>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section: Log Workout */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#FF6B6B]">Log Workout</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Search Exercise..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#FFD93D]"
            />
            <div className="flex gap-2">
              <input type="number" placeholder="Sets" className="w-1/3 border border-gray-300 rounded-lg p-2" />
              <input type="number" placeholder="Reps" className="w-1/3 border border-gray-300 rounded-lg p-2" />
              <input type="number" placeholder="Weight (kg)" className="w-1/3 border border-gray-300 rounded-lg p-2" />
            </div>
            <button className="bg-[#6BCB77] text-white w-full py-2 rounded-lg font-semibold hover:bg-[#57a866] transition">
              + Add Exercise
            </button>
          </div>

          {/* Today's Exercises */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Today's Exercises</h3>
            <ul className="space-y-2">
              <li className="flex justify-between bg-[#F8F9FA] p-2 rounded-lg">
                <span>Bench Press</span>
                <span>3x10 - 60kg</span>
              </li>
              <li className="flex justify-between bg-[#F8F9FA] p-2 rounded-lg">
                <span>Squats</span>
                <span>4x8 - 80kg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Progress Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4 text-[#FF6B6B]">Progress Summary</h2>

          <div className="mb-4">
            <Line data={data} options={options} />
          </div>

          <div className="grid grid-cols-3 text-center mb-4">
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">12</p>
              <p className="text-gray-600 text-sm">Workouts</p>
            </div>
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">860kg</p>
              <p className="text-gray-600 text-sm">Total Weight</p>
            </div>
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">10</p>
              <p className="text-gray-600 text-sm">Avg Reps</p>
            </div>
          </div>

          <button className="bg-[#FFD93D] text-[#2D3436] py-2 rounded-lg font-semibold hover:bg-[#ffca2c] transition">
            View Detailed Progress
          </button>
        </div>
      </div>

      {/* Bottom Section: Tips / Suggestions */}
      <div className="bg-white mt-6 p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-[#FF6B6B]">💡 Workout Tips</h3>
        <p className="text-gray-700">
          Remember to warm up before each session and track your form to avoid injuries.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
