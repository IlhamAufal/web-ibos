import React from "react";
import Bground from "../Login/Asset/Bground.png";
import LoginForm from "./loginForm";
import Footer from "../General/Footer";

const BackgroundComponent = () => {
  return (
    <div className="overlay">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${Bground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: "2",
        }}
      >
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default BackgroundComponent;
