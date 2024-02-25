import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserPage = () => {

  
  const navigate = useNavigate();

  const onOrderItemClick = () => {
    navigate('/userpage/orderitem')
  }

  const onSubscribeClick = () => {
    navigate('/user/subscriptionPage')
  }
  return (
    <div style={{
      backgroundColor: 'white', color: 'black', width: '1300px', height: '700px',
      borderRadius: '20px', margin: 'auto'
    }}>
      <h2 style={{ padding: '0px', marginTop: '30px', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>User Page</h2>
      <div style={{
        marginTop: '50px', display: 'flex', justifyContent: 'center', alignSelf: 'center',
        alignItems: 'center', flexDirection: 'row', width: '100%'
      }}>

        <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            height="300"
            image="/src/assets/images/foodiesfeed.com_indian-chicken-curry-bowl.jpg"
            alt="Paella dish"
          />
          <CardContent  >

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Place Your Order
            </Typography>
            <CardActions style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
              <Button onClick={onOrderItemClick} variant="contained" color="primary">Order Menu</Button>
            </CardActions>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275, marginLeft: '30px' }}>
          <CardMedia
            component="img"
            height="300"
            image="/src/assets/images/foodiesfeed.com_butter-chicken-in-a-pan.jpg"
            alt="Paella dish"
          />
          <CardContent  >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Add Subscription Plan
            </Typography>
            <CardActions style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
              <Button onClick={onSubscribeClick} variant="contained" color="primary">Subscribe A Plan</Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default UserPage                                 