import { useState } from "react";
import PropTypes from "prop-types";

const LinearScaleQuestion = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="question-card">
      <h3>Linear Scale <span className="required">*</span></h3>
      <div className="linear-scale">
        <div className="scale-text">Worst</div>
        <label className="scale-label">
          <input
            type="radio"
            name="linearScale"
            value="1"
            onChange={handleRadioChange}
            required
          />
          1
        </label>
        <label className="scale-label">
          <input
            type="radio"
            name="linearScale"
            value="2"
            onChange={handleRadioChange}
            required
          />
          2
        </label>
        <label className="scale-label">
          <input
            type="radio"
            name="linearScale"
            value="3"
            onChange={handleRadioChange}
            required
          />
          3
        </label>
        <label className="scale-label">
          <input
            type="radio"
            name="linearScale"
            value="4"
            onChange={handleRadioChange}
            required
          />
          4
        </label>
        <label className="scale-label">
          <input
            type="radio"
            name="linearScale"
            value="5"
            onChange={handleRadioChange}
            required
          />
          5
        </label>
        <div className="scale-text">Best</div>
      </div>
      {selectedValue !== null && <p>Selected Value: {selectedValue}</p>}
    </div>
  );
};

LinearScaleQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default LinearScaleQuestion;
