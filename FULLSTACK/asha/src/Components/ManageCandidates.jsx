import React, { useState } from "react";
import "../CSS/ManageCandidates.css";

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [candidateName, setCandidateName] = useState("");
  const [candidateParty, setCandidateParty] = useState("");

  // Add a new candidate
  const handleAddCandidate = () => {
    if (candidateName && candidateParty) {
      const newCandidate = {
        id: Date.now(),
        name: candidateName,
        party: candidateParty,
      };
      setCandidates([...candidates, newCandidate]);
      setCandidateName("");
      setCandidateParty("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  // Delete a candidate
  const handleDeleteCandidate = (id) => {
    const updatedCandidates = candidates.filter((candidate) => candidate.id !== id);
    setCandidates(updatedCandidates);
  };

  return (
    <div className="manage-candidates-container">
      <h1 className="title">Manage Candidates</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Candidate Name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Candidate Party"
          value={candidateParty}
          onChange={(e) => setCandidateParty(e.target.value)}
          className="input"
        />
        <button className="add-btn" onClick={handleAddCandidate}>
          Add Candidate
        </button>
      </div>

      <h2 className="subtitle">Candidates List</h2>
      {candidates.length > 0 ? (
        <ul className="candidate-list">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="candidate-item">
              <span className="candidate-info">
                <strong>Name:</strong> {candidate.name} | <strong>Party:</strong> {candidate.party}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDeleteCandidate(candidate.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-candidates">No candidates added yet.</p>
      )}
    </div>
  );
};

export default ManageCandidates;