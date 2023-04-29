import React from "react";
import "./LoginForm.css"



const LoginForm = () => {



  return(
    <div className="cover">

      <h3>Login</h3>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>

      <div className="login-btn">Login</div>
      
      <p className="text">Don’t have an account? <a href="http://192.168.1.234:3000/#"className="link">Sign up</a></p>

      <p className="text">Or Login Using</p>

      <div className="alt-login">
        <div className="github"></div>
        <div className="facebook"></div>
        <div className="google"></div>
      </div>

  
    </div>
  )
}

export default LoginForm