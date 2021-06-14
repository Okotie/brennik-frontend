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

  useEffect(() => {
    // eslint-disable-next-line no-undef
    VK.Widgets.Group("vk_groups", {mode: 0, width: '400', height: '400'}, 1);
  }, [])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.title}>Новости</div>
          <div className={classes.text}>
            <div id="vk_groups"/>
{/*
            <script type="text/javascript" src="https://vk.com/js/api/openapi.js?169"/>
            <div id="vk_groups"/>
            <script type="text/javascript">
              {`VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, height: "400"}, 117577518);`}
            </script>*/}


          </div>
        </div>
      </div>
    </>
  );
}

export default News;