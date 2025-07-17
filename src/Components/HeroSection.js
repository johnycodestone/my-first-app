import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <div id="heroMain">
        <div className="heroText">
          <h1>Muhammad Waqar Saleem: Computer Scientist | FAST`27</h1>
          <p>
            My Passion + Drive for Innovation = My Perserverance
            <br />
            <br />
            Because it`s always impossible until done...
          </p>
        </div>

        <img
          src="waqar-saleem.jpg"
          alt="Waqar Saleem Profile Photo"
          id="heroImage"
        />
      </div>

      <Button id="heroBtn" text="Book a Call" />
    </div>
  );
};

export default HeroSection;
