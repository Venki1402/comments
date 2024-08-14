import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import useLocalStorage from "../../hooks/useLocalStorage";
import styles from "./CommentsSection.module.css";

const CommentsSection = () => {
  const [comments, setComments] = useLocalStorage("comments", []);

  const addComment = (newComment) => {
    const comment = {
      id: Date.now(),
      ...newComment,
      date: new Date().toISOString(),
      replies: [],
    };
    setComments((prev) => [...prev, comment]);
  };

  const addReply = (commentId, reply) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                ...reply,
                id: Date.now(),
                date: new Date().toISOString(),
                parentId: commentId,
              },
            ],
          };
        }
        return comment;
      })
    );
  };

  const editComment = (id, newText, parentId = null) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (parentId === null) {
          if (comment.id === id) {
            return { ...comment, text: newText };
          }
        } else if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === id ? { ...reply, text: newText } : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  const deleteComment = (id, parentId = null) => {
    if (parentId) {
      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.filter((reply) => reply.id !== id),
            };
          }
          return comment;
        })
      );
    } else {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  const sortComments = () => {
    setComments((prev) =>
      [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  return (
    <div className={styles.commentsSection}>
      <h2>Comments</h2>
      <CommentForm onSubmit={addComment} />
      <button onClick={sortComments} className={styles.sortButton}>
        Sort by Date
      </button>
      <CommentList
        comments={comments}
        onReply={addReply}
        onEdit={editComment}
        onDelete={deleteComment}
      />
    </div>
  );
};

export default CommentsSection;
