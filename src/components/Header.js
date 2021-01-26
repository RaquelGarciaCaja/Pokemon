import React from "react";
import logo from "../images/logo-pokemon.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header--logo" src={logo} alt="pokemon" />
    </header>
  );
};
export default Header;
