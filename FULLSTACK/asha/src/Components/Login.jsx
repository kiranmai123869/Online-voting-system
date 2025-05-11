import React, { useState } from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    alert(`Logging in as ${selectedRole}`);
    navigate(path);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Online Voting System</h1>

      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="role-select"
        >
          <option value="Admin">Admin</option>
          <option value="Candidates">Candidates</option>
          <option value="Voters">Voters</option>
        </select>
      </div>

      {selectedRole === "Admin" && (
        <div className="admin-login">
          <h2>Admin Dashboard</h2>
          <button className="admin-btn" onClick={() => handleNavigation("/m")}>Manage Election</button>
          <button className="admin-btn" onClick={() => handleNavigation("/c")}>Manage Candidates</button>
          <button className="admin-btn" onClick={() => handleNavigation("/r")}>View Results</button>
        </div>
      )}

      {selectedRole === "Candidates" && (
        <div className="candidates-login">
          <h2>Candidate Dashboard</h2>
          <button className="candidates-btn" onClick={() => handleNavigation("/v")}>Cast Your Vote</button>
          <button className="candidates-btn" onClick={() => handleNavigation("/R")}>Receive Votes</button>
        </div>
      )}

      {selectedRole === "Voters" && (
        <div className="voters-login">
          <h2>Voter Dashboard</h2>
          <button className="voters-btn" onClick={() => handleNavigation("/voter")}>Register</button>
          <button className="voters-btn" onClick={() => handleNavigation("/verify")}>Verify</button>
          <button className="voters-btn" onClick={() => handleNavigation("/cast")}>Cast Securely</button>
        </div>
      )}
    </div>
  );
};

export default Login;
