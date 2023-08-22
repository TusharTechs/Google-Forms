import PropTypes from "prop-types";

const DropdownQuestion = ({ onChange }) => {
  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    onChange(selectedOption);
  };

  return (
    <div className="question-card">
      <h3>Dropdown <span className="required">*</span></h3>
      <label className="dropdown-label">
        <select className="dropdown" onChange={handleSelectChange} required>
          <option value="" className="label-text">
            Choose
          </option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </label>
    </div>
  );
};

DropdownQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DropdownQuestion;
