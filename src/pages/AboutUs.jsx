import React from 'react'

const AboutUs = () => {
  return (
    <div style={{
        backgroundColor: 'white',
        color: 'black',
        width: '90%',
        height: '70%',
        borderRadius: '20px',
        margin: 'auto',
        padding: '30px',
        marginTop: '70px'
      }}>
        <h2>About Us</h2>
        <p>Welcome to our Online Canteen Management System!</p>
  
        <h3>Our Mission</h3>
        <p>At OCMS, our mission is to provide a seamless and efficient food ordering experience for our customers. We strive to connect food enthusiasts with a variety of delicious options and simplify the canteen management process.</p>
  
        <h3>Features</h3>
        <p>Explore the key features of our online canteen management system:</p>
  
        <ul>
          <li>Easy Online Ordering</li>
          <li>Menu Customization</li>
          <li>Secure Payment Options</li>
          <li>Order Tracking</li>
          <li>Feedback and Ratings</li>
        </ul>
  
        <h3>Our Team</h3>
        <p>Meet the talented individuals behind [Your Canteen Name]:</p>
  
        <ul>
          <li>John Doe - Founder and CEO</li>
          <li>Jane Smith - Chief Operations Officer</li>
          <li>Bob Johnson - Lead Developer</li>
          {/* Add more team members as needed */}
        </ul>
  
        <h3>Contact Us</h3>
        <p>If you have any questions or suggestions, feel free to reach out to us. We value your feedback and are committed to enhancing your canteen experience.</p>
  
        <p>Contact: [Your Contact Information]</p>
      </div>
  )
}

export default AboutUs