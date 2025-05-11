import React, { useState } from "react";
import "../CSS/VotersPage.css"; // Import CSS file

const VotersPage = () => {
  const [voterId, setVoterId] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVoteSubmit = (e) => {
    e.preventDefault();

    if (!voterId || !selectedCandidate) {
      alert("Please enter Voter ID and select a candidate.");
      return;
    }

    alert(`Vote cast successfully for ${selectedCandidate}`);

    // Clear fields after submission
    setVoterId("");
    setSelectedCandidate("");
  };

  return (
    <div className="voting-container">
      <h1>🗳 Voters - Cast Securely</h1>
      <form className="voting-form" onSubmit={handleVoteSubmit}>
        <label htmlFor="voterId">Enter Voter ID:</label>
        <input
          type="text"
          id="voterId"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          placeholder="Enter Voter ID"
          required
        />

        <label>Select a Candidate:</label>
        <div className="candidate-list">
          {["Candidate A", "Candidate B", "Candidate C"].map((candidate) => (
            <label key={candidate}>
              <input
                type="radio"
                name="candidate"
                value={candidate}
                onChange={(e) => setSelectedCandidate(e.target.value)}
                checked={selectedCandidate === candidate}
              />
              {candidate}
            </label>
          ))}
        </div>

        <button type="submit" className="vote-btn">Cast Vote</button>
      </form>
    </div>
  );
};

export default VotersPage;
