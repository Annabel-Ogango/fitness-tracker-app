import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { ...form, photo: photo || "/default-avatar.png" };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setUser(profile);
  };

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    setUser(null);
    setPhoto(null);
    setForm({ name: "", email: "", age: "" });
  };

  if (user) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] pt-28 p-4">
        <div className="max-w-md mx-auto card text-center">
          <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#FF6B6B]" src={user.photo} alt="avatar" />
          <h2 className="text-2xl font-bold text-[#FF6B6B]">{user.name}</h2>
          <p className="text-gray-700">{user.email}</p>
          <p className="text-gray-500 mt-1">Age: {user.age}</p>
          <button onClick={handleLogout} className="btn mt-4">Log Out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-28 p-4">
      <div className="max-w-md mx-auto card">
        <h2 className="text-xl font-semibold text-center text-[#FF6B6B] mb-4">Sign In to Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input name="age" value={form.age} onChange={handleChange} type="number" required className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="w-full text-sm" />
          </div>
          <button type="submit" className="btn">Save & Continue</button>
        </form>
      </div>
    </div>
  );
}
