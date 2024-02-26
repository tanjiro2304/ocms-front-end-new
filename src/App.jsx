import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import AddMenuItemPage from './pages/AddMenuItemPage'
import AddSubscriptionPlan from './pages/AddSubscriptionPlan'
import RegisterPage from './pages/RegisterPage'
import Menubar from './components/Menubar'
import ContactUs from './pages/ContactUs'
import UserPage from './pages/UserPage'
import Orderpage from './pages/Orderpage'
import Cart from './pages/Cart'
import SubscriptionPage from './pages/SubscriptionPage'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Menubar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/userpage/cart" element={<Cart/>}></Route>
          <Route path='/user/subscriptionPage' element={<SubscriptionPage/>}/>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/userpage" element={<UserPage/>}></Route>
          <Route path="/userpage/orderitem" element={<Orderpage/>}></Route>
          <Route path="/login" element={<LoginPage />}></Route> 
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/addMenuItem" element={<AddMenuItemPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/admin/addSubscriptionPlan" element={<AddSubscriptionPlan />}></Route>
        </Routes>
       
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
