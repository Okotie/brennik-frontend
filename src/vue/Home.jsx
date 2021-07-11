import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import shopImg from '../assets/img/shop.jpg'
import '../index.css'
import ProductList from './ProductList';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgb(255, 255, 255, 0.8)',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(7px)',
  },
  mainBox: {
    backdropFilter: 'blur(7px)',
    height: '45vw',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#66CCCC',
    backgroundSize: 'cover',
    backgroundImage: `url(${shopImg})`,
    backgroundRepeat: 'none',
    backgroundAttachment: 'fixed',
  },
  mainBoxShadow: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.4)', height: '100%',
  },
  mainBoxDiv: {
    height: '60%',
    width: '65%',
    border: '10px solid rgba(255,255,255,0.28)',
  },
  mainBoxDivText: {
    width: '50%',
    fontFamily: 'Poiret One',
    backgroundSize: 'cover',
    fontSize: '60px',
    color: 'white',
    padding: '0px',
    position: 'relative',
    top: '40px',
    left: '-10%',
  },
  mainBoxDivImg: {
    display: 'in-line-flex'
  },
  container: {
    marginLeft: '10%',
    marginRight: '10%',
  },
}));

const Home= (props) => {
  const classes = useStyles();
  const history = useHistory();

  const routeToBasket = () => {
    let path = 'shop';
    history.push(path);
  }

  return (
    <>
      <div className={classes.mainBox}>
        <div className={classes.mainBoxShadow}>
          <div className={classes.mainBoxDiv}>
            <div style={{fontFamily: 'Raleway', fontSize: '50px', fontWeight: '900'}}>
              <div className={classes.mainBoxDivText}>
                <div style={{fontFamily: 'Raleway', fontSize: '50px', fontWeight: '900',}}>КРУТОЙ
                  СЛОГАН
                </div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  backdropFilter: 'blur(9px)',
                  color: '#FFBF00',
                }}>
                  А Тут Нужен Какой-то текст но не очень большой
                  А Тут Нужен Какой-то текст но не очень большой
                  А Тут Нужен Какой-то текст но не очень большой
                </div>

                <button style={{float: 'right', fontSize: '16px'}}
                        className={'buttonViolet'} onClick={routeToBasket}>перейти в магазин</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={classes.container}>
        <ProductList type={'NEW'} />
        <ProductList type={'SOON'} />
      </div>


      <Container style={{fontFamily: 'Poiret One', backgroundColor: '#FAFAFA',}}>

        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
               Cras justo odio, dapibus ac facilisis in, egestas eget quam.
               Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
               Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>

    </>
  );
}

export default Home;