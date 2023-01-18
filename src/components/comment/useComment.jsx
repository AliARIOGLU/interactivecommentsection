import React, { useState, useMemo, createContext, useContext } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onEdit = () => {
    setEditing(!isEditing);
  };

  const onDelete = () => {
    if (window.confirm("Are you sure?")) setComment(null);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };

  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Date.now(),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    onReply();
  };

  const onPositiveAction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };
  const onNegativeAction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      comment,
      currentUser: data.currentUser,
      onReply,
      onDelete,
      onEdit,
      onUpdate,
      onNewReply,
      onPositiveAction,
      onNegativeAction,
      isReplying,
      isEditing,
    }),
    [isReplying, comment, isEditing]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
};

const useComment = () => {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no Comment Context Provider, first import it!");
  }

  return context;
};

export { useComment, CommentContextProvider };
