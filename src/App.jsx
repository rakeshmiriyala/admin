import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Payments from "./components/Payments"
import SlotBooking from "./components/SlotBooking";
import Support from "./components/Support";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="payments" element={<Payments />} />
          <Route path="slotbooking" element={<SlotBooking />} />
          <Route path="support" element={<Support/>} />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
