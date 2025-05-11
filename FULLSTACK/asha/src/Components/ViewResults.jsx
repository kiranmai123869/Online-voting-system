import React, { useState, useEffect } from "react";
import "../CSS/ViewResults.css";

const ViewResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch election results
    const fetchResults = async () => {
      try {
        const response = await fetch("/api/results"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch results");
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return <div className="loading">Loading results...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="view-results-container">
      <h1 className="results-title">Election Results</h1>
      {results.length > 0 ? (
        <table className="results-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Votes</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.candidate}</td>
                <td>{result.votes}</td>
                <td>{result.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-results">No results available.</p>
      )}
    </div>
  );
};

export default ViewResults;