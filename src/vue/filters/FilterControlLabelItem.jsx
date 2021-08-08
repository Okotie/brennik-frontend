import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlank";
import Done from "@material-ui/icons/Done";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {Collapse, List, ListItem} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {FiltersContext} from "./FiltersProvider";

const CustomCheckbox = withStyles({
  root: {
    '&$checked': {
      color: "#330066",
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100px',
    },
    nested: {
      paddingLeft: '20px',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FilterControlLabelItem =({category, level, filter, unit, setUnit})=> {
  const [opens, setOpens] = React.useState([]);
  const { filtersToBackend } = React.useContext(FiltersContext);

  const handleChangeDeveloper = (event) => {
    setUnit({ ...unit, [event.target.value]: event.target.checked });
  };

  const handleClick = (id) => {
    if (opens.filter(o => o === id).length > 0) setOpens(opens.filter(o => o !== id));
    else setOpens([...opens, id]);
  };

  const checkOpens = (id) => {
    return opens.filter(o => o === id).length > 0;
  };

  const check = () => {
    return filtersToBackend.filter(f =>
      (f.id === filter.id) &&
      (f.data.values.filter(c => c.id === category.id).length > 0)
    ).length > 0;
  };

  return (
    <>
      <ListItem button onClick={()=>{handleClick(category.id)}} style={{marginLeft: `${level*20}px`}}>
        <FormControlLabel
          style={{width: '100%'}}
          control={
            <CustomCheckbox
              onChange={handleChangeDeveloper}
              icon={<CheckBoxOutline/>}
              checked={check()}
              checkedIcon={<Done/>}
              value={category.id}
            />
          }
          label={<Typography style={{fontFamily: 'Roboto'}}>{category.name}</Typography>}
        />
        {
          (category.childes !== null && category.childes.length > 0) &&
          (checkOpens(category.id) ? <ExpandLess /> : <ExpandMore />)
        }
      </ListItem>
      <Collapse in={checkOpens(category.id)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {(category.childes !== null && category.childes.length > 0) &&
            (category.childes.map(
              child => (
                <FilterControlLabelItem
                  category={child}
                  level={level + 1}
                  filter={filter}
                  unit={unit}
                  setUnit={setUnit}
                  style={{marginLeft: `${level*40}px`}}
                />
              )
            )
          )}
        </List>
      </Collapse>
    </>
  );
}

export default FilterControlLabelItem;