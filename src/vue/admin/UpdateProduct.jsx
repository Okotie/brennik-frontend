import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {createProductAPI, getCategoryAPI, getProductAPI} from "../api/api";
import {AuthContext} from "./AuthProvider";
import {
  Button,
  Chip,
  IconButton, List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import uniqid from 'uniqid';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
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
}));

const UpdateProduct = ({defaultProduct}) => {
  const classes = useStyles();
  const [request, setRequest] = useState(defaultProduct);
  const [categories, setCategories] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getCategoryAPI.getAllCategories(setCategories);
  }, []);

  useEffect(() => {
    setSelectedChips(defaultProduct.categories.map((cat) => ({id: cat.id})));
  }, [defaultProduct]);

  useEffect(() => {
    changeCategories();
  }, [selectedChips]);

  const handleClick = () => {
    createProductAPI.createProduct(request);
    if (files != null && files.length > 0) {
      createProductAPI.createProductImages(request.vendorCode, files.map(f => f.file))
    }
  };

  const changeId = (e) =>{
    setRequest({
      vendorCode: e.target.value,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    })
  };
  const changeName = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: e.target.value,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    })
  };
  const changeDescription = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: e.target.value,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changePrice = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: e.target.value,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeCount = (e) =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: e.target.value,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeFlagNew = () =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: !request.flagNew,
      flagSoon: request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeFlagSoon = () =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: !request.flagSoon,
      categories: request.categories,
      images: request.images
    });
  };
  const changeCategories = () =>{
    setRequest({
      vendorCode: request.vendorCode,
      name: request.name,
      description: request.description,
      price: request.price,
      count: request.count,
      flagNew: request.flagNew,
      flagSoon: request.flagSoon,
      categories: selectedChips,
      images: request.images
    });
  };
  const selectChip = (category) =>{
    selectedChips.find(chip => chip.id === category.id) ?
      setSelectedChips(selectedChips.filter(chip => chip.id !== category.id)) :
      setSelectedChips([...selectedChips, {id: category.id}]);
  };

  const handleUploadFiles = (e) => {
    var uploadedfiles = e.target.files || e.dataTransfer.files;
    if (!uploadedfiles.length) return;

    const ArrayFiles = Array.from(uploadedfiles);
    setFiles([
      ...ArrayFiles.map((file, index) => ({
        id: uniqid(),
        name: file.name,
        file: uploadedfiles[index],
        previewUrl: URL.createObjectURL(file),
      })),
      ...files,
    ]);
  };

  const handleDeleteFile = (fileId) => () => {
    setFiles(files.filter(({ id }) => id !== fileId));
  };

  return(
    <>
      <div className={classes.container}>
        <div>
          код товара:
          <input className={classes.input} type={'text'} value={request.vendorCode} onChange={changeId}/>
        </div>
        <div>
          наименование:
          <input className={classes.input} type={'text'} value={request.name} onChange={changeName} />
        </div>
        <div>
          описание:
          <input className={classes.input} type={'text'} value={request.description} onChange={changeDescription}/>
        </div>
        <div>
          цена:
          <input className={classes.input} type={'number'} value={request.price} step="any" onChange={changePrice}/>
        </div>
        <div>
          количество:
          <input className={classes.input} type={'number'} value={request.count} onChange={changeCount}/>
        </div>
        <div>
          флаг новинки:
          <input className={classes.input} type={'checkbox'} checked={request.flagNew && 'checked'} onChange={changeFlagNew}/>
        </div>
        <div>
          флаг скоро в продаже:
          <input className={classes.input} type={'checkbox'} checked={request.flagSoon && 'checked'} onChange={changeFlagSoon}/>
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
            Сохранить
          </button>
        </div>
      </div>
    </>
  )
};

export default UpdateProduct;