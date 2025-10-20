import { useEffect, useState } from "react";
import { fetchExercises } from "../api/wgerAPI";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadExercises() {
      try {
        const data = await fetchExercises();
        setExercises(data.results || []);
      } catch (err) {
        setError("Failed to load exercises. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadExercises();
  }, []);

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading exercises...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 text-center text-red-500 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="pt-16 p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Exercises</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {/* Exercise Image */}
            {exercise.images && exercise.images.length > 0 ? (
              <img
                src={exercise.images[0].image}
                alt={exercise.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-xl mb-3 text-gray-500">
                No Image
              </div>
            )}

            {/* Exercise Info */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {exercise.name}
            </h2>
            <p className="text-sm text-gray-600">
              {exercise.muscles?.length
                ? exercise.muscles.map((m) => m.name).join(", ")
                : "General fitness"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
