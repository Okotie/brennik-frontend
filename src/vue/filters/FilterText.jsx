import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../../index.css'
import SearchIcon from "@material-ui/icons/Search";
import {FiltersContext} from "./FiltersProvider";

const useStyles = makeStyles(() => ({
  search: {
  },
  input: {
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    verticalAlign: 'middle',
    width: '90%',
    height: '2em',
    fontSize: '14px',
    marginTop: 'auto',
    border:'none',
    outline: 'none',
    borderRight:'1px solid #727272',
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

  const handleChange = () => {
    (text.length > 0) ?
      (changeFilter({...filter, data: {value: text}})) :
      (deleteFilterById(filter.id));
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form className={classes.search} style={{maxWidth: '400px',}} onSubmit={(e) => {e.preventDefault()}}>
        <input className={classes.input} value={text} type="text" placeholder={filter.name+"..."} onChange={changeText} />
        {/*<button type="submit" className={classes.inputButton} onClick={handleChange}>
          <i className={'fas fa-search'}/>
          <SearchIcon style={{verticalAlign: 'middle',}}/>
        </button>*/}
      </form>
      <hr/>
    </>
  );
}

export default FilterText;