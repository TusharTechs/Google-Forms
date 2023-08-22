import PropTypes from "prop-types";

const ShortAnswerQuestion = ({ onChange }) => {
  const handleTextChange = (e) => {
    const answer = e.target.value;
    onChange(answer);
  };

  return (
    <div className="question-card">
      <h3>
        Short Answer <span className="required">*</span>
      </h3>
      <input
        type="text"
        className="single-line-input"
        name="shortAnswer"
        onChange={handleTextChange}
        required
      />
    </div>
  );
};

ShortAnswerQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ShortAnswerQuestion;
