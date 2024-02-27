import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { request, setAuthHeader } from '../service/AxiosHelper';
import '../css/form.css';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {

    const navigate = useNavigate();

    const [account, setAccount] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: ''
    })
    const [user, setUser] = useState({
        username: '',
        password: '',
        role: '',
        account: account
    });

    function checkEmptyAttributes(object) {
        for (const key in object) {
            if (object.hasOwnProperty(key) && object[key] === '') {
                alert(`${key} cannot be empty!`);
                return false; // Stop checking after the first empty attribute is found
            }
        }
        return true; // All attributes are non-empty
    }

    const onSubmit = () => {

        if (checkEmptyAttributes(user) && checkEmptyAttributes(account)) {
            user.account = account;
            console.log(user)
            request(
                "POST",
                "/register/signup",
                user).then(
                    (response) => {
                        setAuthHeader(response.data.token);
                        navigate('/login')

                    }).catch(
                        (error) => {
                            setAuthHeader(null);

                        }
                    );

                    alert('Registration successful!!!')
                    navigate('/login')
        }

    }

    const onChangeHandleUser = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const onChangeHandleAccount = (e) => {
        setAccount((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '20%', height: '520px',
            borderRadius: '20px', alignSelf: 'center', margin: 'auto', marginTop:'80px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                <h2 style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}>User Registration Page </h2>
                <TextField className='form-text-field' name='firstName' value={account.firstName} label="First Name" variant="standard" onChange={onChangeHandleAccount} />
                <TextField className='form-text-field' name='lastName' value={account.lastName} label="Last Name" variant="standard" onChange={onChangeHandleAccount} />
                <TextField className='form-text-field' name='username' value={user.username} label="Username" variant="standard" onChange={onChangeHandleUser} />
                <TextField type='password' className='form-text-field' name='password' value={user.password} label="Password" variant="standard" onChange={onChangeHandleUser} />
                <TextField className='form-text-field' name='email' value={account.email} label="Email" variant="standard" onChange={onChangeHandleAccount} />
                <TextField className='form-text-field' name='contactNo' label="Contact No" variant="standard" value={account.contactNo} onChange={onChangeHandleAccount} />
                <TextField className='form-text-field' name='role' label="Role" variant="standard" value={user.role} onChange={onChangeHandleUser} />
                <Button class='submit-button' onClick={onSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default RegisterPage