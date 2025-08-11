import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Middle from "../Middle-Section/Middle";
import AfterMiddle from "../AfterMiddle/AfterMiddle";
import Hero from "../Hero/Hero";
import AfterHero from "../AfterHero/AfterHero";
import AfterHeroCard from "../AfterHeroCard/AfterHeroCard";
import { Slider } from "../Slider/Slider";
import AfterSlider from "../AfterSlider/AfterSlider";
import Reviews from "../Reviews/Reviews";
import FAQs from "../Faqs/FAQs";
import Blogs from "../Blogs/Blogs";
import End from "../End/End";
import LoginModal from "../LoginModal/LoginModal.jsx";
import Telegram from "../Telegram/telegram.jsx";
import CreateAccountModal from "../LoginModal/CreateAccount/CreateAccountModal.jsx";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar onSwitchToLogin={() => setShowLogin(true)} />
      <Middle />
      <AfterMiddle />
      <Telegram />
      <Hero />
      <AfterHero />
      <AfterHeroCard />
      <Slider />
      <AfterSlider />
      <Reviews />
      <FAQs />
      <Blogs />
      <End />

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onCl={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {/* Create Account Modal */}
      {showSignup && (
        <CreateAccountModal
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
