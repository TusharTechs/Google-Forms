import { Link } from "react-router-dom";

const ResponsePage = () => {
  return (
    <div className="form-container">
      <div className="question-card" id="response-card">
        <p>Your response has been recorded.</p>
        <Link to="/">Submit another response</Link>
      </div>
    </div>
  );
};

export default ResponsePage;
