import PropTypes from "prop-types";

const MultipleChoiceQuestion = ({ onChange }) => {
  const handleOptionChange = (selectedOption) => {
    onChange('mcqQuestion', selectedOption);
  };

  return (
    <div className="question-card">
      <h3>
        MCQ <span className="required">*</span>
      </h3>
      <div className="mcq-options">
        <label className="option-label">
          <input
            type="radio"
            name="mcqQuestion"
            value="Option 1"
            onChange={handleOptionChange}
            required
          />
          Option 1
        </label>
        <label className="option-label">
          <input
            type="radio"
            name="mcqQuestion"
            value="Option 2"
            onChange={handleOptionChange}
            required
          />
          Option 2
        </label>
        <label className="option-label">
          <input
            type="radio"
            name="mcqQuestion"
            value="Option 3"
            onChange={handleOptionChange}
            required
          />
          Option 3
        </label>
      </div>
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestion;
