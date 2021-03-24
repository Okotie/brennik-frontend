import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import shopImg from '../assets/img/shop.jpg'
import '../index.css'
import ProductList from './ProductList';

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
    //alignItems: 'center',
    //justifyContent: 'center',
    //display: 'flex',
    border: '10px solid rgba(255,255,255,0.28)',
  },
  mainBoxDivText: {
    //height: '70%',
    width: '50%',
    fontFamily: 'Poiret One',
    backgroundSize: 'cover',
    fontSize: '60px',
    color: 'white',
    padding: '0px',
    //border: '10px solid rgba(255,255,255,0.08)',
    //height: '50%',
    //width: '90%',
    //alignItems: 'center',
    //justifyContent: 'left',
    //backdropFilter: 'blur(5px)',
    //display: 'flex',
    //backdropFilter: 'blur(3px)',
    //filter: 'border-shadow(0px 0px 5px rgba(255,255,255,1))',
    position: 'relative',
    top: '40px',
    left: '-10%',
  },
  mainBoxDivImg: {
    display: 'in-line-flex'
  },
  button: {
    fontFamily: 'JetBrains Mono',
    float: 'right',
    border: 'none',
    marginTop: '5px',
    color: '#FAFAFA',
    padding: '9px 30px',
    textDecoration: 'none',
    fontSize: '15px',
    Overflow: 'hidden',
    backgroundColor: '#9966FF',
    transition: 'all 0.6s ease',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none !important',
    },
    '&:hover': {
      boxShadow: '1px 1px 2px rgba(0,0,0,0.4)',
      backgroundColor: '#6633CC',
    },
  },
  container: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  buttonMenu: {
    fontFamily: 'JetBrains Mono',
    position: 'relative',
    padding: '0.7em 1em',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
    margin: '0em 0.8em',
    border: '1px solid',
    transition: 'all 0.6s ease',
    borderBottomColor: 'black',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    borderLeftColor: 'transparent',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
  },
}));

// class Nav extends React.Component{
//   render(){
//       return <nav>
//               <Link to="/">Главная</Link>  
//               <Link to="/about">О сайте</Link>  
//               <Link to="/products">Товары</Link>
//              </nav>;
//   }
// }


const Home= (props) => {
  const classes = useStyles();
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

                <button className={classes.button}>перейти в магазин</button>
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

      <hr/>
      <hr/>
      <hr/>

    </>
  );
}

export default Home;