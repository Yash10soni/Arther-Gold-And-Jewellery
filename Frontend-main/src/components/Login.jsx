// Frontend-main/src/components/Login.jsx
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const Login = () => {
  useEffect(() => {
  axios.get("http://localhost:5000/auth/login/success", { withCredentials: true })
    .then((res) => {
      console.log(res.data); // user info
    })
    .catch((err) => {
      console.log("Not logged in");
    });
}, []);

  const handleGoogleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login to continue</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;

