import React, { useState } from 'react'
import Lightning from "./Lightning";
import { collection, addDoc, getDoc, where,query, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    let [userData,setUserData]=useState({
        userName:'',
        email:'',
        password:''
    });
    let setdata=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    let navigate=useNavigate();
    
    let handleData=async()=>{
        if(!userData.email||!userData.userName||!userData.password)
        {
            alert("Please enter all required fields.")
            return
        }
        if(userData.password.length<8)
        {
          alert('Password should contain at least 8 characters');
          return
        }
        try{
          await addDoc(collection(db,'user'),{
            email: userData.email,
            userName: userData.userName,
            password: userData.password
          })
        }
        catch{e=>console.log(e);
        }
        let q=query(collection(db,'user'),where('email','==',userData.email));
        let dataBasedata=await getDocs(q);
        if(!dataBasedata.empty)
        {
          alert("An account with this email already exists. Please log in.")
          return;
        }
        localStorage.setItem('user',JSON.stringify(userData))
        alert("You have signed in successfully.")
        navigate('/')
    }
  return (
    <div id='signInContainer'>
      <div className="lightningWrapper" style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
      <div className='inputConatiner'>
        <input type="text" name="userName" id="usernameInput" placeholder='Enter your name' onChange={setdata}/>
        <input type="text" name="email" id="emailInput" placeholder='Enter your Email' onChange={setdata}/>
        <input type="text" name="password" id="passwordInput" placeholder='Enter password' onChange={setdata}/>
        <p>i already has a account <span style={{color:'white',cursor:'pointer'}} onClick={()=>{navigate('/login')}}>Click here</span></p>
        <button id='RegisterButton' onClick={handleData}>Register</button>
      </div>
    </div>
  )
}

export default SignIn
