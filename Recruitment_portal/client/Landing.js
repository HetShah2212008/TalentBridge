import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Company Careers</h1>
      <button onClick={() => navigate("/register")} className="btn">Apply as Candidate</button>
      <button onClick={() => navigate("/login")} className="btn">Candidate Login</button>
      <button onClick={() => navigate("/login")} className="btn">Recruiter Login</button>
    </div>
  );
}
export default Landing;