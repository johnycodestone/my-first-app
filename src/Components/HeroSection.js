import React from "react";
import Button from "./Button";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <div id="heroMain">
        <div className="heroText">
          <h1>Muhammad Waqar Saleem<br/> Computer Scientist | FAST`27</h1>
          <p>
            Just another Tech Enthusiast trying his best. Always learning from those around me because I still have a long way to go.<br/><br/>
            My Passion + Drive for Innovation = My Perserverance
            <br />
            <br />
            Because it`s always impossible until done...
          </p>
          <Button id="heroBtn" text="Book a Call" />
        </div>

        <img
          src="waqar-saleem.jpg"
          alt="Waqar Saleem Profile Photo"
          id="heroImage"
        />
      </div>

      
    </div>
  );
};

export default HeroSection;
