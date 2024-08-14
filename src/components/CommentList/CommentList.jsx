import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import styles from "./CommentList.module.css";

const CommentList = ({ comments, onReply, onEdit, onDelete }) => {
  return (
    <div className={styles.commentsList}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      replies: PropTypes.array,
    })
  ).isRequired,
  onReply: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentList;
