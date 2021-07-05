import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
//import VK, {Group, Subscribe} from "react-vk";
import {Helmet} from "react-helmet";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: '17px',
    fontFamily: 'Raleway',
  },
}));

const News = () => {
  const classes = useStyles();

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, height: windowHeight*0.8, width: windowWidth*0.8, color3: '200038'}, 117577518);

  }, []);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.text}>
            <div id="vk_groups"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;