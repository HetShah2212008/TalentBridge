import { useEffect, useState } from "react";
import axios from "axios";

function RecruiterDashboard() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/recruiter/candidates", {
      headers: { authorization: token }
    })
    .then(res => setCandidates(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2>Recruiter Dashboard</h2>
      {candidates.map(c => (
        <div key={c._id} className="border p-2 my-2">
          <p>Name: {c.name}</p>
          <p>Skills: {c.skills}</p>
        </div>
      ))}
    </div>
  );
}

export default RecruiterDashboard;