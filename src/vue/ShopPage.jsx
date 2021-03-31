import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import {products} from "../assets/mock/product";
import Product from "./Product";
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutline from '@material-ui/icons/CheckBoxOutlineBlank';
import Done from '@material-ui/icons/Done';
import CircleOutline from '@material-ui/icons/RadioButtonUncheckedOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: '#9966FF',
      },
      track: {
        color: '#9966FF'
      },
    },
  }
});

const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: "#9966FF",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: "#9966FF",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    display: '-webkit-flex',
    display: 'flex',
    fontSize: '17px',
    fontFamily: 'Raleway',
  },
  sidebar: {
    height: '100%',
    minWidth: '20%',
    margin: '10px',
  },
  main: {
  },
  products: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  title: {
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
    fontSize: '16px',
  },
}));

const ProductPage = () => {
  const classes = useStyles();
  const [selectedProduct, setselectedProduct] = useState(false);

  const handleClick = (product) => () => {
    setselectedProduct(product);
  };

  //слайдер Цена
  const priceMaxMin = {
    min: 0,
    max: 10000,
  };
  
  const [prices, setPrice] = useState([priceMaxMin.min, priceMaxMin.max]);

  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  //чекбокс Производитель
  const developers = [
    {
      id: 'p1',
      name: 'Производитель 1',
      checked: true,
    },
    {
      id: 'p2',
      name: 'Производитель 2',
      checked: false,
    },
    {
      id: 'p3',
      name: 'Производитель 3',
      checked: false,
    },
    {
      id: 'p4',
      name: 'Производитель 4',
      checked: false,
    },
  ];

  const [developer, setDeveloper] = useState({});

  const handleChangeDeveloper = (event) => {
    setDeveloper({ ...developer, [event.target.value]: event.target.checked });
  };

  //радио Тип продукта
  const types = [
    {
      id: 'all',
      name: 'Все',
      current: true,
      disabled: false,
    },
    {
      id: 'desktopGames',
      name: 'Настольные игры',
      current: false,
      disabled: false,
    },
    {
      id: 'wargames',
      name: 'Варгеймы',
      current: false,
      disabled: false,
    },
    {
      id: 'addition',
      name: 'Дополнения',
      current: false,
      disabled: false,
    },
    {
      id: 'disabled',
      name: 'Скоро появится новый тип',
      current: false,
      disabled: true,
    },
  ];

  const [type, setType] = useState(types.find(t => Boolean(t.current)).id);

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <div className={classes.priceSlider}>
            <div className={classes.title}>Цена, ₽</div>
            <ThemeProvider theme={muiTheme}>
              <Slider
                value={prices}
                min={priceMaxMin.min}
                step={100}
                max={priceMaxMin.max}
                onChange={handleChangePrice}
                aria-labelledby="range-slider"
              />  
            </ThemeProvider>
            <div className={classes.priceInterval}>
              <label>От<input className={classes.priceIntervalInput} value={Math.min(...prices)}/></label>
              <label>До<input className={classes.priceIntervalInput} value={Math.max(...prices)}/></label>
            </div>
          </div>
          <hr/>
          <div>
            <div className={classes.title}>Производитель</div>
            <FormGroup column>
              {developers.map(
                (d) =>  (
                  <FormControlLabel
                    control={<CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />} value={d.id} />}
                    label={d.name}
                  />
                )
              )}
            </FormGroup>
          </div>
          <hr/>
          <div>
            <div className={classes.title}>Тип</div>
            <FormControl column theme={muiTheme}>
              <RadioGroup value={type} onChange={handleChangeType}>
                {types.map(
                  (t) =>  (
                    <FormControlLabel 
                      value={t.id} 
                      disabled={t.disabled} 
                      control={
                        <CustomRadio
                          icon={<CircleOutline />}
                          checkedIcon={<Done />}
                        />  
                      } 
                      label={t.name} 
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          </div>
          <hr/>
        </div>

        <div className={classes.main}>
          <div className={classes.products}>
            {products.map(({ id, imgs, description,name, ...props }) => (
              <Product
                id={id}
                name={name}
                price={props.price}
                flagNew={props.flagNew}
                flagSoon={props.flagSoon}
                image={imgs[0]}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;