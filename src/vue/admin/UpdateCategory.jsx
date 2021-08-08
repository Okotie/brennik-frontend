import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {getCategoryAPI} from "../api/api";
import {Alert} from "@material-ui/lab";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

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
  const [flagError, setFlagError] = useState(null);
  const [childes, setChildes] = useState(defaultCategory.childes);

  const handleClick = () => {
    getCategoryAPI.createCategory(
      {
        ...request,
        childes: childes.filter(c => c.name !== null && c.name !== ''),
      }
    )
      .then(() => setFlagError(false))
      .catch(() => setFlagError(true));
  };

  const changeName = (e) =>{
    setRequest({
      ...request,
      name: e.target.value,
    });
  };
  const changeDescription = (e) =>{
    setRequest({
      ...request,
      description: e.target.value,
    });
  };

  const changeNameChild = (index, e) =>{

    const childesBuffer = Array.from(childes);
    childesBuffer[index] = {
      ...childesBuffer[index],
      name: e.target.value,
    };
    setChildes(childesBuffer);
  };
  const changeDescriptionChild = (index, e) =>{
    const childesBuffer = Array.from(childes);
    childesBuffer[index] = {
      ...childesBuffer[index],
      description: e.target.value,
    };
    setChildes(childesBuffer);
  };

  const handleAddChildes = () => {
    setChildes([...childes, {name: '', description: '', productIds: [], childes: []}])
  };
  const handleDeleteChildes = (index) => {
    setChildes(childes.filter((_,i) => i !== index ))
  };

  return(
    <>
      <div className={classes.container}>
        <div>
          <h4>Главная категория</h4>
          <div>
            наименование:
            <input className={classes.input} type={'text'} value={request.name} onChange={changeName} />
          </div>
          <div>
            описание:
            <input className={classes.input} style={{width: '100%'}} type={'text'} value={request.description}
                   onChange={changeDescription}/>
          </div>
        </div>
        <div>
          <h4>Подкатегории</h4>
          <ControlPointIcon onClick={handleAddChildes}/>
          { childes.map( c => (
            <div>
              <h5>
                <RemoveCircleOutlineIcon style={{fontSize: 'large'}}
                                         onClick={()=>{handleDeleteChildes(childes.indexOf(c))}}/>
                Подкатегория
              </h5>
              <div>
                наименование:
                <input className={classes.input} type={'text'} value={c.name}
                       onChange={(e)=>{changeNameChild(childes.indexOf(c), e)}}/>
              </div>
              <div>
                описание:
                <input className={classes.input} style={{width: '100%'}} type={'text'} value={c.description}
                  onChange={(e)=>{changeDescriptionChild(childes.indexOf(c), e)}}/>
              </div>
            </div>
          ))}
        </div>
        <div>
          <br/>
          <button onClick={handleClick} style={{fontSize: '16px', backgroundColor: '#651fff',
            color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer'}}>
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