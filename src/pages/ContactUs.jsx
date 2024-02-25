import { Container, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic to handle form submission, e.g., send the data to a server

        // For demonstration purposes, log the form data to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '50%', height: '50%',
            borderRadius: '20px', margin: 'auto', padding: '20px'
        }}>

            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    If you have any questions, feedback, or inquiries, please feel free to contact us using the information below.
                </Typography>

                <Typography variant="h6" align="center" paragraph>
                    Address:
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    123 Main Street, Dadar West, Mumbai, 400001
                </Typography>

                <Typography variant="h6" align="center" paragraph>
                    Email:
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    <Link href="mailto:info@example.com">info@example.com</Link>
                </Typography>

                <Typography variant="h6" align="center" paragraph>
                    Phone:
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    +91 123 456 7890
                </Typography>
            </Container>
        </div>
    )
}

export default ContactUs