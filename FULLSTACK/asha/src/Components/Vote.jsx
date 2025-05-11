import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "../CSS/Vote.css";

export default function CastYourVote() {
  const [votes, setVotes] = useState({});

  const parties = [
    { id: "bjp", name: "Bharatiya Janata Party", candidate: "Narendra Modi", img: "/images/bjp.png" },
    { id: "congress", name: "Indian National Congress", candidate: "Rahul Gandhi", img: "/images/congress.png" },
    { id: "aap", name: "Aam Aadmi Party", candidate: "Arvind Kejriwal", img: "/images/aap.png" },
    { id: "tmc", name: "Trinamool Congress", candidate: "Mamata Banerjee", img: "/images/tmc.png" },
    { id: "bsp", name: "Bahujan Samaj Party", candidate: "Mayawati", img: "/images/bsp.png" },
    { id: "sp", name: "Samajwadi Party", candidate: "Akhilesh Yadav", img: "/images/sp.png" },
    { id: "shiv_sena", name: "Shiv Sena (UBT)", candidate: "Uddhav Thackeray", img: "/images/shiv_sena.png" },
    { id: "ncp", name: "Nationalist Congress Party", candidate: "Sharad Pawar", img: "/images/ncp.png" }
  ];

  const handleVote = (partyId, choice) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [partyId]: choice,
    }));
  };

  const handleSubmit = (partyId) => {
    const voteChoice = votes[partyId] === "yes" ? "for" : votes[partyId] === "no" ? "against" : "undecided";
    alert(`You voted ${voteChoice} ${votes[partyId] ? `(${votes[partyId]})` : ""} for ${parties.find(p => p.id === partyId)?.name || partyId}`);
  };

  return (
    <div className="vote-container">
      <h2>Cast Your Vote</h2>
      <div className="party-cards">
        {parties.map((party) => (
          <div key={party.id} className="party-card">
            <img src={party.img} alt={party.name} className="party-image" />
            <h3>{party.name}</h3>
            <p className="candidate-name">{party.candidate}</p>
            <div className="vote-options">
              <motion.button
                onClick={() => handleVote(party.id, "yes")}
                className={`vote-button ${votes[party.id] === "yes" ? "selected" : ""}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThumbsUp className="icon yes" />
                <span>Yes</span>
              </motion.button>
              <motion.button
                onClick={() => handleVote(party.id, "no")}
                className={`vote-button ${votes[party.id] === "no" ? "selected" : ""}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ThumbsDown className="icon no" />
                <span>No</span>
              </motion.button>
            </div>
            <button
              onClick={() => handleSubmit(party.id)}
              disabled={!votes[party.id]}
              className="submit-button"
            >
              Submit Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}