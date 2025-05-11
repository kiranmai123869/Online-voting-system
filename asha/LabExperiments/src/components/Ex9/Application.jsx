import React, { useState, useEffect } from "react";
import '/src/css/Application.css';

const Application = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:8080/student")
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  // Add student to backend
  const handleAdd = async () => {
    if (!id || !name || !phone) {
      alert("All fields are required");
      return;
    }

    const newStudent = { id, name, phone };

    try {
      const response = await fetch("http://localhost:8080/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        setStudents([...students, newStudent]); // Update state
        setId("");
        setName("");
        setPhone("");
      } else {
        console.error("Failed to add student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Delete student from backend
  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:8080/student/${studentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setStudents(students.filter(student => student.id !== studentId));
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-container">
      <h2>Student Management</h2>
      <div className="app-input-container">
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <table className="app-table">
        <thead>
          <tr>
            <th className="app-th">ID</th>
            <th className="app-th">Name</th>
            <th className="app-th">Phone Number</th>
            <th className="app-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="app-td">{student.id}</td>
              <td className="app-td">{student.name}</td>
              <td className="app-td">{student.phone}</td>
              <td className="app-td">
                <button className="app-delete-btn" onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Application;