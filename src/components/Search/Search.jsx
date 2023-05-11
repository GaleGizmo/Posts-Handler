import React, { useState } from "react";
import Button from "../Button/Button";
import "./Search.css";

const Search = ({ searchParameter, placeHolderText, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleClear = () => {
    setSearchValue("");
    searchParameter("");
  };
  //componente de filtrado que se ejecuta al pulsar enter//
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchParameter(searchValue);
      onSearch();
    }
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder={placeHolderText}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        onClick={handleClear}
        content="Limpiar"
        specificClass="clear-button"
      />
    </div>
  );
};

export default Search;
