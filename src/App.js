import "./App.css"
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HeroSection/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
