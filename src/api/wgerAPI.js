// src/api/wgerAPI.js

// Fetch a list of exercises (default 10)
export async function fetchExercises(limit = 10) {
  try {
    const response = await fetch(
      `https://wger.de/api/v2/exerciseinfo/?language=2&limit=${limit}`
    );
    if (!response.ok) throw new Error("Failed to fetch exercises");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
}

// Fetch exercise details by ID
export async function fetchExerciseById(id) {
  try {
    const response = await fetch(
      `https://wger.de/api/v2/exerciseinfo/${id}/?language=2`
    );
    if (!response.ok) throw new Error("Failed to fetch exercise details");
    return await response.json();
  } catch (error) {
    console.error("Error fetching exercise by ID:", error);
    return null;
  }
}

// Search exercises by muscle group
export async function fetchExercisesByMuscle(muscleId) {
  try {
    const response = await fetch(
      `https://wger.de/api/v2/exercise/?language=2&muscle=${muscleId}&limit=15`
    );
    if (!response.ok) throw new Error("Failed to fetch exercises by muscle");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises by muscle:", error);
    return [];
  }
}
