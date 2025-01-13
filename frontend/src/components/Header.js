import React, { useState } from 'react';
import './Header.css';
import 'boxicons';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


export default function Header({cartItems,theme , setTheme}) {

    const [keyword, setKeyword]  = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
        navigate('/home/search?keyword='+keyword)
    }

    const [open , setOpen]=useState('close');
    const [active , setActive]=useState('inactive');
    const search_click=()=>{
        open == 'open'?setOpen('close'):setOpen('open')
        
    }
    const toggleMenu=()=>{
        active == 'active'?setActive('inactive'):setActive('active')
        
    }
  

    const toggle_mode = ()=>{
        // eslint-disable-next-line eqeqeq
        theme == 'light' ? setTheme('dark'): setTheme('light')
        }
    



  return (
    <div className={`container  ${theme}`}>
        <div className="nav ">
        <div className={`nav-bar ${active}`}>
            <span className="sidebarOpen" onClick={toggleMenu}><box-icon color='white' name='menu'></box-icon></span> 
            <span className="navLogo"><Link to="/home">ShoppingCart</Link></span>

            <div className={`menu  ${active}`}>
                <div className="logo-toggle">
                        <span className="logo"><Link to="/home">ShoppingCart</Link></span>
                       <span className="sidebarClose" onClick={toggleMenu} ><box-icon color='white'  name='x'></box-icon></span>
                </div>
                
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/">Customer Support</Link></li>
                </ul>
                
            </div>
            <div className="darkLight-searchBox">
                    <div className={`dark-light  ${theme}`}>
                        <span className="moon" onClick={()=>toggle_mode()}><box-icon color='white'  animation='tada-hover' name='moon' ></box-icon></span>
                        <span className="sun" onClick={()=>toggle_mode()}><box-icon color='white'  animation='spin-hover' name='sun' ></box-icon></span>
                        
                    </div>
                    <div className={`searchBox  ${open}`}>
                        <div className={`searchToggle  ${open}`}>
                            <span className="cancel" onClick={search_click}><box-icon color='white'   name='x'></box-icon></span>
                            <span className="search" onClick={search_click}><box-icon color='white'  name='search' ></box-icon></span>
                            
                        
                            <div className={`search-field ${theme} ${open}`}>
                                <input 
                                type="text" 
                                placeholder="Search..."
                                onChange={(e) => setKeyword(e.target.value)}
                                onBlur={searchHandler}
                                />
                                <span className='blueicon' onClick={searchHandler} ><box-icon color='#4070F4' size='sm'  name='search' ></box-icon></span>
                                <span className='whiteicon' onClick={searchHandler} ><box-icon color='white' size='sm'  name='search' ></box-icon></span>
                            </div>
                        </div>
                        
                    </div>
                    <div className={`cartcount mt-3 ${open}`}>
                    <Link className='flex' to={'/cart'}>
                        <span className='carticon cursor-pointer ' ><box-icon color='white' name='cart'></box-icon></span>
                        <span className="count "><input className='h-5 w-5 rounded-sm outline-none bg-white text-black  text-center text-xs cursor-pointer' value={cartItems.length}/></span>
                    </Link>
                    </div>
            </div>
        </div>
        </div>
      </div>
    
  );
}







// 

// function App() {


//     <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    
    
//       const container = document.querySelector(".container");
//       const nav = document.querySelector(".nav");
//       const modeToggle = document.querySelector(".dark-light");
//       const searchToggle = document.querySelector(".searchToggle");
//       const sidebarOpen = document.querySelector(".sidebarOpen");
//       const siderbarClose = document.querySelector(".siderbarClose");
    
    
//       let getMode = localStorage.getItem("mode");
    
//           if(getMode && getMode === "dark-mode"){
//             container.classList.add("dark");
//           }
    
//     // js code to toggle dark and light mode
//      modeToggle.addEventListener("click" , () =>{
//         modeToggle.classList.toggle("active");
//         container.classList.toggle("dark");
    
//         // js code to keep user selected mode even page refresh or file reopen
//         if(!container.classList.contains("dark")){
//             localStorage.setItem("mode" , "light-mode");
//         }else{
//             localStorage.setItem("mode" , "dark-mode");
//         }
//       });
    
//     // js code to toggle search box
//         searchToggle.addEventListener("click" , () =>{
//         searchToggle.classList.toggle("active");
//       });
    
      
//     //   js code to toggle sidebar
//     sidebarOpen.addEventListener("click" , () =>{
//     nav.classList.add("active");
//     });
    
//     container.addEventListener("click" , e =>{
//     let clickedElm = e.target;
    
//     if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//         nav.classList.remove("active");
//     }
//     });
    
    
    
    
    
    
//       return (
//         <div className="container">
//         <div className="nav" >
//             <div className="nav-bar">
//                 <box-icon className="sidebarOpen" name='menu'></box-icon>
//                 <span className="logo navLogo"><a href="#">ShoppingCart</a></span>
    
//                 <div className="menu">
//                     <div className="logo-toggle">
//                         <span className="logo"><a href="#" alt="">ShoppingCart</a></span>
//                         <box-icon className="sidebarClose" name='x'></box-icon>
//                     </div>
    
//                     <ul className="nav-links">
//                         <li><a href="#" alt="">Home</a></li>
//                         <li><a href="#" alt="">About</a></li>
//                         <li><a href="#" alt="">Portfolio</a></li>
//                         <li><a href="#" alt="">Services</a></li>
//                         <li><a href="#" alt="">Contact</a></li>
//                     </ul>
//                 </div>
    
//                 <div className="darkLight-searchBox">
//                     <div className="dark-light">
//                         <box-icon className="moon" name='moon' ></box-icon>
//                         <box-icon className="sun" name='sun' ></box-icon>
//                     </div>
    
//                     <div className="searchBox">
//                        <div className="searchToggle">
                            
//                               <box-icon className="cancel" name='x'></box-icon>
//                               <box-icon className="search" name='search' ></box-icon>
                              
//                        </div>
    
//                         <div className="search-field">
//                             <input type="text" placeholder="Search..."/>
//                             <box-icon className="search" name='search' ></box-icon>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </div>
//           </div>
//       );
//     }
    
//     export default App;
    