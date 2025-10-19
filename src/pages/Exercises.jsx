import { useState } from "react";
import Footer from "../components/Footer";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      {/* ✅ Removed Header */}

      <main className="flex-grow container mx-auto p-6">
        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-[#FF6B6B]">Choose a workout</h2>
          <p className="text-gray-600 mb-4">Tap a routine to view details and start.</p>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <input
              type="search"
              placeholder="Search exercises or routines"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="all">All goals</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
              <option value="mobility">Mobility</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example placeholder cards */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Push Ups</h3>
              <p className="text-sm text-gray-600">Upper body strength exercise</p>
              <button className="mt-3 bg-[#FF6B6B] text-white px-4 py-2 rounded-lg hover:bg-[#e65a5a] transition">
                View Details
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Exercises;
