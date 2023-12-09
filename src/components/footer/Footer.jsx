import React from "react";
import "./footer.css";
import { facebookLogo, twitterLogo, instagramLogo } from "../../assets/index";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="cols">
          <div className="col">
            <div className="footer-logo">
              Sound<span>Dzign</span>
            </div>

            <div className="links">
              <img src={facebookLogo} alt="" />
              <img src={twitterLogo} alt="" />
              <img src={instagramLogo} alt="" />
            </div>
          </div>
          <div className="col">
            <h4>Quick Links</h4>
            <p>Blog</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <p>contact@email.com</p>
            <p>+1 999 9999 999</p>
          </div>
        </div>
        <div className="copy-right">This website is designed in Ⓒ 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
