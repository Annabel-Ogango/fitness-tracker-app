export async function fetchExercises() {
  try {
    const response = await fetch(
      "https://wger.de/api/v2/exerciseinfo/?language=2&limit=10"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch exercises");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
}
