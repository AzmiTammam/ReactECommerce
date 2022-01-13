import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-and-icons-container">
          <p className="footer-Paragraph">
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry.
          </p>
          <div className="footerIcons">
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="footer-contactUs">
          <div className="footer-contact-info">
            <h1 className="contatUsTitle">Contact US</h1>
            <p className="contatUsPara">
               +962XXXXXXXX
            </p>
            <p className="contatUsPara">
               email@example.com
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">All rights reserved Copyright © 2021 </p>
    </footer>
  );
}

export default Footer;