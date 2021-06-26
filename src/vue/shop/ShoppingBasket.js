import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import BasketProduct from "./BasketProduct";
import {BasketContext} from "../cart/BasketProvider";
import {formForAPI, getProductAPI} from "../api/api";
import uniqid from 'uniqid';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {OrderContext} from "./OrderProvider";
import CurrentOrders from "./CurrentOrders";


const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '2%',
    fontSize: '17px',
    fontFamily: 'Raleway',
    alignItems: 'center',
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Raleway',
    textAlign: 'center',
  },
}));

let timeOut = 0;

const ShoppingBasket = () => {
  const classes = useStyles();
  const { basket, count, price, clearBasket } = React.useContext(BasketContext);
  const [open, setOpen] = useState(false);
  const [form, setFrom] = React.useState({ name: '', phone: '', email: '', comment: '', order: JSON.stringify(basket) });
  const initErrors = { name: false, phone: false, email: false};
  const [errors, setErrors] = React.useState(initErrors);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const { addToOrders, orders } = React.useContext(OrderContext);
  const [newOrder, setNewOrder] = useState({ id: 'none', products: []});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductsByCodes(basket.map(b => (b.id)), setProducts);
    setFrom({ ...form, order: JSON.stringify(basket) });
  }, [basket]);

  useEffect(
    ()=>{
      if (timeOut) clearTimeout(timeOut);

      timeOut = setTimeout(() => (
        setErrors({ name: validationName(), phone: validationPhone(), email: validationEmail()})
      ), 2000);

    }, [form]
  );

  const handleChange = (field) => (e) => {
    const { value } = e.target;
    setFrom({ ...form, [field]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationEmail = () => {
    if(!form.email){
      return true;
    }
    if(typeof form.email !== "undefined"){
      let lastAtPos = form.email.lastIndexOf('@');
      let lastDotPos = form.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
        lastDotPos > 2 &&
        (form.email.length - lastDotPos) > 2)) {
        return true;
      }
    }
    return false;
  };

  const validationPhone = () => {
    return !form.phone || form.phone.length < 11 || form.phone === '';
  };

  const validationName = () => {
    return !form.name || form.name.length === 0 || form.name === '';
  };

  const generateCodeOrder = () => {
    if(typeof form.email !== "undefined"){
      let lastAtPos = form.email.lastIndexOf('@');
      return form.email.slice(0, lastAtPos).toLowerCase() + '_' + uniqid();
    }
    return uniqid();
  };

  const handleValidation = () => {
    setIsError(false)
    setIsSend(false)
    if (errors.name || errors.phone || errors.email)
      setIsError(true);
    else {
      const newOrder = { id: generateCodeOrder(), products: basket };
      setNewOrder(newOrder);
      addToOrders(newOrder);

      const formdata = new FormData();

      for (const name in form) {
        formdata.append(name, form[name]);
      }

      formForAPI.sendEmail(formdata)
        .catch(({ response }) => {
          console.log("formForAPI.sendEmail response " + response);
          // eslint-disable-next-line no-console
          if (response === undefined || (response && response.status === 400)) {
            setIsSend(false)
            setIsError(true);
          }
          setIsError(false);
          setIsSend(true)
        });

      clearBasket();
    }
  };

  return(
    <>
      {isSend && !isError && (
        <Alert className={classes.alert}>
          {'Заказ был сформировани под номером: ' + newOrder.id}<br/>
          Вам на почту были отправлены детали заказа.<br/>
          После проверки наличия товара в магазине, будет выслана ссылка для оплаты заказа.
        </Alert>
      )}
      {(orders.length > 0) &&
        <div className={classes.container}>
          <Typography className={classes.title} style={{textAlign: 'left',}} variant="h4">
            предыдущие заказы
          </Typography>
        </div>
      }
      {orders.map(o =>
        <div className={classes.container}>
          <CurrentOrders order={o}/>
        </div>
      )}

      {basket.length > 0 &&
      <div className={classes.container}>
        <Typography className={classes.title} style={{textAlign: 'left',}} variant="h4">
          корзина
        </Typography>
        <div className={classes.columns}>
          <div>
            <Typography className={classes.title} variant="h5">
              добавленные товары:
            </Typography>
            <div>

              {products.map(
                (product) => (
                  <div >
                    <div className={classes.title}>
                      <BasketProduct
                        product={product}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <Typography className={classes.title} variant="h6">
              ваш заказ:
              <Typography className={'price'} style={{fontWeight: 600}} variant="subtitle1">
                {'количество товаров: ' + count  + ' шт.'}
              </Typography>
              <Typography className={'price'} style={{fontWeight: 800}} variant="subtitle1">
                {'общая стоимость: ' + price  + ' ₽'}
              </Typography>

              <button style={{width: '80%'}} className={'buttonGreen'}
                      onClick={handleClickOpen}>оформить заказ</button>
            </Typography>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              {isError && (
                <Alert severity="warning">Заказ не был сформирован! Пожалуйста, введите необходимую информацию</Alert>
              )}
              <DialogTitle id="form-dialog-title">Оформление заказа</DialogTitle>
              <DialogContent>
                <TextField
                  error = {isError && errors.name}
                  autoFocus
                  margin="dense"
                  id="name"
                  label='Как к вам обращаться'
                  type="text"
                  fullWidth
                  value={form.name}
                  onChange={handleChange('name')}
                />
                <TextField
                  error = {isError && errors.phone}
                  name="phone"
                  label="Номер телефона"
                  autoFocus
                  margin="dense"
                  id="phone"
                  type="text"
                  fullWidth
                  value={form.phone}
                  onChange={handleChange('phone')}
                />
                <TextField
                  error = {isError && errors.email}
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Почта"
                  type="email"
                  fullWidth
                  value={form.email}
                  onChange={handleChange('email')}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="comment"
                  label="Комментарий к заказу"
                  type="text"
                  fullWidth
                  value={form.comment}
                  onChange={handleChange('comment')}
                />
                <DialogContentText>
                  После проверки наличия товара в магазине, Вам на почту будет выслана ссылка для оплаты заказа.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button onClick={handleClose} style={{fontSize: '16px'}} className={'buttonGrey'}>
                  Продолжить покупки
                </button>
                <button style={{fontSize: '16px'}} className={'buttonGreen'} onClick={handleValidation}>
                  Сформировать заказ
                </button>
              </DialogActions>
            </Dialog>

          </div>
        </div>
        <form
          method="POST"
          action="https://formfor.site/send/THdULQqnJmxQW41Pe2VALvwsdTdPdm"
        >
          <input type="email" name="email"/>
          <input name="name"/>
          <input name="commentary"/>
          <button type="submit">Send</button>
        </form>
      </div>
      }
      {!basket.length > 0 &&
      <div className={classes.container}>
        <Typography className={classes.title} style={{textAlign: 'center',}} variant="h4">
          В корзине пока ничего нет
         </Typography>
      </div>
      }
    </>
  )
};

export default ShoppingBasket;