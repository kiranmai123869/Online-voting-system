import React, { useState } from "react";
import "../CSS/VoterVerification.css"; // Import CSS file

const VoterVerification = () => {
  const [voterId, setVoterId] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(null); // Track validity

  const handleSubmit = (e) => {
    e.preventDefault();

    if (voterId.length !== 10 || !dob) {
      setMessage("❌ Invalid Voter ID or Date of Birth. Please check your details.");
      setIsValid(false);
      return;
    }

    if (aadhaar && aadhaar.length !== 12) {
      setMessage("❌ Invalid Aadhaar Number. It must be 12 digits.");
      setIsValid(false);
      return;
    }

    setMessage("✅ Verification Successful!");
    setIsValid(true);
  };

  return (
    <div className="verification-container">
      <h2>Voter Verification</h2>
      <form onSubmit={handleSubmit} className="verification-form">
        {/* Voter ID */}
        <label>Voter ID:</label>
        <input
          type="text"
          placeholder="Enter Voter ID"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />

        {/* Date of Birth */}
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        {/* Aadhaar Number (Optional) */}
        <label>Aadhaar Number (Optional):</label>
        <input
          type="text"
          placeholder="Enter Aadhaar Number (12 digits)"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
        />

        {/* Name (Optional) */}
        <label>Name (Optional):</label>
        <input
          type="text"
          placeholder="Enter Name (if required)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit">Verify</button>
      </form>

      {/* Verification Message */}
      {message && (
        <p className={`message ${isValid ? "valid-message" : "invalid-message"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default VoterVerification;