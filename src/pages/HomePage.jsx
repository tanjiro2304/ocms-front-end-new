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
      backgroundColor: 'white', color: 'black', width: '90%', height: '30%',
      borderRadius: '20px', margin: 'auto', padding: '30px',marginTop:'100px'
    }}>
      <img src="src/assets/images/pexels-chan-walrus-941869.jpg" alt="Not Available" width="100%" height="400px" />

      <div style={{ width: '97%', margin: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center' }}>
        <h2 style={{margin:'auto'}}>Online Canteen Management System</h2>
      

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', width: '100%', margin: '20px' }}>
          <Button onClick={onLoginClick} style={{ height: '40px', marginLeft:'40px'}} variant="contained" color="primary">Login</Button>
          <Button onClick={onRegisterClick} style={{ height: '40px', marginLeft:'40px' }} variant="contained" color="primary">Register</Button>
        </div>
      </div>

    </div>
  )
}

export default HomePage