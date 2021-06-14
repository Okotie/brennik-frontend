import React from "react";
import {filtersAPI} from "../api/api";

const FiltersContext = React.createContext();

function FiltersProvider({ children }) {
  const [filters, setFilters] = React.useState([]);
  const [filtersToBackend, setFiltersToBackend] = React.useState([]);

  React.useEffect(
    ()=>{
      filtersAPI.getFilters(setFilters);
    }, []
  );

  const changeFilter = (filter) => {
    setFiltersToBackend(
      (filtersToBackend.filter(f => (f.id === filter.id)).length > 0) ?
        ([...filtersToBackend.filter(f => (f.id !== filter.id)), filter]) :
        ([...filtersToBackend, filter])
    );
  };

  const deleteFilterById = (filterId) => {
    setFiltersToBackend(
      (filtersToBackend.filter(f => (f.id === filterId)).length > 0) ?
        (filtersToBackend.filter(f => (f.id !== filterId))) :
        (filtersToBackend)
    );
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        filtersToBackend,
        changeFilter,
        deleteFilterById
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export { FiltersContext, FiltersProvider };