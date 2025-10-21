import React, { useState } from "react";
import { Chart, Filler } from "chart.js";
Chart.register(Filler);
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
  const [exercises, setExercises] = useState([]);
  const [form, setForm] = useState({ name: "", sets: "", reps: "", weight: "" });

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddExercise = () => {
    if (!form.name || !form.sets || !form.reps || !form.weight) return;
    setExercises([...exercises, form]);
    setForm({ name: "", sets: "", reps: "", weight: "" });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] pt-20 p-6">
      {/* Removed static nav — dropdown nav handles navigation now */}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#FF6B6B]">Log Workout</h2>
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Exercise name..."
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#FFD93D]"
            />
            <div className="flex gap-2">
              <input
                type="number"
                name="sets"
                placeholder="Sets"
                value={form.sets}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg p-2"
              />
              <input
                type="number"
                name="reps"
                placeholder="Reps"
                value={form.reps}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg p-2"
              />
              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={form.weight}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              onClick={handleAddExercise}
              className="bg-[#6BCB77] text-white w-full py-2 rounded-lg font-semibold hover:bg-[#57a866] transition"
            >
              + Add Exercise
            </button>
          </div>

          {/* Exercise List */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Today's Exercises</h3>
            {exercises.length === 0 ? (
              <p className="text-gray-500">No exercises logged yet.</p>
            ) : (
              <ul className="space-y-2">
                {exercises.map((ex, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between bg-[#F8F9FA] p-2 rounded-lg"
                  >
                    <span>{ex.name}</span>
                    <span>
                      {ex.sets}x{ex.reps} - {ex.weight}kg
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-4 text-[#FF6B6B]">Progress Summary</h2>
          <div className="mb-4">
            <Line data={data} options={options} />
          </div>

          <div className="grid grid-cols-3 text-center mb-4">
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">{exercises.length}</p>
              <p className="text-gray-600 text-sm">Workouts</p>
            </div>
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">
                {exercises.reduce((sum, e) => sum + Number(e.weight || 0), 0)}kg
              </p>
              <p className="text-gray-600 text-sm">Total Weight</p>
            </div>
            <div>
              <p className="text-[#6BCB77] font-bold text-lg">
                {exercises.length
                  ? (
                      exercises.reduce(
                        (sum, e) => sum + Number(e.reps || 0),
                        0
                      ) / exercises.length
                    ).toFixed(1)
                  : 0}
              </p>
              <p className="text-gray-600 text-sm">Avg Reps</p>
            </div>
          </div>

          <button className="bg-[#FFD93D] text-[#2D3436] py-2 rounded-lg font-semibold hover:bg-[#ffca2c] transition">
            View Detailed Progress
          </button>
        </div>
      </div>

      {/* Bottom Section */}
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
