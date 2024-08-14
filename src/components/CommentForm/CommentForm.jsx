import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CommentForm.module.css";

const CommentForm = ({ onSubmit, initialValues = { name: "", text: "" } }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.text) {
      onSubmit(formData);
      setFormData({ name: "", text: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        required
        className={styles.input}
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleInputChange}
        placeholder="Your Comment"
        required
        className={styles.textarea}
      />
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default CommentForm;
