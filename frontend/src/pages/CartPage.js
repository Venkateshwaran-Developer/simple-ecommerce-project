import React from "react";
import './CartPage.css';
import { Fragment, useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage({cartItems,setCartItems,theme,setTheme}) {

  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);

  const [complete,setComplete]=useState(false);

  function increaseQty(item){
      if(item.product.stock == item.qty){
      return
      }
    const updatedItems =  cartItems.map((i)=>{
         if( i.product._id == item.product._id){
          i.qty++
         }
         return i ;
         
      })
      setCartItems(updatedItems)
      
  }
  function decreaseQty(item){
      if(item.qty>1){
      
    const updatedItems =  cartItems.map((i)=>{
         if( i.product._id == item.product._id){
          i.qty--
         }
         return i ;
         
      })
      setCartItems(updatedItems);
      
  }
}

function deleteCartItem(item){

const updatedItems =  cartItems.filter((i)=>{
     if( i.product._id !== item.product._id){
      return true ;
     }
     
     
  })
  setCartItems(updatedItems)


}
function placeOrderHandler(){
  fetch(process.env.REACT_APP_API_URL+'/orders',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(cartItems)
  })
  .then(()=>{
      setCartItems([]);
      setComplete(true);
      toast.success('Your Order has been Placed')
  })
}


  return (

    cartItems.length > 0 ? <Fragment>
      <Header cartItems={cartItems} theme={theme} setTheme={setTheme} />

    <div className={`containe ${theme} relative  pt-28  bg-gray-100 `}>
      <h1 className="mb-10 text-center text-gray-700 text-2xl font-bold">Your Cart Have : <b>{cartItems.length} Items</b></h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

      <div className="cart-item md:w-2/3 ">
      {cartItems.map((item)=>
        <Fragment>
        
        <div className=" rounded-lg md:w-100% ">
          <div className="cartbox justify-between mb-6 rounded-lg bg-white p-6  shadow-md sm:flex sm:justify-start">
            <img
              src={item.product.images[0].image}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                <Link to={'/product/'+item.product._id}> {item.product.name}</Link>
                </h2>
                <p className="mt-1 text-xs text-gray-900">{item.product._id}</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <span onClick={()=>decreaseQty(item) } className="cursor-pointer rounded-l bg-gray-500 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    value={item.qty}
                  
                  />
                  <span onClick={()=>increaseQty(item)} className="cursor-pointer rounded-r bg-gray-500 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    +{" "}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">Rs.{item.product.price}.00</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    onClick={()=>deleteCartItem(item)}
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
     )}
      </div>
        <div className="checkoutbox mt-6 h-full rounded-lg  bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-900">Subtotal</p>
            <p className="text-gray-900">{cartItems.reduce((acc,item)=>acc+item.qty,0 )} (Units)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-900">Shipping</p>
            <p className="text-gray-900">Rs.0.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">Rs.{cartItems.reduce((acc,item)=>acc+item.product.price*item.qty,0 )}.00</p>
              <p className="text-sm text-gray-900">including VAT</p>
            </div>
          </div>
          <button onClick={placeOrderHandler} className="mt-6 w-full rounded-md bg-black hover:bg-brown-600 py-1.5 font-medium text-blue-50 ">
          Place Order
          </button>
        </div>
      </div>
    </div>
    <Footer theme={theme} setLogout={setLogout}  />
    </Fragment> :
    
    (!complete) ?<Fragment>
       <Header cartItems={cartItems} theme={theme} setTheme={setTheme} />
      <h1 className={`cartempty ${theme} flex justify-center mx-auto pb-80 font-bold text-gray-700 pt-52 text-2xl`}>Your Cart is Empty</h1>
      <Footer theme={theme} setLogout={setLogout}  />
       </Fragment>  : <Fragment>
       <Header cartItems={cartItems} theme={theme} setTheme={setTheme} />
          
                    <h1 className={`cartempty ${theme} flex justify-center mx-auto font-bold text-gray-700 pt-52 text-2xl`}>Order Completed!</h1>
                    <p className={`cartempty ${theme} flex justify-center mx-auto pb-80 font-bold text-gray-700  text-xl`}>Your Order Will Be Delivered Soon...!</p>
                    <Footer theme={theme} setLogout={setLogout}  />
                </Fragment>
                
  );
}


