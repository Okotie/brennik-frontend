import React, {useEffect, useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import {ThemeProvider} from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
        color: '#330066',
      },
      track: {
        color: '#330066'
      },
    },
  }
});

const useStyles = makeStyles(() => ({
  priceInterval: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

let timeOut = 0;

const FilterPrice =({filter})=> {
  const classes = useStyles();
  const { changeFilter, filtersToBackend} = React.useContext(FiltersContext);

  const priceMaxMin = {
    min: filter.data.values[0],
    max: filter.data.values[1],
  };

  const [prices, setPrice] = useState([]);

  useEffect(
    ()=>{

      filtersToBackend.filter(f => f.id === filter.id).length > 0 &&
      filtersToBackend.filter(f => f.id === filter.id).map(ft =>
        ft.data.values !== prices &&
        setPrice([ft.data.values[0], ft.data.values[1]])
      );

      filtersToBackend.filter(f => f.id === filter.id).length < 1 &&
      filter.data.values !== prices &&
      setPrice([filter.data.values[0], filter.data.values[1]]);

    }, [filtersToBackend]
  );

  useEffect(
    ()=>{
      if (timeOut) clearTimeout(timeOut);

      timeOut = setTimeout(() => (
        changeFilter({...filter, data: {values: prices}})
      ), 1000);
    }, [prices]
  );

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <>
      <div className={'filterBox'}>
        <div className={'filterTitle'}>{filter.name}</div>
        <ThemeProvider theme={muiTheme}>
          <Slider
            value={prices}
            min={priceMaxMin.min}
            step={1}
            max={priceMaxMin.max}
            onChange={handleChangePrice}
            aria-labelledby="range-slider"
          />
        </ThemeProvider>
        <div className={classes.priceInterval}>
          <label style={{fontFamily: 'Roboto', fontSize: '14px',}}>
            {'???? ' + Math.min(...prices)}
            {/*<input className={'filterInputPrice'} onChange={changePriceMin} value={pricesInput[0]}/>*/}
          </label>
          <label style={{fontFamily: 'Roboto', fontSize: '14px',}}>
            {'???? ' + Math.max(...prices)}
            {/*<input className={'filterInputPrice'} onChange={changePriceMax} value={pricesInput[1]}/>*/}
          </label>
        </div>
      </div>
    </>
  );
}

export default FilterPrice;