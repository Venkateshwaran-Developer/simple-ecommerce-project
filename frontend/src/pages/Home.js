import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import Footer from "../components/Footer";

function Home({theme,setTheme,cartItems}) {

  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);


    const [products,setProducts]=useState([]);
    const [searchParams]=useSearchParams();

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[searchParams])

    


  return (
    <Fragment>
        
        {/* <h1 className={ `container text-gray-700 font-bold text-2xl ${theme} flex h-auto pt-20 justify-center items-center`} >Latest Products</h1> */}
        <Header cartItems={cartItems} theme={theme} setTheme={setTheme} />
        
        <div className={` container ${theme} pt-40  pb-10 grid md:grid-cols-3 sm:grid-cols-2 gap-y-24 `}>
        {products.map(product=><ProductCard theme={theme}  product={product} />)}

        </div>
        <Footer theme={theme} setLogout={setLogout}  />

        
    </Fragment>
  )
}

export default Home