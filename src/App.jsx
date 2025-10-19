import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-6 bg-[#F8F9FA] min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
