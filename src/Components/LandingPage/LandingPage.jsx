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
import Telegram from "../Telegram/telegram.jsx";

export default function LandingPage() {
  return (
    <>
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
    </>
  );
}
