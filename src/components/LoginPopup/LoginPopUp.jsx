import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./LoginPopUp.css"

const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login") 
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className="login-popup-inputs">
                {
                    currState==="Login"?<></>: <input type='text' placeholder='Your Name' required/>
                }
               
                <input type='Email' placeholder='Your Email' required/>
                <input type='Password' placeholder='Your Password' required/>
            </div>
             <button> {currState==="Sign up"?"Create account":"Login"}</button>
             <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By Continuing, i agree to the terems of use & privacy policy.</p>
             </div>
             {
                currState==="Login"
                ?<p> Create a new account?   <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
             }
             
             
        </form>

        
    </div>
  )
}

export default LoginPopUp