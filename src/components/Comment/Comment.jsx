import { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./Comment.module.css";

const Comment = ({ comment, onReply, onEdit, onDelete }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    onEdit(comment.id, editText, comment.parentId);
    setIsEditing(false);
  };

  const handleReply = (replyData) => {
    onReply(comment.id, replyData);
    setIsReplying(false);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <strong>{comment.name}</strong>
        <span>{format(new Date(comment.date), "dd/MM/yyyy HH:mm")}</span>
      </div>
      <div className={styles.commentContent}>
        {isEditing ? (
          <div>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className={styles.editTextarea}
            />
            <button onClick={handleEdit} className={styles.saveButton}>
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        ) : (
          <p>{comment.text}</p>
        )}
      </div>
      <div className={styles.commentActions}>
        <button
          onClick={() => setIsEditing(true)}
          className={styles.editButton}
        >
          Edit
        </button>
        <button
          onClick={() => setIsReplying(!isReplying)}
          className={styles.replyButton}
        >
          Reply
        </button>
      </div>
      <button
        onClick={() => onDelete(comment.id, comment.parentId)}
        className={styles.deleteButton}
      >
        X
      </button>
      {isReplying && <CommentForm onSubmit={handleReply} />}
      <div className={styles.replies}>
        {comment.replies &&
          comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    replies: PropTypes.array,
    parentId: PropTypes.number,
  }).isRequired,
  onReply: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Comment;
