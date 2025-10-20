import { useEffect, useState } from "react";
import { fetchExercises, fetchExercisesByMuscle } from "../api/wgerAPI";

const muscleGroups = [
  { id: 1, name: "Biceps" },
  { id: 2, name: "Shoulders" },
  { id: 4, name: "Chest" },
  { id: 5, name: "Back" },
  { id: 6, name: "Triceps" },
  { id: 7, name: "Abdominals" },
  { id: 8, name: "Quadriceps" },
  { id: 9, name: "Hamstrings" },
  { id: 10, name: "Calves" },
];

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMuscle, setSelectedMuscle] = useState("");

  useEffect(() => {
    async function loadExercises() {
      setLoading(true);
      const data = selectedMuscle
        ? await fetchExercisesByMuscle(selectedMuscle)
        : await fetchExercises(10);
      setExercises(data);
      setLoading(false);
    }
    loadExercises();
  }, [selectedMuscle]);

  return (
    <main className="flex-grow container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#FF6B6B]">Exercises</h2>

      {/* Muscle Filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Filter by Muscle:</label>
        <select
          value={selectedMuscle}
          onChange={(e) => setSelectedMuscle(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/3"
        >
          <option value="">All Muscles</option>
          {muscleGroups.map((muscle) => (
            <option key={muscle.id} value={muscle.id}>
              {muscle.name}
            </option>
          ))}
        </select>
      </div>

      {/* Exercises Grid */}
      {loading ? (
        <p className="text-center text-lg">Loading exercises...</p>
      ) : exercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#6BCB77]">
                {exercise.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Category:</strong>{" "}
                {exercise.category?.name || "Unknown"}
              </p>
              <p className="text-gray-700 text-sm">
                {exercise.description
                  ? exercise.description.replace(/<[^>]+>/g, "")
                  : "No description available."}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No exercises found.</p>
      )}
    </main>
  );
};

export default Exercises;
