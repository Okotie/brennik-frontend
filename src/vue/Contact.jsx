import React from 'react';
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
    fontSize: '17px',
    fontFamily: 'Raleway',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  title: {
    margin: '10px',
    marginBottom: '10px',
    fontFamily: 'Roboto',
    fontSize: '25px',
    fontWeight: '800',
    color: '#3b3b3b',
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: '300',
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
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed895cc642d7b97e60033e3acee0a264c9d3b820e73a4e0581ccee7736608da0&amp;source=constructor"
            width="520" height="500" frameBorder="0"/>
          {/*<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab11be14b8b36e840b24fd6a44203fb5ea1bbf761a5c6c706d97c21bf3badb303&amp;source=constructor" width="700" height="600" frameborder="0"/>*/}
        </div>
        <div style={{marginLeft: '10px'}}>
          <div className={classes.title}>Как нас найти</div>
          <div className={classes.text}>
            <Phone className={classes.icon}/><a className={classes.link} href='tel:+79684835404'>+7 (968) 483-54-04</a><br/>
          </div>
          <div className={classes.text}>
            <Location className={classes.icon}/> Москва, ул Чаянова, 18А (подвал слева от 4го подъезда)<br/>
          </div>
          <div className={classes.text}>
            <Clock className={classes.icon}/> Ежедневно с 10:00 до 23:00<br/>
          </div>
          <div className={classes.text}>
            <div className={classes.vkIcon}/> <a className={classes.link} href='https://vk.com/clubbrennik' target='_blank' rel="noreferrer">Мы в "Вконтакте"</a><br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;