import React from 'react';
import Home from './pages/Home';
import { useState ,useEffect } from 'react';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {


  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?current_theme: 'light');


  useEffect (()=>{
    localStorage.setItem('current_theme', theme)
    }, [theme])

    const [cartItems , setCartItems] = useState([]);

  return (
    <div className={` ${theme}`} >

       <Router>
          <div>
             <ToastContainer theme='light' position='top-center'/>
          </div>
          
          <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home cartItems={cartItems} theme={theme} setTheme={setTheme} />}/>
          <Route path='/home/search' element={<Home cartItems={cartItems} theme={theme} setTheme={setTheme}/>}/>
          <Route path='/product/:id' element={<ProductDetails theme={theme} setTheme={setTheme} cartItems={cartItems} setCartItems={setCartItems} />}/>
          <Route path='/cart' element={<CartPage theme={theme} cartItems={cartItems} setTheme={setTheme} setCartItems={setCartItems} />}/>
          </Routes>
        </Router>
       

    </div>
  )
}
