import React, { useState } from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import Header from "./Header";
import Search from "./Search";
import AllPokemons from "../data/AllPokemons";
import Footer from "./Footer";
import Favorite from "./Favorite";

const App = (props) => {
  //favoritos
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  // favorites en array
  const handlerFavorite = (clickFavId) => {
    clickFavId = parseInt(clickFavId);
    const favIndex = favorites.findIndex((pokemonId) => pokemonId === clickFavId);
    if (favIndex === -1) {
      favorites.push(clickFavId);
    } else {
      favorites.splice(favIndex, 1);
    }
    setFavorites([...favorites]);
  };

  const getType = () => AllPokemons.map((pokemon) => pokemon.type);

  //filter
  const handlerfilter = (inputValue) => {
    setSearch(inputValue);
  };
  const handlerfilterType = (data) => {
    setType(data.value);
  };

  const filteredPokemons = AllPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  // .filter((pokemon) => {
  //   return(
  //       if (type === "All") {
  //     return true;
  //   } else {
  //     pokemon.types.map((type) => {
  //       return type === type;
  //     });
  //   }
  //   )
  // });

  return (
    <div>
      <Header />
      <Search
        handlerfilter={handlerfilter}
        handlerfilterType={handlerfilterType}
        getType={getType}
      />
      <Favorite handlerclick={props.handlerclick} favorite={favorites.length} />
      <PokeList AllPokemons={filteredPokemons} handlerFavorite={handlerFavorite} />
      <Footer />
    </div>
  );
};
export default App;
