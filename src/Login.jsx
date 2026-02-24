import React, { useEffect, useState } from "react";
import Lightning from "./Lightning";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDoc, where,query, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import axios from "axios";

const Login = () => {
  let [data,setData]=useState([])
  let [userData,setUserData]=useState({
    email:'',
    password:''
  })
  useEffect(()=>{
    axios.get(`http://localhost:3000/user`)
      .then(res=>setData(res.data))
      .catch(e=>console.log(e))
  },[handleData])
  
  let navigate=useNavigate();
  
  
  let setdata=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }
  
  var handleData=async()=>{
    if(!userData.email||!userData.password)
       {
           alert("Please enter all required fields.")
           return
       }
        let q=query(collection(db,'user'),where('email','==',userData.email),where('password','==',userData.password));
        let dataBasedata=await getDocs(q);
        if(dataBasedata.empty)
        {
          alert("User not found")
          return;
        }
        else
        {
          localStorage.setItem('user',JSON.stringify(userData));
          alert("You have logged in successfully.")
          navigate('/')
        }

  }
  return (
    <div>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
      <div className="inputConatiner">
        <input type="text" name="email" id="emailInput" placeholder='Enter your Email' onChange={setdata}/>
        <input type="text" name="password" id="passwordInput" placeholder='Enter password' onChange={setdata}/>
        <p style={{fontSize:'1.5vh', color:'white'}}>if you don't have account <span style={{color:'purple',cursor:'pointer'}} onClick={()=>{navigate('/signin')}}>Click here</span></p>
        <button id='RegisterButton' onClick={handleData}>Login</button>
      </div>
    </div>
  );
};

export default Login;
