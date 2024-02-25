import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';
import { request, setAuthHeader } from '../service/AxiosHelper';

const LoginPage = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });


    const navigate = useNavigate();
    const onLoginClick = () => {
        request(
            "POST",
            "/register/login",
            {
                username: user.username,
                password: user.password
            }).then(
                (response) => {
                    sessionStorage.setItem("userId", response.data.id);
                    console.log(response.data)
                    setAuthHeader(response.data.token);
                    if (response.data.role === 'ADMIN') {
                        navigate('/admin')
                    } else {
                        navigate('/userpage')
                    }

                }).catch(
                    (error) => {
                        setAuthHeader(null);
                        alert("Invalid username and password")
                    }
                );

    }

    const onChangeHandle = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div style={{ backgroundColor: 'white', color: 'black', width: '500px', height: '400px', borderRadius: '50px', padding: '10px', margin: 'auto' }}>
            <div className='login' style={{ padding: '70px' }}>
                <h3 style={{ padding: '0px', margin: '0px' }}>Login Page</h3>
                <form>
                    <TextField style={{ marginTop: '25px', width: '300px' }} name="username" label="Username" variant="standard" value={user.username} onChange={onChangeHandle} />
                    <TextField type='password' style={{ marginTop: '25px', width: '300px' }} name="password" label="Password" variant="standard" value={user.password}
                        onChange={onChangeHandle} />
                    <Button style={{ marginTop: '25px', width: '150px' }} variant="contained" color="primary" onClick={onLoginClick}>
                        Login
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default LoginPage