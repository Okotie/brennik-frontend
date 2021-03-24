import './App.css';
import Home from '../src/vue/Home'
import Header from "./vue/Header";
import ProductPage from "./vue/ProductPage";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import ScrollArrow from "./vue/ScrollArrow";

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
        <ScrollToTop/>
        <Header/>
        <Switch>

          <Route path='/' component={Home} exact />
          <Route path='/products' component={ProductPage} exact />
          <Route path='/products/:id' component={ProductPage} exact />
        </Switch>


        <ScrollArrow/>
      </Router>
    </>
  );
}

export default App;
