import './App.css';
import Home from '../src/vue/Home'
import Header from "./vue/Header";
import ProductPage from "./vue/ProductPage";
import ShopPage from "./vue/ShopPage";
import About from "./vue/About";
import Contact from "./vue/Contact";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import ScrollArrow from "./vue/ScrollArrow";
import ShoppingBasket from "./vue/shop/ShoppingBasket";
import News from "./vue/News";
import {BasketProvider} from "./vue/cart/BasketProvider";
import {AuthProvider} from "./vue/admin/AuthProvider";
import {FiltersProvider} from "./vue/filters/FiltersProvider";
import AuthFollowingLink from "./vue/admin/AuthFollowingLink";
import {OrderProvider} from "./vue/shop/OrderProvider";

const ScrollToTop = () => {
  const {pathname}= useLocation();
  useEffect(
    ()=>{
      window.scrollTo(0,0);
    }, [pathname]
  );
  return null;
};

function App() {
  return (
    <>
      <Router>
        <BasketProvider>
        <AuthProvider>
        <FiltersProvider>
        <OrderProvider>
          <ScrollToTop/>
          <Header/>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/shop' component={ShopPage}/>
            <Route path='/products/:vendorCode?' component={ProductPage}/>
            <Route path='/news' component={News}/>
            <Route path='/about' component={About}/>
            <Route path='/contacts' component={Contact}/>
            <Route path='/shoppingBasket' component={ShoppingBasket}/>
            <AuthFollowingLink/>

          </Switch>
          <ScrollArrow/>
        </OrderProvider>
        </FiltersProvider>
        </AuthProvider>
        </BasketProvider>
      </Router>
    </>
  );
}

export default App;
