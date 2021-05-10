import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Contact from './Contact';
import CarouselBig from './CarouselBig'

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
  info: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
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
  
  carouselImgs: {
    width: '100%',
    overflow: 'hidden',
  },
  img: {
    height: '600px',
    maxHeight: '100%',
    maxWidth: 'auto',
    margin: 'auto',
    display: 'block',
  },
}));

const About = () => {
  const classes = useStyles();

  const images = [
    'https://sun9-35.userapi.com/impg/ZnHKb0EXUgmhbJ6CpeHA0o1CX-olgH8MGqUkLw/jIS72ly9l5o.jpg?size=2560x1707&quality=96&sign=cd4b604b850b927316b8d4a3d5f269c4&type=album',
    'https://sun9-72.userapi.com/impg/uMKj0itcwhUhdEBTSfnxvSSv_6D5NW3N3auHiQ/aEcp3xdanc4.jpg?size=2560x1707&quality=96&sign=386685acc9fa3e07b088a771ce294a03&type=album',
    'https://sun9-59.userapi.com/impg/JyfzOCciavz-82c6xSEtaWXr7-mcFJ76htLOkg/M_MmjdPNfms.jpg?size=2560x1707&quality=96&sign=ffd5a6211d7b8986876510e01f04096e&type=album',
  ];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <div className={classes.title}>О нас</div>
          <div className={classes.text}>
            «Лавка Орка» появилась в 2013г., хотя идея ее создания зародилась у меня гораздо раньше.<p/>
            Всё началось с увлеченных своим хобби людей, которые встречались, чтобы поиграть в любимые игры, обсудить новинки и пообщаться с единомышленниками. Мы мечтали о том, что однажды у нас появится место, где мы сможем встречаться в любое время, где будут такие же фанаты своего хобби, как и мы, где мы сможем развивать наше общее увлечение.<p/>
            Мы росли и развивались, хотя и бывали и трудности, но мы справлялись с ними, ведь нам, как и сейчас, нравилось то, что мы делаем :-) Мы проводили турниры,устраивали невероятные тематические мероприятия и веселые посиделки. Каждый приехавший на турнир игрок, каждый пришедший посетитель, каждый покупатель интернет-магазина становился членом нашего большого и дружного сообщества!<p/>
            Так мы выросли до хобби-центра, известного во всей России и не только! Теперь наши мероприятия собирают десятки участников, разнообразие хобби направлений уже превысило два десятка! И нам это нравится.<br/>
            Мы всегда тебе рады и ждем твоих звонков, писем и сообщений.<br/>
            Добро пожаловать в "Лавку Орка"!<p/>
          </div>
          <CarouselBig images={images}/>
        </div>
      </div>
      <Contact/>
    </>
  );
}

export default About;