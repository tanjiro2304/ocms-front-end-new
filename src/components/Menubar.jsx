import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/menubar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const Menubar = () => {
    const navigate = useNavigate();
    const [activeMenuItem, setActiveMenuItem] = useState('Home');


    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        if (menuItem === 'Home') {
            navigate('/')
        }
        else if (menuItem === 'Contact') {
            navigate('/contactus')
        }
        else if (menuItem === 'About') {
            navigate('/about')
        }
        else if (menuItem === 'Login') {
            navigate('/login')
        }

        else if (menuItem === 'Logout') {
            localStorage.setItem('token',null);
            navigate('/')
            
        }
    };


    const token = localStorage.getItem('token')

    const onLoginClick = () => {
        navigate('/')
    }

    const onLogoutClick = () => {
        localStorage.setItem('token',null);
    }

    // useEffect(()=>{
    //     if (token === null || token === undefined) {
    //         return (
    //             <li
    //                 className='login'
    //                 onClick={() => handleMenuItemClick('Login')}
    //             >
    //             </li>
    //         )
    //     } else {
    //         return (
    //             <li
    //                 className='logout'
    //                 onClick={() => handleMenuItemClick('Logout')}
    //             >
    //                 Logout
    //             </li>
    //         )
    //     }
    // },[token])





    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul className="menu-bar">
                        <li
                            className={activeMenuItem === 'Home' ? 'active' : ''}
                            onClick={() => handleMenuItemClick('Home')}
                        >
                            Home
                        </li>
                        <li
                            className={activeMenuItem === 'About' ? 'active' : ''}
                            onClick={() => handleMenuItemClick('About')}
                        >
                            About
                        </li>
                        
                    </ul>
                </nav>


            </header>


        </div>
    )
}

export default Menubar