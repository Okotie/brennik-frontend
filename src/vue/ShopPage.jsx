import React, {useState} from 'react';
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
import SearchIcon from '@material-ui/icons/Search';


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

const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: "#330066",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: "#330066",
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
  navTop: {
    marginLeft: '20px',
  },
  search: {
  },
  input: {
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    verticalAlign: 'middle',
    width: '90%',
    height: '2em',
    fontSize: '16px',
    marginTop: 'auto',
    border:'none',
    outline: 'none',
    borderRight:'1px solid #727272',
  },
  inputButton: {
    float: 'right',
    height: '100%',
    width: '10%',
    border:'none',
    outline: 'none',
    fontSize: '26px',
    cursor: 'pointer',
    color: '#330066',
    backgroundColor: '#d7d7d7',
    '&:hover' :{
      backgroundColor: '#9966FF',
      color: '#ffffff',
    },
  },
}));

const ShopPage = () => {
  const classes = useStyles();
  const [selectedProduct, setSelectedProduct] = useState(false);

  const handleClick = (product) => () => {
    setSelectedProduct(product);
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
              <label style={{fontFamily: 'Montserrat',}}>От<input className={classes.priceIntervalInput} value={Math.min(...prices)}/></label>
              <label style={{fontFamily: 'Montserrat',}}>До<input className={classes.priceIntervalInput} value={Math.max(...prices)}/></label>
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
          <div className={classes.navTop}>
            <form className={classes.search} style={{maxWidth: '400px',}}>
              <input className={classes.input} type="text" placeholder="Поиск..."/>
              <button type="submit"  className={classes.inputButton}>
                {/*<i className={'fas fa-search'}/>*/}
                <SearchIcon style={{verticalAlign: 'middle',}}/>
              </button>
            </form>
          </div>
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

export default ShopPage;