import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import ManageElection from './Components/ManageElection.jsx';
import ManageCandidates from './Components/ManageCandidates.jsx';
import ViewResults from './Components/ViewResults.jsx';
import Vote from './Components/Vote.jsx';
import ReceiveVotes from './Components/ReceiveVotes.jsx';
import VoterRegister from './Components/VoterRegister.jsx';
import VoterVerification from './Components/VoterVerification.jsx';
import VotersPage from './Components/VotersPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/l" element={<Login />} />
      <Route path="/s" element={<SignUp />} />
      <Route path="/m" element={<ManageElection />} />
      <Route path="/c" element={<ManageCandidates />} />
      <Route path="/r" element={<ViewResults />} />
      <Route path="/v" element={<Vote />} />
      <Route path="/R" element={<ReceiveVotes />} />
      <Route path="/voter" element={<VoterRegister />} />
      <Route path="/verify" element={<VoterVerification />} />
      <Route path="/cast" element={<VotersPage />} />
    </Routes>
  );
}

export default App;
