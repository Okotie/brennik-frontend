import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlank";
import Done from "@material-ui/icons/Done";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const CustomCheckbox = withStyles({
  root: {
    display:"inline-block",
    '&$checked': {
      color: "#330066",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FilterCheckbox =({filter})=> {
  const { changeFilter, deleteFilterById, filtersToBackend } = React.useContext(FiltersContext);

  const [check, setCheck] = useState(false);

  useEffect(
    ()=>{
      filtersToBackend.filter(f => f.id === filter.id).length > 0 ?
        filtersToBackend.filter(f => f.id === filter.id).map(ft =>
          setCheck(Boolean(ft.data.value))
        ) :
        setCheck(false);

    }, [filtersToBackend]
  );

  React.useEffect(
    ()=>{
      (check) ?
        (changeFilter({...filter, data: {value: check}})) :
        (deleteFilterById(filter.id));
    }, [check]
  );

  const handleChangeDeveloper = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <>
      <div className={'filterBox'}>
        <FormControlLabel
          label={<Typography style={{fontFamily: 'Roboto'}}>{filter.name}</Typography>}
          control={
            <CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />}
                            value={check} checked={check}/>
          }
        />
      </div>
    </>
  );
}

export default FilterCheckbox;