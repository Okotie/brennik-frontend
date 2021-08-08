import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlank";
import Done from "@material-ui/icons/Done";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FilterControlLabelItem from "./FilterControlLabelItem";

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

const FilterControlLabel =({filter})=> {
  const { changeFilter, deleteFilterById } = React.useContext(FiltersContext);

  const [unit, setUnit] = useState({});
  const [textBuffer, setTextBuffer] = useState("");
  const [textCategories, setTextCategories] = useState("");

  React.useEffect(
    ()=>{
      let newValues = filter.data.values.filter(c => (unit[c.id]));

      filter.data.values.forEach(c => {
        if (c.childes.filter(o => (unit[o.id])).length > 0)
          newValues =   newValues.concat(c.childes.filter(c => (unit[c.id])));
      });

      (newValues.length > 0) ?
        (changeFilter({...filter, data: {values: newValues}})) :
        (deleteFilterById(filter.id));
    }, [unit]
  );

  const changeTextCategories = (event) => {
    setTextBuffer(event.target.value);
  };

  const filterByName = () => {
    let filteringCategories = [];
    if (textCategories === '') return filter.data.values;

    filteringCategories = filter.data.values.filter(s => s.name.toLowerCase().includes(textCategories.toLowerCase()));

    filter.data.values
      .forEach(c => {
        if (c.childes.filter(s => s.name.toLowerCase().includes(textCategories.toLowerCase())).length > 0)
          filteringCategories = filteringCategories.concat(c.childes.filter(s => s.name.toLowerCase().includes(textCategories.toLowerCase())));
      });

    return filteringCategories;
  };

  return (
    <>
      <div className={'filterBox'}>
        <div className={'filterTitle'}>{filter.name}</div>
        <div>
          <Paper component="form" style={{whiteSpace: 'nowrap', width: '85%', marginBottom: '10px'}}>
            <InputBase
              placeholder="Поиск"
              value={textBuffer}
              type="text"
              onChange={changeTextCategories}
              style={{paddingLeft: '5px'}}
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon
                fontSize={'small'}
                onClick={()=>{setTextCategories(textBuffer)}}/>
            </IconButton>
          </Paper>
        </div>
        <div className="center-col">
            <FormGroup>
              {filterByName().map(
                (d) =>  (<FilterControlLabelItem category={d} level={0} filter={filter} unit={unit} setUnit={setUnit}/>
                  /*<>
                    <ListItem button onClick={()=>{handleClick(d.id)}}>
                      <FormControlLabel
                        control={<CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />} value={d.id} />}
                        label={<Typography style={{fontFamily: 'Roboto'}}>{d.name}</Typography>}
                      />
                      {
                        (d.childes !== null && d.childes.length > 0) &&
                        (checkOpens(d.id) ? <ExpandLess /> : <ExpandMore />)
                      }
                    </ListItem>
                    <Collapse in={checkOpens(d.id)} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {d.childes.map(
                          child => (
                            <ListItem button onClick={()=>{handleClick(child.id)}}>
                              <FormControlLabel
                                control={<CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />} value={child.id} />}
                                label={<Typography style={{fontFamily: 'Roboto'}}>{child.name}</Typography>}
                              />
                              {
                                (child.childes !== null && child.childes.length > 0) &&
                                (checkOpens(child.id) ? <ExpandLess /> : <ExpandMore />)
                              }
                            </ListItem>
                          )
                        )}
                      </List>
                    </Collapse>
                    {/!*<FormControlLabel
                      control={<CustomCheckbox onChange={handleChangeDeveloper} icon={<CheckBoxOutline />} checkedIcon={<Done />} value={d.id} />}
                      label={<Typography style={{fontFamily: 'Roboto'}}>{d.name}</Typography>}
                    />*!/}
                  </>*/
                )
              )}

            </FormGroup>

        </div>
      </div>
    </>
  );
}

export default FilterControlLabel;