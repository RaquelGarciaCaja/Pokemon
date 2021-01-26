import React from "react";
import logo from "../images/logo-pokemon.png";
import "../stylesheets/Footer.scss";

const Header = () => {
  return (
    <footer className="footer">
      <img className="footer--logo" src={logo} alt="pokemon" />
      <a href="raquelgc8@gmail.com" className="js-icon-mail js-email" target="_blank" title="Email">
        <i className="far fa-envelope footer--social"></i>
      </a>
      <span className="footer--bold">|</span>
      <a
        href="https://www.linkedin.com/in/raquelgarciacaja/"
        className="js-icon-linkedin footer--social"
        target="_blank"
        title="Linkedin"
      >
        <i className="icons js-icons fab fa-linkedin-in"></i>
      </a>
      <span className="footer--bold">|</span>
      <a
        href="https://github.com/RaquelGarciaCaja"
        className="js-icon-github footer--social"
        target="_blank"
        title="Github"
      >
        <i className="icons js-icons fab fa-github-alt"></i>
      </a>{" "}
    </footer>
  );
};
export default Header;
