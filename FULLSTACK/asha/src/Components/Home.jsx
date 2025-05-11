import React from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  return (
    <div 
      className="homepage-container"
      style={{ 
        background: "url('/images/Home.png') no-repeat center center fixed",
        backgroundSize: "cover"
      }}
    >
      <div className="content">
        <h1 className="title">Online Voting</h1>
        <p className="description">
          Welcome to the Online Voting platform. Participate in secure, transparent, and easy voting from the comfort of your home.
        </p>
        <div className="buttons">
          <button className="btn signup-btn" onClick={() => window.location.href = "/s"}>
            Sign Up
          </button>
          <button className="btn login-btn" onClick={() => window.location.href = "/l"}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;