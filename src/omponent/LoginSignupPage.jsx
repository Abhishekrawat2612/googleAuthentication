
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import {auth , provider} from "../config"
import {signInWithPopup} from 'firebase/auth'
import { useEffect, useState } from 'react'
import SignInUserDetails from "../SignInUserDetails"

import "../index.css"
const LoginSignupPage = () => {
    const [value, setValue] = useState("")
    const handleGoogle = ()=>{
        signInWithPopup(auth, provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    }, [])
    
  return (
    <div style={{margin:"auto"}}>
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
            <div className="linkpage">  
                { 
                value ? <SignInUserDetails/> :       
                <p onClick={handleGoogle} 
                className="google-paragraph">
                    <span className="icon-span">
                        <FontAwesomeIcon icon={faGoogle} />
                    </span>
                    <span>With  Google</span>
                </p>
                }
                <p className="linkpage">
                    <span className="icon-span">
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <span>With  gitHub</span>
                </p>
            </div>
        <div className="outer-container">
            <form className="inner-container" >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            
            <input type="submit" value="Submit" />
            </form>          
        </div>
    </div>
  )
}

export default LoginSignupPage