import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import BlogsPage from "./Components/BlogsPage/BlogsPage";
import Navbar from "./Components/Navbar/Navbar";
import LoginModal from "./Components/LoginModal/LoginModal";
import CreateAccountModal from "./Components/LoginModal/CreateAccount/CreateAccountModal";
import React, { useState } from "react";
import Contact from "./Components/ContactPage/ContactPage.jsx";
import FAQPage from "./Components/FAQPage/FAQPage.jsx";
function AppContent({ setShowLogin }) {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar onSwitchToLogin={() => setShowLogin(true)} />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQPage />} />
      </Routes>
    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <AppContent setShowLogin={setShowLogin} />

      {showLogin && (
        <LoginModal
          onCl={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <CreateAccountModal
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </Router>
  );
}

export default App;
