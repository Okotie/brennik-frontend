import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AuthContext} from "./AuthProvider";


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

const LoginForAdmin = () => {
  const classes = useStyles();
  const [request, setRequest] = useState({username: '', password: ''});
  const { login } = React.useContext(AuthContext);


  const handleClick = () => {
    login(request);
  };

  const changeUsername = (e) =>{
    setRequest({username: e.target.value, password: request.password})
  };

  const changePassword = (e) =>{
    setRequest({password: e.target.value, username: request.username})
  };

  return(
    <>
      <div className={classes.container}>
        <h3>Страница авторизации</h3>
        <div>
          <p>Логин</p>
          <input type={'text'} value={request.username} onChange={changeUsername}/>
        </div>
        <div>
          <p>Пароль</p>
          <input type={'text'} value={request.password} onChange={changePassword}/>
        </div>
        <br/>
        <button onClick={handleClick}> Авторизоваться</button>
      </div>
    </>
  )
};

export default LoginForAdmin;
