import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Phone from '@material-ui/icons/Phone';
import Location from '@material-ui/icons/AddLocationOutlined';
import Clock from '@material-ui/icons/AccessAlarmOutlined';
import vkIcon from '../assets/icons/vk-icon.png'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    display: '-webkit-flex',
    display: 'flex',
    fontSize: '17px',
    fontFamily: 'Raleway',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  title: {
    margin: '10px',
    marginBottom: '10px',
    fontFamily: 'Montserrat',
    fontSize: '25px',
    fontWeight: '800',
    color: '#3b3b3b',
  },
  text: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    margin: '10px',
    color: '#131313',
    verticalAlign: 'middle',
  },
  vkIcon: {
    height: '25px',
    width: '25px',
    backgroundImage: `url(${vkIcon})`,
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  icon: {
    verticalAlign: 'middle',
  },
  link: {
    textDecoration: 'none',
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab11be14b8b36e840b24fd6a44203fb5ea1bbf761a5c6c706d97c21bf3badb303&amp;source=constructor" width="700" height="600" frameborder="0"></iframe>
        </div>
        <div>
          <div className={classes.title}>Как нас найти</div>
          <div className={classes.text}>
            <Phone className={classes.icon}/><a className={classes.link} href='tel:+79161599341'>+7 (925) 059-84-32</a><br/>
          </div>
          <div className={classes.text}>
            <Location className={classes.icon}/> Москва, ул Чаянова, 18А (подвал слева от 4го подъезда)<br/>
          </div>
          <div className={classes.text}>
            <Clock className={classes.icon}/> Ежедневно с 10:00 до 23:00<br/>
          </div>
          <div className={classes.text}>
            <div className={classes.vkIcon}/> <a className={classes.link} href='https://vk.com/clubbrennik' target='_blank'>Мы в "Вконтакте"</a><br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;