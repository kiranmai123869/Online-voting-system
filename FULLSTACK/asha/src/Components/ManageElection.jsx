import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ManageElection.css";

const ManageElection = () => {
  const [elections, setElections] = useState([]);
  const [electionName, setElectionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const addElection = () => {
    if (electionName.trim() === "") return;

    const newElection = {
      id: Date.now(),
      name: electionName,
      startDate,
      endDate,
    };

    setElections([...elections, newElection]);
    setElectionName("");
    setStartDate("");
    setEndDate("");
  };

  const deleteElection = (id) => {
    setElections(elections.filter((election) => election.id !== id));
  };

  return (
    <div className="manage-election">
      <h2>🗳 Manage Elections</h2>

      <button className="back-btn" onClick={() => navigate("/l")}>
        🔙 Back
      </button>

      <div className="election-form">
        <input
          type="text"
          placeholder="Election Name"
          value={electionName}
          onChange={(e) => setElectionName(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={addElection}>➕ Add Election</button>
      </div>

      <h3>🗂 Active Elections</h3>
      <ul>
        {elections.length === 0 ? (
          <p>No elections available.</p>
        ) : (
          elections.map((election) => (
            <li key={election.id}>
              <span>
                <strong>{election.name}</strong> 🕒 {election.startDate} -{" "}
                {election.endDate}
              </span>
              <button className="delete-btn" onClick={() => deleteElection(election.id)}>
                ❌ Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ManageElection;