import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Middle from "./Components/Middle-Section/Middle";
import AfterMiddle from "./Components/AfterMiddle/AfterMiddle";
import Hero from "./Components/Hero/Hero";
import AfterHero from "./Components/AfterHero/AfterHero";
import AfterHeroCard from "./Components/AfterHeroCard/AfterHeroCard";

function App() {
  return (
    <div className={StyleSheet.body}>
      <Navbar></Navbar>
      <Middle></Middle>
      <AfterMiddle></AfterMiddle>
      <Hero></Hero>
      <AfterHero></AfterHero>
      <AfterHeroCard></AfterHeroCard>
    </div>
  );
}

export default App;
