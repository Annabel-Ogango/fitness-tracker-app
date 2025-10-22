import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  // Load saved workouts from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    setHistory(saved.reverse()); // show most recent first
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] pt-20 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-[#FF6B6B] text-center">
          Workout History
        </h1>

        {history.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p>No workouts logged yet.</p>
            <p className="text-sm mt-2">
              Log your first exercise on the{" "}
              <a href="/" className="text-[#FF6B6B] underline hover:text-[#ff4c4c]">
                Dashboard
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h2 className="text-lg font-semibold text-[#FF6B6B] mb-1">
                  {item.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Sets:</span> {item.sets} |{" "}
                  <span className="font-medium">Reps:</span> {item.reps} |{" "}
                  <span className="font-medium">Weight:</span> {item.weight}kg
                </p>
                <p className="text-gray-500 text-sm">
                  {new Date(item.date).toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
