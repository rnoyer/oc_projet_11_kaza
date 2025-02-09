import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import './App.scss'

function App() {
  return (
    <>
      <Hero heroImage={"./src/assets/hero-bg.png"} heroText={"Chez vous, partout et ailleurs"} isDark={true} />
      <Gallery />
    </>
  );
}

export default App;
