import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import homeHero from "../assets/hero-bg.png"
import './App.scss'

function App() {
  return (
    <>
      <Hero heroImage={homeHero} heroText={"Chez vous, partout et ailleurs"} isDark={true} />
      <Gallery />
    </>
  );
}

export default App;
