import axios from "axios";
import jwt from "jsonwebtoken";


const instance = axios.create({
  baseURL: 'http://192.168.1.67:8080/brennik/'
});

export const authAPI = {
  login(username, password) {
    return (
      instance.post(`auth/login`, {username, password})
        .then(response => {
          const token = JSON.stringify(response.data.token);
          localStorage.setItem('jwt', token);
        })
        .catch((err) => {
          alert('Введен неверный логин или пароль')
          console.log('LOGIN ERROR: ' + err);
          throw err;
        })
    )
  },
  logout() {
    return localStorage.removeItem('jwt');
  },
};

export const createProductAPI = {
  createProduct(request){
    return(
      instance.post(
        `admin/product/create`,
        request,
        {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}` }}
        )
        .then(response => {
          console.log(response.data)
        })
    )
  }
}

export const getProductAPI = {
  getAllProduct(setProduct){
    return(
      instance
        .get(`product/search/all`)
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getProductsByCodes(codes, setProducts){
    return(
      instance
        .post(`product/search/vendorCodes`, codes)
        .then(response => {
          setProducts(response.data);
        })
    )
  },
  getProductByCode(match, setProduct){
    return(
      instance
        .get(`product/search/vendorCode/${match.params.vendorCode}`)
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getProductByFilters(filters, setProduct){
    return(
      instance
        .post(`product/search`, {filters})
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getNewProduct(setProduct){
    return(
      instance
        .post(`product/search`, {filters: [{id: "flagNew", data: {value: true}}]})
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getSoonProduct(setProduct){
    return(
      instance
        .post(`product/search`, {filters: [{id: "flagSoon", data: {value: true}}]})
        .then(response => {
          setProduct(response.data);
        })
    )
  }
}

export const getCategoryAPI = {
  getAllCategories(setCategories){
    return(
      instance
        .get(`category/search/all`)
        .then(response => {
          setCategories(response.data);
        })
    )
  },
  getAllCategoriesT(){
    return(
      instance
        .get(`category/search/all`)
        .then(response => {
          console.log('response.data: ' + JSON.stringify(response.data));
          return response.data;
        })
    )
  },
}

export const filtersAPI = {
  getFilters(setFilters){
    return(
      instance.get(`appinit`)
        .then(response => {
          setFilters(response.data.filters);
        })
    )
  }
}

export const checkValidToken = () => {

  let isExpired = false;
  const token = JSON.parse(localStorage.getItem('jwt'));
  let dateNow = new Date();

  if(token != null && token.length > 0){
    let decodedToken = jwt.decode(token);
    if(decodedToken.exp < dateNow.getTime()){
      isExpired = true;
    }
  }
  return isExpired;
}
