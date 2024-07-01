import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import "./LoginStyle.css";

const Form = () => {
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
  });

  const [eye, setEye] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", inputText)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        } else {
          console.error("Login failed");
        }
      })
      .catch((err) => console.error(err));
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInputText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setEye(!eye);
  };

  return (
    <div className="container">
      <div
        style={{
          height: "380px",
          width: "350px",
          backgroundColor: "#fff",
          position: "relative",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div className="text">
          <h3>Welcome Back</h3>
          <p>Enter your credentials to access your account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-text">
            <input
              type="text"
              placeholder="Enter your email"
              value={inputText.email}
              onChange={inputEvent}
              name="email"
            />
            <i className="fa fa-envelope"></i>
          </div>
          <div className="input-text">
            <input
              type={eye ? "password" : "text"}
              placeholder="Enter your password"
              value={inputText.password}
              onChange={inputEvent}
              name="password"
            />
            <i className="fa fa-lock"></i>
            <i
              onClick={togglePasswordVisibility}
              className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
          <div className="buttons">
            <button type="submit" href="/">
              Sign in
            </button>
          </div>
          <div className="forgot">
            <p>
              Forgot your password? <a href="#">Reset Password</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <Form />
  </Router>,
  document.getElementById("root"),
);

export default Form;
