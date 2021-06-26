import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createProductAPI, filtersAPI, getCategoryAPI, getProductAPI} from "../api/api";
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
}));

const PageFromAdmin = () => {
  const classes = useStyles();
  const [request, setRequest] = useState({vendorCode: '', name: '', description: '', categories: [], images: []});
  const [categories, setCategories] = useState([]);
  const { logout } = React.useContext(AuthContext);
  console.log("categories "+JSON.stringify(categories))

  useEffect(() => {
    setCategories(getCategoryAPI.getAllCategories("() => ()"));
    console.log("useEffect categories "+JSON.stringify(categories))
  }, []);

  const handleClick = () => {
    createProductAPI.createProduct(request);
  };

  const changeId = (e) =>{
    setRequest({
      vendorCode: e.target.value,
      name: request.name,
      description: request.description,
      categories: request.categories,
      images: request.images
    })
  }
  const changeName = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: e.target.value,
      description: request.description,
      categories: request.categories,
      images: request.images
    })
  }
  const changeDescription = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: e.target.value,
      categories: request.categories,
      images: request.images
    });
  }/*
  const changeCategories = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      categories: e.target.value,
      images: request.images
    })
  }*/
  const changeCategories = (category) =>{
    categories.find(c => c.id === category.id) ?
      setCategories([...categories, category]) :
      setCategories(categories.filter(c => c.id !== category.id));

    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      categories: categories,
      images: request.images
    })
  }

  return(
    <>
      <div className={classes.container}>
        <div>
          <br/>
          <button onClick={logout}>Выйти из панели администратора</button>
        </div>
        <h3>Страница добавления товара</h3>
        <div>
          <p>id</p>
          <input type={'text'} value={request.vendorCode} onChange={changeId}/>
        </div>
        <div>
          <p>name</p>
          <input type={'text'} value={request.name} onChange={changeName} />
        </div>
        <div>
          <p>description</p>
          <input type={'text'} value={request.description} onChange={changeDescription}/>
        </div>
        <div>
          <p>категории</p>
          {/*{categories.map(c => (
            (<Chip
              variant="outlined"
              size="small"
              label={c.name}
              onDelete={changeCategories(c)}
              color="primary"
            />)
          ))}*/}
          {/*<input type={'text'} value={request.categories} onChange={changeCategories}/>*/}
        </div>
        <div>
          <br/>
          <button onClick={handleClick}> Создать</button>
        </div>
      </div>
    </>
  )
};

export default PageFromAdmin;