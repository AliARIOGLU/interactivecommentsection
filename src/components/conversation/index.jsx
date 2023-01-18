import React, { useState } from "react";
import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";
import { CommentContextProvider } from "../comment/useComment";

import Data from "../../../data.json";
import styles from "./styles.module.scss";

const Conversation = () => {
  const [comments, setComments] = useState(Data.comments);

  const { currentUser } = Data;

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        score: 0,
        user: currentUser,
      },
    ]);
  };

  return (
    <div className={styles.conversationWrapper}>
      {comments.map((comment) => (
        <CommentContextProvider
          data={{ comment, currentUser }}
          key={comment.id}
        >
          <Comment />
        </CommentContextProvider>
      ))}
      <NewCommentEditor
        onClick={handleNewComment}
        image={currentUser.image.png}
        alt={currentUser.username}
      />
    </div>
  );
};

export { Conversation };
