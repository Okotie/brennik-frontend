import React from "react";
import {authAPI, checkValidToken} from "../api/api";


const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [logged, setLogged] = React.useState(checkValidToken());

  React.useEffect(
    ()=>{
      setLogged(checkValidToken());
    }, []
  );

  const login = (request) => {
    authAPI.login(request.username, request.password)
      .then(() => {setLogged(true);})
      .catch(() => {setLogged(false);});
  };

  const logout = () => {
    authAPI.logout();
    setLogged(checkValidToken());
  };

  return (
    <AuthContext.Provider
      value={{
        logged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };