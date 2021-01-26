import React from "react";
import "../stylesheets/Search.scss";

const Search = (props) => {
  console.log(props);
  const handlerChange = (ev) => {
    const inputValue = ev.target.value;
    props.handlerfilter(inputValue);
  };
  const handlerChangeRadio = (ev) => {
    const inputValue = ev.target.value;
    const inputname = ev.target.name;
    props.handlerfilterType({
      name: inputname,
      value: inputValue,
    });
  };

  const typesPokemons = props.getType((type, index) => {
    console.log(props.getType);
    return (
      <label htmlFor="" key={index}>
        <input type="radio" name="type" value={type} onChange={handlerChangeRadio} />
        {type}
      </label>
    );
  });

  return (
    <div>
      <form className="search" action="">
        <label className="search--label" htmlFor="">
          Buscador:
        </label>
        <input
          className="search--input"
          type="text"
          placeholder=" Ej: bulbasur"
          onChange={handlerChange}
        />
      </form>
      <form action="">{typesPokemons}</form>
    </div>
  );
};
export default Search;
