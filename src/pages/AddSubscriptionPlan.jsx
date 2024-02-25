import { Container, Typography } from '@mui/material';

import React, { useState } from 'react';
import {
  TextField,
  Button,

  Grid,
} from '@mui/material';
import { request, setAuthHeader } from '../service/AxiosHelper';

const AddSubscriptionPlan = () => {
  const [planDetails, setPlanDetails] = useState({
    planName: '',
    planDescription: '',
    amount: '',
    validity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    request(
      "POST",
      "/subscriptionPlan/add",
      planDetails).then(
      (response) => {
        alert("Item added successfully in Database.")
      }).catch(
      (error) => {
          setAuthHeader(null);

      }
  );
    // You can perform any logic or send the planDetails to the backend here
    console.log('Plan Details Submitted:', planDetails);
  };

  return (
    <Container style={{backgroundColor:'white', padding:'40px', color:'black', borderRadius:'30px'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Create a New Plan
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Plan Name"
              variant="outlined"
              name="planName"
              value={planDetails.planName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Plan Description"
              variant="outlined"
              name="planDescription"
              value={planDetails.planDescription}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              name="amount"
              value={planDetails.amount}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Validity"
              variant="outlined"
              name="validity"
              value={planDetails.validity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              
              onClick={handleSubmit}
            >
              Save Plan
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddSubscriptionPlan