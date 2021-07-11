import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlank";
import Done from "@material-ui/icons/Done";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: "#330066",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(() => ({
}));

const FilterControlLabel =({filter})=> {
  const classes = useStyles();
  const { changeFilter, deleteFilterById } = React.useContext(FiltersContext);

  const [unit, setUnit] = useState({});

  React.useEffect(
    ()=>{
      let newValues = filter.data.values.filter(c => (
        unit[c.id]
      ));
      (newValues.length > 0) ?
        (changeFilter({...filter, data: {values: newValues}})) :
        (deleteFilterById(filter.id));
    }, [unit]
  );

  const handleChangeDeveloper = (event) => {
    setUnit({ ...unit, [event.target.value]: event.target.checked });
  };

  return (
    <>
      <div className={'filterBox'}>
        <div className={'filterTitle'}>{filter.name}</div>
        <FormGroup>
          {filter.data.values.map(
            (d) =>  (
              <FormControlLabel
                control={<CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />} value={d.id} />}
                label={<Typography style={{fontFamily: 'Roboto'}}>{d.name}</Typography>}
              />
            )
          )}
        </FormGroup>
      </div>
    </>
  );
}

export default FilterControlLabel;