import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';

const useStyles = makeStyles((theme) => ({
  tab: {
    overflow: 'hidden',
  },
  button: {
    fontFamily: 'Roboto',
    padding: '10px',
    fontSize: '25px',
    fontWeight: '800',
    backgroundColor: 'inherit',
    color: '#3b3b3b',
    float: 'left',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderBottom: '3px solid inherit',
    '&:hover' :{
      borderBottom: '3px solid #9D9D9D',
    },
  },
  tabContent: {
    margin: '10px',
    fontFamily: 'Raleway',
    color: '#3b3b3b',
    fontSize: '17px',
  },
}));

const Tabs = ({items}) => {
  const classes = useStyles()
  const [ active, setActive ] = React.useState(0);

  const TabContent = ({ content }) => (
    <div className={classes.tabContent}>
      <p>{content}</p>
    </div>
  );

  const openTab = e => setActive(+e.target.dataset.index);

  return (
    <div>
      <div className={classes.tab}>
        {items.map((n, i) => (
          <button
            className={classes.button}
            onClick={openTab}
            data-index={i}
            style={i === active ? {borderBottom: '3px solid #330066',} : {}}
          >{n.title}</button>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
}

export default Tabs;