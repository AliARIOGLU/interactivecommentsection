import React from "react";

import { Reactions } from "./reactions";
import { Header } from "./header";
import { Content } from "./content";
import { NewCommentEditor } from "../new-comment-editor";

import styles from "./styles.module.scss";
import { CommentContextProvider, useComment } from "./useComment";
import DeleteModal from "../modal";

const Comment = () => {
  const { isReplying, currentUser, comment, onNewReply, modal } = useComment();

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Content />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <CommentContextProvider
              data={{ comment: reply, currentUser }}
              key={reply.id}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && (
        <NewCommentEditor
          onClick={onNewReply}
          isReply
          image={currentUser.image.png}
          alt={currentUser.username}
        />
      )}
      {modal && <DeleteModal />}
    </>
  );
};

export { Comment };
