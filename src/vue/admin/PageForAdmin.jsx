import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {getProductAPI, getCategoryAPI} from "../api/api";
import {AuthContext} from "./AuthProvider";
import Tabs from "../Tabs";
import UpdateProduct from "./UpdateProduct";
import UpdateCategory from "./UpdateCategory";

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
  input: {
    margin: '10px',
  },
  img: {
    width: '50px',
  },
  input1: {
    display: 'none',
  },
  listItem: {
    width: '500px',
  },
  tabs: {
  },
}));

const defaultProduct = {
  vendorCode: '',
  name: '',
  description: '',
  price: null,
  count: null,
  flagNew: false,
  flagSoon: false,
  categories: [],
  images: []
};

const defaultCategory = {
  name: '',
  description: '',
  productIds: [],
};

const PageFromAdmin = () => {
  const classes = useStyles();
  const { logout } = React.useContext(AuthContext);
  const [vendorCode, setVendorCode] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [category, setCategory] = useState(defaultCategory);
  const [flagSearchProduct, setFlagSearchProduct] = useState(false);
  const [flagSearchCategory, setFlagSearchCategory] = useState(false);

  const changeVendorCode = (event) => {
    setVendorCode(event.target.value);
  };

  const changeCategoryName = (event) => {
    setCategoryName(event.target.value);
  };

  const handleChange = () => {
    getProductAPI.getProductByCode(vendorCode, setProduct)
      .then(() => setFlagSearchProduct(true))
      .catch(() => setFlagSearchProduct(false));
  };

  const handleChangeCategory = () => {
    getCategoryAPI.getCategoryByName(categoryName, setCategory)
      .then(() => setFlagSearchCategory(true))
      .catch(() => setFlagSearchCategory(false));
  };

  const tabContent = () => (
    [
      { title: 'Добавление товара', content: <UpdateProduct defaultProduct={defaultProduct}/>},
      { title: 'Изменение товара', content:
          <>
            <form className={'filterBox'} style={{maxWidth: '400px',}} onSubmit={(e) => {e.preventDefault()}}>
              <input className={classes.input} value={vendorCode} type="text" placeholder={"введите артикул товара"} onChange={changeVendorCode} />
              <button onClick={()=>{handleChange()}}>найти</button>
            </form>
            {flagSearchProduct && <UpdateProduct defaultProduct={product}/>}
          </>},
      { title: 'Добавление категории', content: <UpdateCategory defaultCategory={defaultCategory}/>},
      { title: 'Изменение категории', content:
          <>
            <form className={'filterBox'} style={{maxWidth: '400px',}} onSubmit={(e) => {e.preventDefault()}}>
              <input className={classes.input} value={categoryName} type="text" placeholder={"введите название категории"} onChange={changeCategoryName} />
              <button onClick={()=>{handleChangeCategory()}}>найти</button>
            </form>
            {flagSearchCategory && <UpdateCategory defaultCategory={category}/>}
          </>
      },
    ]
  );

  return(
    <>
      <div className={classes.container}>
        <div>
          <br/>
          <button onClick={logout}>Выйти из панели администратора</button>
        </div>
        <div>
          <Tabs items={tabContent()} className={classes.tabs}/>
        </div>
        {/*<h3>добавления товара</h3>
        <div>
          код товара:
          <input className={classes.input} type={'vendorCode'} onChange={changeId}/>
        </div>
        <div>
          наименование:
          <input className={classes.input} type={'vendorCode'} onChange={changeName} />
        </div>
        <div>
          описание:
          <input className={classes.input} type={'vendorCode'} onChange={changeDescription}/>
        </div>
        <div>
          цена:
          <input className={classes.input} type={'number'} step="any" onChange={changePrice}/>
        </div>
        <div>
          количество:
          <input className={classes.input} type={'number'} onChange={changeCount}/>
        </div>
        <div>
          флаг новинки:
          <input className={classes.input} type={'checkbox'} onChange={changeFlagNew}/>
        </div>
        <div>
          флаг скоро в продаже:
          <input className={classes.input} type={'checkbox'} onChange={changeFlagSoon}/>
        </div>
        <div>
          категории:

            {categories.map(c => (
            (<Chip
              className={classes.input}
              variant={selectedChips.find((chip) => chip.id === c.id) ? "default" : "outlined"}
              clickable={true}
              size="small"
              label={c.name}
              onClick={() => selectChip(c)}
              color="primary"
            />)
          ))}
        </div>
        <div className={classes.paper}>
          <div>
            <input
              onChange={handleUploadFiles}
              name="files"
              accept="image/*"
              className={classes.input1}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button onClick={() => {}} variant="contained" color="primary" component="span"
                      style={{border: '1px solid #651fff', fontSize: '10px', backgroundColor: '#FFFFFF', color: 'black'}}>
                Добавить изображения
              </Button>
            </label>
          </div>
          {Boolean(files.length) && (
            <List className={classes.listItem}>
              {files.map((file, id) => (
                <ListItem key={file.id}>
                  <ListItemAvatar>
                    <img  className={classes.img}
                          alt={`${file.id}`}
                          src={`${file.previewUrl}`}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={file.name} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={handleDeleteFile(file.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </div>
        <div>
          <br/>
          <button onClick={handleClick} style={{fontSize: '16px', backgroundColor: '#651fff', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer'}}>
            Создать товар
          </button>
        </div>*/}
      </div>
    </>
  )
};

export default PageFromAdmin;