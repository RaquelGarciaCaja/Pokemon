import React from "react";
import logoball from "../images/pokeball.jpg";
import "../stylesheets/Favorites.scss";

const Favorite = (props) => {
  return (
    <div className="favorite">
      <h3 className="favorite--title">Añadidos a tu pokedex:{props.favorite}</h3>
      <img className="favorite--ball" src={logoball} alt={logoball} title="pokemon" />
    </div>
  );
};
export default Favorite;
