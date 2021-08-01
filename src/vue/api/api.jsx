import axios from "axios";
import jwt from "jsonwebtoken";


const instance = axios.create({
  baseURL: 'http://45.147.179.34:8080/brennik/'
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
  },
  createProductImages(vendorCode, images){
    let formData = new FormData();
    /*formData.append('images', images);*/
    images.forEach((image) => {
      formData.append('images', image);
    });
    return(
      instance.post(
        `admin/product/images/save?vendorCode=${vendorCode}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`,
            ContentType: 'multipart/form-data',
            AccessControlAllowCredentials: true
          }
        }
      )
        .then(response => {
          console.log(response.data)
        })
    )
  }
}

export const getProductAPI = {
  getProductsByCodes(codes, setProducts){
    return(
      instance
        .post(`product/search/vendorCodes`, codes)
        .then(response => {
          setProducts(response.data);
        })
    )
  },
  getProductByCode(code, setProduct){
    return(
      instance
        .get(`product/search/vendorCode/${code}`)
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getProductImageByCode(code, setImage){
    return(
      instance
        .get(`product/image/${code}`)
        .then(response => {
          setImage(response);
        })
    )
  },
  getProductByMatch(match, setProduct){
    return(
      instance
        .get(`product/search/vendorCode/${match.params.vendorCode}`)
        .then(response => {
          setProduct(response.data);
        })
    )
  },
  getProductByFilters(filters, page, setProduct, setPage){
    return(
      instance
        .post(`product/search`, {filters, page})
        .then(response => {
          setProduct(response.data.content);
          setPage({numberPage: response.data.number + 1, totalPages: response.data.totalPages})
        })
    )
  },
  getNewProduct(setProduct){
    return(
      instance
        .post(`product/search`, {filters: [{id: "flagNew", data: {value: true}}]})
        .then(response => {
          setProduct(response.data.content);
        })
    )
  },
  getSoonProduct(setProduct){
    return(
      instance
        .post(`product/search`, {filters: [{id: "flagSoon", data: {value: true}}]})
        .then(response => {
          setProduct(response.data.content);
        })
    )
  }
}

export const getCategoryAPI = {
  getAllCategories(setCategories){
    return(
      instance.get(`category/search/all`)
        .then(response => {
          setCategories(response.data);
        })
    )
  },
  getCategoryByName(name, setCategory){
    return(
      instance.get(`category/search/name/${name}`)
        .then(response => {
          setCategory(response.data[0]);
        })
    )
  },
  createCategory(request){
    return(
      instance.post(
        `admin/category/create`,
        request,
        {headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}` }}
      )
        .then(response => {
          console.log(response.data)
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

export const formForAPI = {
  sendEmail(formdata){
    return(
      axios
        .post('https://formfor.site/send/3wuj8U4Cn31aNjpdwEhSsQALxVOsSz', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Credentials': true,
          },
        })
        .then((response) => {})
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
