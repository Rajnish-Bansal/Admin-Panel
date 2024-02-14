import React, { useState } from "react";
import "./login.css";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const authentication = () => {
    if (username === "admin" && password === "admin") {
      alert("Welcome");
      props.setIsLoggedIn(true);
    } else {
      setError("Incorrect Username or Password !!");
      props.setIsLoggedIn(false);
    }
  };

  return (
    <div className="login-div">
      <h2>Hello Admin!</h2>
      <p className="error-text">{error}</p>
      <div className="login-input-div">
        <div>
          Username :
          <input type="text" value={username} onChange={handleUsername}></input>
        </div>
        <div>
          Password :
          <input
            type="password"
            value={password}
            onChange={handlePassword}
          ></input>
        </div>
      </div>
      <button className="login-button" onClick={authentication}>
        Log In
      </button>
      <p className="newuser-text">
        New User? <a>Click here</a>
      </p>
    </div>
  );
}

export default Login;
