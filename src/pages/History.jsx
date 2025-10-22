import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load saved workouts from localStorage
    const saved = localStorage.getItem("workoutHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Workout History</h1>

      {history.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p>No workouts logged yet.</p>
          <p className="text-sm">Start by logging a workout on your Dashboard!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
            .map((entry, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-xl p-4 border hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {entry.name}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="text-sm text-gray-600">
                  {entry.sets && entry.reps && (
                    <p>
                      <span className="font-medium">Sets:</span> {entry.sets},{" "}
                      <span className="font-medium">Reps:</span> {entry.reps}
                    </p>
                  )}
                  {entry.notes && (
                    <p className="italic text-gray-500 mt-1">
                      “{entry.notes}”
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
