import React from "react";
import ReactDom from "react-dom/client"
import App from "./App"
import "./styles.css"


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>  
)










/*
//index.js
import React from 'react';

import '../src/Login.css';

function Login() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <input type="text" placeholder="Username" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
    </div>
  );
}

export default Login;
*/