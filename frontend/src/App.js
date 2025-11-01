import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoojaForm from './pages/PoojaForm';
import LodgeBooking from './pages/LodgeBooking';
import Admin from './Admin';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Ghoshala from './pages/Ghoshala';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pooja" element={<PoojaForm />} />
          <Route path="/lodge" element={<LodgeBooking />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ghoshala" element={<Ghoshala />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

