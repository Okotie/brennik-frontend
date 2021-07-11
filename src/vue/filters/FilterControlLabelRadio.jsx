import React, {useState} from 'react';
import {createMuiTheme, makeStyles, withStyles} from '@material-ui/core/styles';
import '../../index.css'
import {FiltersContext} from "./FiltersProvider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Done from "@material-ui/icons/Done";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import CircleOutline from "@material-ui/icons/RadioButtonUncheckedOutlined";
import Radio from "@material-ui/core/Radio";

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
        color: '#330066',
      },
      track: {
        color: '#330066'
      },
    },
  }
});

const CustomRadio = withStyles({
  root: {
    '&$checked': {
      color: "#330066",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const useStyles = makeStyles(() => ({
}));

const FilterControlLabel =({filter})=> {
  const classes = useStyles();
  const { changeFilter } = React.useContext(FiltersContext);

  const [type, setType] = useState(filter.values.find(t => Boolean(t.current)).id);

  const handleChangeType = (event) => {
    setType(event.target.value);
    filter.data.values = event.target.value;
    changeFilter(filter);
  };

  return (
    <>
      <div className={'filterBox'}>
        <div className={'filterTitle'}>{filter.name}</div>
        <FormControl column theme={muiTheme}>
          <RadioGroup value={type} onChange={handleChangeType}>
            {filter.values.map(
              (t) =>  (
                <FormControlLabel
                  value={t.id}
                  disabled={t.disabled}
                  control={
                    <CustomRadio
                      icon={<CircleOutline />}
                      checkedIcon={<Done />}
                    />
                  }
                  label={t.name}
                />
              )
            )}
          </RadioGroup>
        </FormControl>
        <hr/>
      </div>
    </>
  );
}

export default FilterControlLabel;