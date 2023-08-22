import { useState } from "react";
import PropTypes from "prop-types";

const MultiChoiceGridQuestion = ({ onChange }) => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleOptionChange = (row, column, value) => {
    const newSelectedValues = { ...selectedValues };
    newSelectedValues[`${row}-${column}`] = value;
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  return (
    <div className="question-card">
      <h3>Multi Choice Grid <span className="required">*</span></h3>
      <table className="grid-table">
        <tbody>
          <tr id="grid-column">
            <th></th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>Row 1</td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(1, 1, "Option 1")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(1, 2, "Option 1")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(1, 3, "Option 1")}
              />
            </td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(2, 1, "Option 2")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(2, 2, "Option 2")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(2, 3, "Option 2")}
              />
            </td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(3, 1, "Option 3")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(3, 2, "Option 3")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="grid-1-1"
                onChange={() => handleOptionChange(3, 3, "Option 3")}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

MultiChoiceGridQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MultiChoiceGridQuestion;
