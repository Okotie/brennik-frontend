import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";

const useStyles = makeStyles(() => ({
  input: {
    fontFamily: 'Roboto',
    verticalAlign: 'middle',
    width: '100%',
    height: '2em',
    fontSize: '14px',
    marginTop: 'auto',
    border:'none',
    outline: 'none',
    marginBottom: '5px',
    borderBottom: '1px solid #c4c4c4',
  },
  inputButton: {
    float: 'right',
    height: '100%',
    width: '10%',
    border: 'none',
    outline: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#330066',
    backgroundColor: '#d7d7d7',
    '&:hover': {
      backgroundColor: '#9966FF',
      color: '#ffffff',
    },
  },
}));

let timeOut = 0;

const FilterText =({filter})=> {
  const classes = useStyles();
  const { changeFilter, deleteFilterById } = React.useContext(FiltersContext);

  const [text, setText] = useState("");

  React.useEffect(
    ()=>{

      if (timeOut) clearTimeout(timeOut);

      timeOut = setTimeout(() => (
      (text.length > 0) ?
        (changeFilter({...filter, data: {value: text}})) :
        (deleteFilterById(filter.id))
      ), 2000);

    }, [text]
  );

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form className={'filterBox'} style={{maxWidth: '400px',}} onSubmit={(e) => {e.preventDefault()}}>
        <div className={'filterTitle'}>поиск по названию</div>
        <input className={classes.input} value={text} type="text" placeholder={"введите "+filter.name+"..."} onChange={changeText} />
      </form>

    </>
  );
}

export default FilterText;