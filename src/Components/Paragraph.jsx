import PropTypes from "prop-types";

const ParagraphQuestion = ({ onChange }) => {
  const handleTextChange = (e) => {
    const answer = e.target.value;
    onChange(answer);
  };

  return (
    <div className="question-card">
      <h3>
        Paragraph <span className="required">*</span>
      </h3>
      <textarea
        name="paragraph"
        className="single-line-input"
        rows="1"
        onChange={handleTextChange}
        required
      />
    </div>
  );
};

ParagraphQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ParagraphQuestion;
