import Footer from "../components/Footer";

const History = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      {/* ✅ Removed Header */}

      <main className="flex-grow container mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-[#FF6B6B] mb-2">Workout History</h2>
          <p className="text-gray-600">Sessions logged and progress overview.</p>
        </section>

        <section className="mb-6">
          <input
            type="search"
            placeholder="Search by exercise"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
          />
        </section>

        <section>
          <div className="bg-white p-4 rounded-xl shadow mb-4">
            <h3 className="font-semibold">2025-10-05</h3>
            <ul className="text-sm text-gray-700 mt-2">
              <li>Bench Press: 3x10 @ 40kg</li>
              <li>Squats: 3x12 @ 50kg</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default History;
