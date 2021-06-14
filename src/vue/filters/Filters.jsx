import React from 'react';
import FilterText from "./FilterText";
import FilterPrice from "./FilterPrice";
import FilterControlLabel from "./FilterControlLabel";
import FilterControlLabelRadio from "./FilterControlLabelRadio";
import FilterCheckbox from "./FilterCheckbox";


const Filters =({filters})=> {
  return (
    <>
      <hr/>
      {filters.map((f) => (
        ((f.type === "text") && <FilterText filter={f}/>) ||
        ((f.type === "priceSlider") && <FilterPrice filter={f}/>) ||
        ((f.type === "controlLabel") && <FilterControlLabel filter={f}/>) ||
        ((f.type === "controlLabelRadio") && <FilterControlLabelRadio filter={f}/>) ||
        ((f.type === "checkbox") && <FilterCheckbox filter={f}/>)
      ))}
    </>
  );
}

export default Filters;