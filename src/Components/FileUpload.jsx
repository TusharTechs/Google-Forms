import { useRef } from "react";
import PropTypes from "prop-types";
import uploadImg from "../assets/upload.png";

const FileUploadQuestion = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="question-card">
      <h3>File Upload <span className="required">*</span></h3>
      <label className="file-upload-label">
        <span className="add-file-button">
          <img src={uploadImg} alt="Upload Icon" className="upload-icon" /> Add
          File
        </span>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          required
        />
      </label>
    </div>
  );
};

FileUploadQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileUploadQuestion;
