import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AuthContext} from "./AuthProvider";
import {Alert} from "@material-ui/lab";


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

let timeOut = 0;

const LoginForAdmin = () => {
  const classes = useStyles();
  const [request, setRequest] = useState({username: '', password: ''});
  const [error, setError] = useState(false);
  const { logged, login } = React.useContext(AuthContext);


  const handleClick = () => {
    login(request);

    if (timeOut) clearTimeout(timeOut);

    timeOut = setTimeout(() => (
      logged ? setError(false) : setError(true)
    ), 1000);

    console.log('login: ' + logged);
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
        {error && <Alert severity="error">Введен неверный логин или пароль</Alert>}
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
