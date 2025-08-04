import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Middle from "./Components/Middle-Section/Middle";
import AfterMiddle from "./Components/AfterMiddle/AfterMiddle";
import Hero from "./Components/Hero/Hero";
import AfterHero from "./Components/AfterHero/AfterHero";
import AfterHeroCard from "./Components/AfterHeroCard/AfterHeroCard";
import { Slider } from "./Components/Slider/Slider";
import AfterSlider from "./Components/AfterSlider/AfterSlider";
import Reviews from "./Components/Reviews/Reviews";
import FAQs from "./Components/Faqs/FAQs";
import Blogs from "./Components/Blogs/Blogs";
import End from "./Components/End/End";
function App() {
  return (
    <div className={StyleSheet.body}>
      <Navbar />
      <Middle />
      <AfterMiddle />
      <Hero />
      <AfterHero />
      <AfterHeroCard />
      <Slider />
      <AfterSlider />
      <Reviews />
      <FAQs />
      <Blogs />
      <End />
    </div>
  );
}

export default App;
