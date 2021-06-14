import React from "react";
import {AuthContext} from "./AuthProvider";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import LoginForAdmin from "./LoginForAdmin";
import PageFromAdmin from "./PageForAdmin";

const AuthFollowingLink = () => {

  const {logged} = React.useContext(AuthContext);

  return(
    <Router>
      <Route path='/login' component={LoginForAdmin}/>
      <Route path='/admin' component={PageFromAdmin}/>
      {!logged && <Redirect to="/login"/>}
      {logged && <Redirect to="/admin"/>}
    </Router>
  )
}

export default AuthFollowingLink