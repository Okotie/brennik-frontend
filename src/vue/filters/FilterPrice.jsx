import React, {useState} from 'react';
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
  title: {
    fontSize: '14px',
    margin: '0px',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    color: '#3b3b3b',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  priceSlider: {
  },
  priceInterval: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  priceIntervalInput: {
    marginLeft: '10px',
    height: '2em',
    width: '70px',
    fontSize: '14px',
  },
}));

const FilterPrice =({filter})=> {
  const classes = useStyles();
  const { changeFilter, filtersToBackend } = React.useContext(FiltersContext);

  const priceMaxMin = {
    min: filter.data.values[0],
    max: filter.data.values[1],
  };

  const [prices, setPrice] = useState([priceMaxMin.min, priceMaxMin.max]);

  React.useEffect(
    ()=>{
      changeFilter({...filter, data: {values: prices}})
    }, [prices]
  );

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <>
      <div className={classes.priceSlider}>
        <div className={classes.title}>{filter.name}, ₽</div>
        <ThemeProvider theme={muiTheme}>
          <Slider
            value={prices}
            min={priceMaxMin.min}
            step={filter.data.values[1]/10}
            max={priceMaxMin.max}
            onChange={handleChangePrice}
            aria-labelledby="range-slider"
          />
        </ThemeProvider>
        <div className={classes.priceInterval}>
          <label style={{fontFamily: 'Montserrat', fontSize: '14px',}}>От<input className={classes.priceIntervalInput} value={Math.min(...prices)}/></label>
          <label style={{fontFamily: 'Montserrat', fontSize: '14px',}}>До<input className={classes.priceIntervalInput} value={Math.max(...prices)}/></label>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default FilterPrice;