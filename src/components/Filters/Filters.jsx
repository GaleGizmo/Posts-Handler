import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./Filters.css";
//cada search recibe por props el setSearchParameter y el placeHolderText//
const Filters = ({
  setSearchUser,
  setSearchTitle,
  setSearchBody,
  setFiltersActive,
  handleReset,
  filtersActive,
}) => {
  return (
    <div className="filters">
      <h2 class="filters-title">Filtrar</h2>
      <Search
        searchParameter={setSearchUser}
        placeHolderText="Buscar por usuario"
        onSearch={() => setFiltersActive(true)}
      />
      <Search
        searchParameter={setSearchTitle}
        placeHolderText="Buscar en el titulo"
        onSearch={() => setFiltersActive(true)}
      />
      <Search
        searchParameter={setSearchBody}
        placeHolderText="Buscar en el texto"
        onSearch={() => setFiltersActive(true)}
      />
      {filtersActive && (
        <Button
          onClick={handleReset}
          specificClass="clear-button reset-filters"
          content="Borrar filtros"
        />
      )}
    </div>
  );
};

export default Filters;
