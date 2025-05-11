import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/css/All.css'; 

const All = () => {
  const navigate = useNavigate();

  const experiments = [
    { id: 1, name: "Experiment 1", path: "/" },
    { id: 2, name: "Experiment 2", path: "/ex3" },
    { id: 3, name: "Experiment 3", path: "/q" },
    { id: 5, name: "Experiment 4", path: "/6" },
    { id: 6, name: "Experiment 5", path: "/w" },
  ];

  return (
    <div className="container">
      <h1>List of Exercises</h1>
      <h2>2300032777</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Experiment Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {experiments.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.id}</td>
              <td>{exp.name}</td>
              <td>
                <button onClick={() => navigate(exp.path)}>Go to {exp.name}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All;