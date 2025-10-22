import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Adds a spacer below it */}
      <div className="h-50"></div>

      {/* Define all routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
