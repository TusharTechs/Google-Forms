import { useState } from "react";
import PropTypes from "prop-types";

const CheckboxQuestion = ({ onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
    onChange(selectedOptions);
  };

  return (
    <div className="question-card">
      <h3>
        Checkbox <span className="required">*</span>
      </h3>
      <div className="checkbox-options">
        <label className="option-label">
          <input
            type="checkbox"
            name="checkboxOption1"
            value="Option 1"
            checked={selectedOptions.includes("Option 1")}
            onChange={handleOptionChange}
            required
          />
          Option 1
        </label>
        <label className="option-label">
          <input
            type="checkbox"
            name="checkboxOption1"
            value="Option 2"
            checked={selectedOptions.includes("Option 1")}
            onChange={handleOptionChange}
            required
          />
          Option 2
        </label>
        <label className="option-label">
          <input
            type="checkbox"
            name="checkboxOption1"
            value="Option 3"
            checked={selectedOptions.includes("Option 1")}
            onChange={handleOptionChange}
            required
          />
          Option 3
        </label>
      </div>
    </div>
  );
};

CheckboxQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CheckboxQuestion;
