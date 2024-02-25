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
import { useLocation } from 'react-router-dom';

const Cart = () => {
    let total = 0;
    const options = {
        key: "rzp_test_6IjRFAh4CERhl0",
        amount: total === 0 ? 100 : total,
        currency: "INR",
        name: "OCMS",
        description: "Payment for slot booking",
        image: "/src/assets/PlugNGo-logos_white.png",
        order_id: '',
        // callback_url: "http://localhost:8080/api/paymentverification",
        prefill: {
            name: sessionStorage.getItem("firstName") + sessionStorage.getItem("lastName"),
            email: sessionStorage.getItem("username"),
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };

    const location = useLocation();

    const [items, setItems] = useState([]);

   

    const [order,setOrder] = useState({
        totalPrice: total,
        orderDate: new Date(),
        orderStatus: 'COMPLETE',
        orderItems: []
    })

    const onOrderClick = () => {
        subtotal();
        console.log('Total:',total)
        request(
            "POST",
            "/order/add",
            order).then(
            (response) => {
                setAuthHeader(response.data.token);
            }).catch(
            (error) => {
                setAuthHeader(null);
            }
        );

        const razor = new window.Razorpay(options);
        razor.open();
    }


    useEffect(() => {
        setItems(location.state.cart);
        order.orderItems = items
    }, [items, total])



    const subtotal = () => {
        return items.map((item) => { total = total + item.itemPrice })
    };


    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '90%', height: '80%',
            borderRadius: '20px', margin: 'auto', padding: '30px', display: 'flex', flexDirection: 'column', alignContent: 'center',
            justifyContent: 'center'
        }}>
            <h2>Cart</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item Id</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow
                                key={item.itemId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell> */}
                                <TableCell align="center">{item.itemId}</TableCell>
                                <TableCell align="center">{item.itemName}</TableCell>
                                <TableCell align="center">{item.itemPrice}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="center">{total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={onOrderClick} style={{ width: '150px', alignSelf: 'center', marginTop: '30px' }} variant="contained" color="success">Order</Button>
        </div>
    )
}


export default Cart