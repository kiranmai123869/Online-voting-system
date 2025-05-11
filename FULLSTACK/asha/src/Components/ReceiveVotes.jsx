import { useState } from "react";
import { motion } from "framer-motion";
import "../CSS/ReceiveVotes.css"; // Import CSS file

export default function ReceiveVotes() {
  const [votes, setVotes] = useState({
    bjp: 0,
    congress: 0,
    aap: 0,
  });

  const parties = [
    { id: "bjp", name: "Bharatiya Janata Party", candidate: "Narendra Modi", img: "../images/bjp.png" },
    { id: "congress", name: "Indian National Congress", candidate: "Rahul Gandhi", img: "../images/congress.png" },
    { id: "aap", name: "Aam Aadmi Party", candidate: "Arvind Kejriwal", img: "../images/aap.png" },
  ];

  const handleVote = (partyId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [partyId]: prevVotes[partyId] + 1,
    }));
  };

  return (
    <div className="vote-container">
      <h2>Receive Votes</h2>
      <div className="party-cards">
        {parties.map((party) => (
          <motion.div key={party.id} className="party-card" whileHover={{ scale: 1.05 }}>
            <img src={party.img} alt={party.name} className="party-image" />
            <h3>{party.candidate}</h3>
            <p className="party-name">{party.name}</p>

            <motion.button
              onClick={() => handleVote(party.id)}
              className="vote-button"
              whileTap={{ scale: 0.9 }}
            >
              Vote
            </motion.button>

            <p className="vote-count">Votes: {votes[party.id]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}