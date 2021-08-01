import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createProductAPI, getCategoryAPI} from "../api/api";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  input: {
    margin: '10px',
  },
  img: {
    width: '50px',
  },
  input1: {
    display: 'none',
  },
  listItem: {
    width: '500px',
  },
}));

const UpdateCategory = ({defaultCategory}) => {
  const classes = useStyles();
  const [request, setRequest] = useState(defaultCategory);
  const [flagError, setFlagError] = useState(null)

  const handleClick = () => {
    getCategoryAPI.createCategory(request)
      .then(() => setFlagError(false))
      .catch(() => setFlagError(true));
  };

  const changeName = (e) =>{
    setRequest({
      name: e.target.value,
      description: request.description,
      productIds: request.productIds,
    })
  };
  const changeDescription = (e) =>{
    setRequest({
      name: request.name,
      description: e.target.value,
      productIds: request.productIds,
    });
  };

  return(
    <>
      <div className={classes.container}>
        <div>
          наименование:
          <input className={classes.input} type={'text'} value={request.name} onChange={changeName} />
        </div>
        <div>
          описание:
          <input className={classes.input} style={{width: '100%'}} type={'text'} value={request.description} onChange={changeDescription}/>
        </div>
        <div>
          <br/>
          <button onClick={handleClick} style={{fontSize: '16px', backgroundColor: '#651fff', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer'}}>
            Сохранить
          </button>
        </div>
      </div>
      {flagError !== null && (
        (flagError && <Alert severity="error">При сохранении произошла ошибка</Alert>) ||
        (!flagError && <Alert severity="success">Успешно сохранено</Alert>)
      )}
    </>
  )
};

export default UpdateCategory;