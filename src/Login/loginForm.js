import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './LoginStyle.css'

const Form = () => {
    const [inputText, setInputText] = useState({
        email: "",
        password: ""
    });

    const [warnEmail, setWarnEmail] = useState(false);
    const [warnPassword, setWarnPassword] = useState(false);
    const [eye, setEye] = useState(true);
    const [password, setPassword] = useState("password");
    const [type, setType] = useState(false);

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setInputText(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        setWarnEmail(false);
        setWarnPassword(false);
        if (inputText.email === "") {
            setWarnEmail(true);
        } else if (inputText.password === "") {
            setWarnPassword(true);
        } else {
            alert("Form submitted");
        }
    }

    const Eye = () => {
        if (password === "password") {
            setPassword("text");
            setEye(false);
            setType(true);
        } else {
            setPassword("password");
            setEye(true);
            setType(false);
        }
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="text">
                        <h3>Welcome Back</h3>
                        <p>Enter your credentials to access your account.</p>
                    </div>
                    <form onSubmit={submitForm}>
                        <div className="input-text">
                            <input
                                type="text"
                                className={` ${warnEmail ? "warning" : "" }`}
                                placeholder="Enter your email"
                                value={inputText.email}
                                onChange={inputEvent}
                                name="email"
                            />
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="input-text">
                            <input
                                type={password}
                                className={` ${warnPassword ? "warning" : "" } ${type ? "type_password" : "" }`}
                                placeholder="Enter your password"
                                value={inputText.password}
                                onChange={inputEvent}
                                name="password"
                            />
                            <i className="fa fa-lock"></i>
                            <i
                                onClick={Eye}
                                className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}
                            ></i>
                        </div>
                        <div className="buttons">
                            <button type="submit">Sign in</button>
                        </div>
                        <div className="forgot">
                            <p>Forgot your password? <a href="#">Reset Password</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

ReactDOM.render(
    <Form />,
    document.getElementById("root")
);

export default Form;