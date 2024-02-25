import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../css/form.css';
import { request } from '../service/AxiosHelper';
const AddMenuItemPage = () => {

  const [item,setItem] = useState({
    itemName:'',
    itemPrice:'',
    itemQuantity:''
  })

  const onChangeHandle = (e) => {
    setItem((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }));
}

  const onSubmit = () => {
    request(
        "POST",
        "/item/add",
        item).then(
        (response) => {
          alert("Item added successfully in Database.")
        }).catch(
        (error) => {
            setAuthHeader(null);

        }
    );
}
  return (
    <div style={{
      backgroundColor: 'white', color: 'black', width: '600px', height: '450px',margin: 'auto', alignContent:'center'
    }}>


      <div>
        <h2 style={{ margin:'auto' }}>Add Menu Item </h2>
        <div style={{marginTop:'40px',display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <TextField className='form-text-field'  value={item.itemName} name='itemName' label="Item Name" variant="standard" onChange={onChangeHandle} />
          <TextField className='form-text-field' value={item.itemPrice} name='itemPrice' label="Item Price " variant="standard" onChange={onChangeHandle}/>
          <TextField className='form-text-field' value={item.itemQuantity} name='itemQuantity' label="Quantity " variant="standard" onChange={onChangeHandle}/>
          <Button  className='submit-button' variant="contained" color="primary" onClick={onSubmit}>
            Add
          </Button>
        </div>

      </div>
    </div>

  )
}

export default AddMenuItemPage