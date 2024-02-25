import { Image } from '@mui/icons-material'
import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate('/login')
  }

  const onRegisterClick = () => {
    navigate('/register')
  }

  return (
    <div style={{
      backgroundColor: 'white', color: 'black', width: '90%', height: '80%',
      borderRadius: '20px', margin: 'auto', padding: '30px'
    }}>
      <img src="src/assets/images/pexels-chan-walrus-941869.jpg" alt="Not Available" width="100%" height="400px" />

      <div style={{ width: '97%', margin: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center' }}>
        <h2 style={{margin:'auto'}}>Online Canteen Management System</h2>
        <div>
          <p>
            The Canteen Management System is an efficient and user-friendly software solution designed to streamline the operations of a cafeteria or canteen. This system automates various aspects of canteen management, including order processing, inventory management, billing, and reporting. With intuitive interfaces for both administrators and users, the Canteen Management System simplifies the process of placing and managing food orders, reducing wait times and enhancing overall efficiency. The system also provides robust inventory tracking, helping canteen staff monitor stock levels and reorder supplies as needed. Additionally, it facilitates cashless transactions, allowing users to make seamless payments through various payment methods. Overall, the Canteen Management System optimizes the canteen workflow, improving accuracy, reducing manual errors, and enhancing the overall dining experience for both the canteen staff and its customers.The Canteen Management System is an efficient and user-friendly software solution designed to streamline the operations of a cafeteria or canteen. This system automates various aspects of canteen management, including order processing, inventory management, billing, and reporting. With intuitive interfaces for both administrators and users, the Canteen Management System simplifies the process of placing and managing food orders, reducing wait times and enhancing overall efficiency. The system also provides robust inventory tracking, helping canteen staff monitor stock levels and reorder supplies as needed. Additionally, it facilitates cashless transactions, allowing users to make seamless payments through various payment methods. Overall, the Canteen Management System optimizes the canteen workflow, improving accuracy, reducing manual errors, and enhancing the overall dining experience for both the canteen staff and its customers.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', width: '100%', margin: 'auto' }}>
          <Button onClick={onLoginClick} style={{ height: '40px', marginLeft:'40px'}} variant="contained" color="primary">Login</Button>
          <Button onClick={onRegisterClick} style={{ height: '40px', marginLeft:'40px' }} variant="contained" color="primary">Register</Button>
        </div>
      </div>

    </div>
  )
}

export default HomePage