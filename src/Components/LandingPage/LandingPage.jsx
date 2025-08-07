import React from "react";
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
import { useState } from "react";
import Telegram from "../Telegram/telegram.jsx";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar onLoginClick={() => setShowModal(!showModal)} />
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
      <>{showModal && <LoginModal onCl={() => setShowModal(false)} />}</>
    </>
  );
}
