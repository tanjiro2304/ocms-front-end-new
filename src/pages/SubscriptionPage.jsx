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

const SubscriptionPage = () => {
 
    const [rows, setRows] = useState([])

    useEffect(() => {

        axios.post('http://localhost:8080/subscriptionPlan/fetchAll', {
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

    const onSubscribeClick = (item) => {
        
        options.amount = item.amount;
        console.log(options.amount)
        const razor = new window.Razorpay(options);
        razor.open();
    }

    const options = {
        key: "rzp_test_6IjRFAh4CERhl0",
        amount: 0,
        currency: "INR",
        name: "OCMS",
        description: "Payment for Subscription Plan",
       
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





    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '90%', height: '80%',
            borderRadius: '20px', margin: 'auto', padding: '30px'
        }}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',padding:'0', alignContent:'center',marginBottom:'30px'}}>
                <h2 style={{margin:'0'}}>Subscribe To A Plan</h2>
               
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Subscription Id</TableCell>
                            <TableCell align="center">Subscription Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">Validity</TableCell>
                            <TableCell align="center">Subscribe</TableCell>
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
                                <TableCell align="center">{row.subscriptionId}</TableCell>
                                <TableCell align="center">{row.planName}</TableCell>
                                <TableCell align="center">{row.planDescription}</TableCell>
                                <TableCell align="center">{row.amount}</TableCell>
                                <TableCell align="center">{row.validity}</TableCell>
                                <TableCell align="center"><Button onClick={() => onSubscribeClick(row)}> Subscribe</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SubscriptionPage