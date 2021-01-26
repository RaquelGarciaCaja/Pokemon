import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  return (
    <ul className="main">
      {props.AllPokemons.map((pokemon) => (
        <li className="main--list" key={pokemon.id}>
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.url}
            types={pokemon.types}
            handlerFavorite={props.handlerFavorite}
          />
        </li>
      ))}
    </ul>
  );
};
export default PokeList;
