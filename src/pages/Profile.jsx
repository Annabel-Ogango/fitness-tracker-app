import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#2D3436]">
      {/* ✅ Removed Header */}

      <main className="flex-grow container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-[#FF6B6B]">Profile</h2>

        <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#6BCB77]"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Age</label>
              <input
                type="number"
                placeholder="Age"
                className="border border-gray-300 rounded-lg w-full px-3 py-2"
              />
            </div>

            <button className="bg-[#FF6B6B] text-white px-4 py-2 rounded-lg hover:bg-[#e65a5a] transition">
              Save
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
