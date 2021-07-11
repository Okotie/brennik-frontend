import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createProductAPI, getCategoryAPI} from "../api/api";
import {AuthContext} from "./AuthProvider";
import {Chip} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '2%',
    fontSize: '17px',
    fontFamily: 'Raleway',
    alignItems: 'center',
  },
  input: {
    margin: '10px',
  },
}));

const defaultProduct = {
  vendorCode: '',
  name: '',
  description: '',
  price: null,
  count: 0,
  flagNew: false,
  flagSoon: false,
  categories: [],
  images: []
};

const PageFromAdmin = () => {
  const classes = useStyles();
  const [request, setRequest] = useState(defaultProduct);
  const [categories, setCategories] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);
  const { logout } = React.useContext(AuthContext);

  useEffect(() => {
    getCategoryAPI.getAllCategories(setCategories)
  }, []);

  const handleClick = () => {
    createProductAPI.createProduct(request);
  };

  const changeId = (e) =>{
    setRequest({
      vendorCode: e.target.value,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    })
  };
  const changeName = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: e.target.value,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    })
  };
  const changeDescription = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: e.target.value,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changePrice = (e) =>{
    console.log('changePrice: ' + e.target.value);
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: e.target.value,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeCount = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: e.target.value,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeFlagNew = () =>{
    console.log('changeFlagNew: ' + !request.flagNew);
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: !request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeFlagSoon = () =>{
    console.log('changeFlagSoon: ' + !request.flagSoon);
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: !request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeCategories = () =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: selectedChips,
      images: request.images
    });
  };
  const selectChip = (category) =>{
    selectedChips.find(chip => chip.id === category.id) ?
      setSelectedChips(selectedChips.filter(chip => chip.id !== category.id)) :
      setSelectedChips([...selectedChips, {id: category.id}]);

    changeCategories();
  };

  return(
    <>
      <div className={classes.container}>
        <div>
          <br/>
          <button onClick={logout}>Выйти из панели администратора</button>
        </div>
        <h3>добавления товара</h3>
        <div>
          код товара:
          <input className={classes.input} type={'text'} onChange={changeId}/>
        </div>
        <div>
          наименование:
          <input className={classes.input} type={'text'} onChange={changeName} />
        </div>
        <div>
          описание:
          <input className={classes.input} type={'text'} onChange={changeDescription}/>
        </div>
        <div>
          цена:
          <input className={classes.input} type={'number'} step="any" onChange={changePrice}/>
        </div>
        <div>
          количество:
          <input className={classes.input} type={'number'} onChange={changeCount}/>
        </div>
        <div>
          флаг новинки:
          <input className={classes.input} type={'checkbox'} onChange={changeFlagNew}/>
        </div>
        <div>
          флаг скоро в продаже:
          <input className={classes.input} type={'checkbox'} onChange={changeFlagSoon}/>
        </div>
        <div>
          категории:

            {categories.map(c => (
            (<Chip
              className={classes.input}
              variant={selectedChips.find((chip) => chip.id === c.id) ? "default" : "outlined"}
              clickable={true}
              size="small"
              label={c.name}
              onClick={() => selectChip(c)}
              color="primary"
            />)
          ))}
          {/*<input type={'text'} value={request.categories} onChange={changeCategories}/>*/}
        </div>
        <div>
          <br/>
          <button onClick={handleClick}>Создать</button>
        </div>
      </div>
    </>
  )
};

export default PageFromAdmin;