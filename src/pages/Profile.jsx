import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [photo, setPhoto] = useState(null);

  // Load saved profile
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  // Handle text field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle profile photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Save profile
  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      ...form,
      photo: photo || "/default-avatar.png", // fallback image
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setUser(profile);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    setPhoto(null);
    setForm({ name: "", email: "", age: "" });
  };

  // If signed in → show profile view
  if (user) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] pt-20 p-6 flex flex-col items-center text-center">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
          <img
            src={user.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#FF6B6B]"
          />
          <h2 className="text-2xl font-bold text-[#FF6B6B] mb-2">{user.name}</h2>
          <p className="text-gray-700">{user.email}</p>
          <p className="text-gray-600 text-sm mt-1">Age: {user.age}</p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-[#FF6B6B] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#ff4c4c] transition"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  // If not signed in → show sign-in form
  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-20 p-6 flex justify-center items-start">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-[#FF6B6B] mb-4 text-center">
          Sign In to Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#FFD93D]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#FFD93D]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#FFD93D]"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full text-sm text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6BCB77] text-white py-2 rounded-lg font-semibold hover:bg-[#57a866] transition"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
