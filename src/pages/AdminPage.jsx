import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {

  const navigate = useNavigate();

  const addMenuItemClick = () => {
    navigate('/admin/addMenuItem')
  }

  const addSubscriptionPlanClick = () => {
    navigate('/admin/addSubscriptionPlan')
  }

  return (
    <div style={{
      backgroundColor: 'white', color: 'black', width: '1300px', height: '700px',
      borderRadius: '20px',margin: 'auto'
    }}>
      <h2 style={{ padding: '0px',marginTop:'30px',display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>Adminstration Page</h2>
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
              Add Menu Item
            </Typography>
            <CardActions style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
              <Button onClick={addMenuItemClick} variant="contained" color="primary">Add</Button>
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
              <Button onClick={addSubscriptionPlanClick} variant="contained" color="primary">Add</Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default AdminPage