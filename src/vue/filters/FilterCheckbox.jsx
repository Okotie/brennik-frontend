import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlank";
import Done from "@material-ui/icons/Done";
import Checkbox from "@material-ui/core/Checkbox";

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
  const { changeFilter, deleteFilterById } = React.useContext(FiltersContext);

  const [check, setCheck] = useState(false);

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
      <div>
        <FormControlLabel
          label={filter.name}
          labelPlacement="start"
          control={
            <CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />}
                            value={filter.value}/>
          }
        />
      </div>
      <hr/>
    </>
  );
}

export default FilterCheckbox;