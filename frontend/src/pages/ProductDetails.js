import React, { Fragment } from "react";
import {
  Button,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
  

export function ProductDetails({cartItems ,setCartItems,theme,setTheme}) {

  const [product,setProduct]=useState(null);
  const [qty,setQty]=useState(1);
  const {id}=useParams();

  useEffect(()=>{
      fetch(process.env.REACT_APP_API_URL+'/product/'+id)
      .then(res => res.json())
      .then(res => setProduct(res.product))
  },[])

  function addToCart(){
     const itemExist = cartItems.find((item) => item.product._id === product._id )
      if(!itemExist){
      const newItem = {product,qty};
      setCartItems((state)=>[...state,newItem])
      toast.success("Item Added to Cart")
      }
      
  }

  function increaseQty(){
      if(product.stock == qty){
      return
      }
      setQty((state)=> state+1)
  }
  function decreaseQty(){
      if(qty >1){
          setQty((state)=> state-1)
      }
     
  }

  
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);




  return (

    
   
    product && 

    <Fragment>
      <Header cartItems={cartItems} theme={theme} setTheme={setTheme} />
   
    
    <div className={`${theme}  container  grid place-items-center sm:grid-cols-1 md:grid-cols-2 py-28`}>
        <img
          src={product.images[0].image}
          alt="pink blazer"
          className="w-[40rem] h-[26rem]"
        />
        <div>
          <Typography className="mb-4 font-bold text-gray-700 text-3xl" >
          {product.name}<br/>
          <p className="text-sm">Product #{product._id}</p>
          </Typography>
          <Typography className=" text-gray-700" variant="h5">Rs.{product.price}</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-700">
          {product.description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
            </Typography>
          </div>
          <Typography color="gray" variant="h6">
            Color
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-gray-900 bg-indigo-600 "></div>
            <div className="h-5 w-5 rounded border border-gray-900 bg-red-500 "></div>
          </div>
          <Typography color="gray" variant="h6">
            Quantity    
          </Typography>
          <div class="flex items-center py-3 border-gray-100">
                <button onClick={decreaseQty} disabled={product.stock ==0} className="cursor-pointer rounded-l bg-gray-500 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" value={qty} readOnly />
                <button onClick={increaseQty} disabled={product.stock ==0} className="cursor-pointer rounded-r bg-gray-500 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
              </div>
          <div className="flex pb-6">
          <Typography color="gray" variant="h6">
            Status :     
          </Typography>
          <p><span className={product.stock == 0 ?'text-red-900 font-bold px-2 text-xl': 'text-green-900 px-2 font-bold text-xl'}>{product.stock > 0 ? 'In Stock':'Out Of Stock'}</span></p>
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2  ">
            <Button onClick={addToCart} disabled={product.stock ==0}  className="w-52 bg-blue-gray-700 text-white hover:bg-brown-700">
              Add to Cart
            </Button>
            
          </div>
        </div>
      </div>
      <Footer theme={theme} setLogout={setLogout}  />
      </Fragment>
  );
}

export default ProductDetails;