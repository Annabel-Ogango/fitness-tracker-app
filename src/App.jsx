import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
