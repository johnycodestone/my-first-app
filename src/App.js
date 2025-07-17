
import "./App.css";
import "./Button.css";
import "./Navbar.css";
import "./HeroSection.css";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  const name = "Muhammad Waqar Saleem";
  const profession = "Computer Scientist - Prospective AI/ML Engineer";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HeroSection/>
        {/* <h1>{name}: {profession}</h1> 
        <Button/> */}
        {/* <img src="waqar-saleem.jpg" alt="Waqar_Saleem_Profile_Picture"/> */}
      </header>
    </div>
  );
}

export default App;
