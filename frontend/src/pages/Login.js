import React, { useState,useEffect } from "react";
import "./Login.css";
import log from "../img/log.svg";
import register from "../img/register.svg";
import 'boxicons';
import { emailValidator, passwordValidator } from '../components/redgexValidater';
import {useNavigate} from "react-router-dom";


export default function Login() {
  
    const navigate = useNavigate();
    
    const [action , setAction]=useState('sign-in-mode');
    const [input, setInput] =useState({ email: '', password: '' });
    const [errorMessage, seterrorMessage] =useState('');
	  const [successMessage, setsuccessMessage] =useState('');

    const [upInput, setUpInput] =useState({ email: '', password: '' });
    const [user , setUser]=useState({ email: 'admin@gmail.com', password: 'Admin@123' });
    const [errorUpMessage, seterrorUpMessage] =useState('');
    const [successUpMessage, setsuccessUpMessage] =useState('');


    function signHandler(){
        action=='sign-up-mode'?setAction('sign-in-mode'):setAction('sign-up-mode');
    }

    const handleChange = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleUpChange = e => {
      setUpInput({ ...upInput, [e.target.name]: e.target.value });
      setUser({ ...user, [e.target.name]: e.target.value });
    };
   

    useEffect(()=>{
      if(localStorage.getItem('auth')) navigate('/home')
    })

    const formInSubmitter = e => {
      e.preventDefault();
      setsuccessMessage('');
      seterrorMessage('')
      if (!emailValidator(input.email)) return seterrorMessage('Please Enter Valid Email Id');
  
      if (!passwordValidator(input.password))
        return seterrorMessage(
          'Please Enter Valid Password'
        );
      // setsuccessMessage('Successfully Validated');
      if(input.email !== user.email || input.password !== user.password) return seterrorMessage('Incorrect email or password');
      navigate('/home')
      localStorage.setItem('auth', true)
  
    };
    console.log(upInput)
    const formUpSubmitter = e => {
      e.preventDefault();
      setsuccessUpMessage('');
      seterrorUpMessage('')
      if (!emailValidator(upInput.email)) return seterrorUpMessage('Please Enter Valid Email Id');
  
      if (!passwordValidator(upInput.password))
        return seterrorUpMessage(
          'Please Enter Strong Password'
        );
      // setsuccessMessage('Successfully Validated');
       
       
      if(!emailValidator(upInput.email) || !passwordValidator(upInput.password)) {
        seterrorUpMessage('Enter Valid details')
      } else {
        
        setUpInput({ ...upInput, [e.target.name]: e.target.value })
        setsuccessUpMessage('User added successfully go and logged in')
        console.log(upInput)
      }
          
       
      
  
    };

  return (
    <div className={`containerlog ${action}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
            <div className="input-field">
            <box-icon type='solid' name='user'></box-icon>
              <input type="text" name="email" onChange={handleChange} placeholder="Username"/>
            </div>
            <div className="input-field">
            <box-icon type='solid' name='lock-alt'></box-icon>
              <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            </div>
            <input type="submit" value="Login" onClick={formInSubmitter} className="btn solid" />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            {errorUpMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorUpMessage}</div>}
							{successUpMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successUpMessage}</div>
							)}
            <div className="input-field">
            <box-icon type='solid' name='user'></box-icon>
              <input type="text"  placeholder="Username" />
            </div>
            <div className="input-field">
            <box-icon name='envelope' type='solid' ></box-icon>
              <input type="email" onChange={handleUpChange} name="email" placeholder="Email" />
            </div>
            <div className="input-field">
            <box-icon type='solid' name='lock-alt'></box-icon>
              <input type="password" onChange={handleUpChange} name="password" placeholder="Password" />
            </div>
            <input type="submit" onClick={formUpSubmitter} className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
                 If you are a new user Sign up here , Create a connection and get what you want...!
            </p>
            <button onClick={signHandler} className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              If you already have an account here , Please go sign-in and get What you want...!
            </p>
            <button onClick={signHandler} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
