import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <section id="footer-box">
      <div id="footer">
        <div className="footer-text">
          <h2 className="footer-h">Let`s Connect</h2>
          <p className="footer-p">
            Ready to collaborate or just want to get in touch, I`d love to hear
            from you!
          </p>
        </div>

        <ul id="social-icons">
          <li>LinkedIn</li>
          <li>Email</li>
          <li>GitHub</li>
        </ul>

        <Button text="Download Resume" />
      </div>
    </section>
  );
};

export default Footer;
