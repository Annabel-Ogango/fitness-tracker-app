import { useEffect, useState } from "react";
import { fetchExercises } from "../api/wgerAPI";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadExercises() {
      try {
        const data = await fetchExercises(50); // fetch more to get richer data

        // Filter: keep exercises that have images or a description
        const filtered = data.filter(
          (ex) =>
            (ex.images && ex.images.length > 0) ||
            (ex.description && ex.description.trim() !== "")
        );

        setExercises(filtered.slice(0, 12)); // Show the first 12
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
        <p className="text-gray-500 text-lg animate-pulse">
          Loading exercises...
        </p>
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
    <div className="pt-20 p-6 max-w-6xl mx-auto animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Exercises</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exercises.map((exercise) => {
          const image =
            exercise.images && exercise.images.length > 0
              ? exercise.images[0].image
              : "https://cdn-icons-png.flaticon.com/512/2964/2964514.png"; // fallback image

          return (
            <div
              key={exercise.id}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
            >
              {/* Exercise Image */}
              <img
                src={image}
                alt={exercise.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />

              {/* Exercise Info */}
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {exercise.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {exercise.description
                  ? exercise.description
                      .replace(/<[^>]*>/g, "")
                      .slice(0, 100) + "..."
                  : "Get ready to move! Details coming soon."}
              </p>
              <p className="text-xs text-gray-500 italic">
                {exercise.muscles?.length
                  ? exercise.muscles.map((m) => m.name).join(", ")
                  : "General fitness"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
