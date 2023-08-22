import { useState } from "react";
import "./Form.css";

import MCQ from "./MCQ";
import Checkbox from "./Checkbox";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import Dropdown from "./Dropdown";
import FileUpload from "./FileUpload";
import LinearScale from "./LinearScale";
import MultiChoiceGrid from "./MultiChoiceGrid";
import TickBoxGrid from "./TickBoxGrid";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(true);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "mcqQuestion",
      "checkboxQuestion",
      "shortAnswer",
      "paragraph",
      "dropdown",
      "file",
      "linearScale",
      "multiChoiceGrid",
      "tickBoxGrid",
    ];

    const incompleteFields = requiredFields.filter((field) => !formData[field]);

    if (incompleteFields.length > 0) {
      setIsFormComplete(false);
    } else {
      setIsFormComplete(true);
      console.log(formData);
    }

    if (setIsFormComplete) {
      window.location("/response");
    }
  };

  const handleClearForm = () => {
    const shouldClear = window.confirm(
      "Clear form?\nThis will remove your answers from all questions, and cannot be undone."
    );

    if (shouldClear) {
      setFormData({});
      window.location.reload();
    }
  };

  return (
    <div className="form-container">
      <MCQ onChange={(value) => handleInputChange("mcqQuestion", value)} />

      <Checkbox
        onChange={(value) => handleInputChange("checkboxQuestion", value)}
      />

      <ShortAnswer
        onChange={(value) => handleInputChange("shortAnswer", value)}
      />

      <Paragraph onChange={(value) => handleInputChange("paragraph", value)} />

      <Dropdown onChange={(value) => handleInputChange("dropdown", value)} />

      <FileUpload onChange={(value) => handleInputChange("file", value)} />

      <LinearScale
        onChange={(value) => handleInputChange("linearScale", value)}
      />

      <MultiChoiceGrid
        onChange={(value) => handleInputChange("multiChoiceGrid", value)}
      />

      <TickBoxGrid
        onChange={(value) => handleInputChange("tickBoxGrid", value)}
      />

      <div className="footer">
        <div className="submit-container">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="clear-button" onClick={handleClearForm}>
            Clear form
          </button>
        </div>
        {!isFormComplete && (
          <p className="error-message">Please fill out all required fields.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
