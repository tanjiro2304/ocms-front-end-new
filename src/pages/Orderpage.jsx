import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { request, setAuthHeader } from '../service/AxiosHelper';
import axios from 'axios';
import { Button, cardActionAreaClasses } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const Orderpage = () => {

    const usenavigate = useNavigate();

    const [rows, setRows] = useState([])

    const [cart, setCart] = useState([])

    const onAddClick = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        console.log(cart)
    }


    useEffect(() => {

        axios.post('http://localhost:8080/item/fetchAll', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            // Handle the successful response here
            setRows(response.data); // Assuming the response data is an array of ChargingStation objects

        })
            .catch((error) => {

            });
    }, [])

    const onCartClick = () =>{
        usenavigate('/userpage/cart', {state:{cart:cart}});
    }



    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '90%', height: '80%',
            borderRadius: '20px', margin: 'auto', padding: '30px'
        }}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',padding:'0', alignContent:'center',marginBottom:'30px'}}>
                <h2 style={{margin:'0'}}>Order Menu</h2>
                <ShoppingCartIcon onClick={onCartClick} style={{marginLeft:'auto', padding:'auto'}} />
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item Id</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Add</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.itemId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="center">{row.itemId}</TableCell>
                                <TableCell align="center">{row.itemName}</TableCell>
                                <TableCell align="center">{row.itemPrice}</TableCell>
                                <TableCell align="center">{row.itemQuantity}</TableCell>
                                <TableCell align="center"><Button onClick={() => onAddClick(row)}> Add to Cart</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Orderpage