
import "./App.css";
import "./Button.css";
import "./Navbar.css";
import "./HeroSection.css";
import "./Footer.css";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  const name = "Muhammad Waqar Saleem";
  const profession = "Computer Scientist - Prospective AI/ML Engineer";
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
