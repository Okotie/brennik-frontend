import React from "react";
import {filtersAPI} from "../api/api";

function getSelectedFiltersLocalStorage() {
  return JSON.parse(localStorage.getItem("selectedFilters") || "[]");
};

const FiltersContext = React.createContext();

function FiltersProvider({ children }) {
  const [filters, setFilters] = React.useState([]);
  const [filtersToBackend, setFiltersToBackend] = React.useState(getSelectedFiltersLocalStorage());

  React.useEffect(() => {
    localStorage.setItem("selectedFilters", JSON.stringify(filtersToBackend));
  }, [filtersToBackend]);

  React.useEffect(
    ()=>{
      filtersAPI.getFilters(setFilters);
    }, []
  );

  const dischargeFilter = () => {
    setFiltersToBackend([]);
    filtersAPI.getFilters(setFilters);
  };

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
        deleteFilterById,
        dischargeFilter
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export { FiltersContext, FiltersProvider };