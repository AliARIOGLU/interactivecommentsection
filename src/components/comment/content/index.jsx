import React, { useState } from "react";
import { Button } from "../../button";
import { TextArea } from "../../textarea";

import { useComment } from "../useComment";

import styles from "./styles.module.scss";

const Content = () => {
  const {
    onUpdate,
    isEditing,
    comment: { content, replyingTo },
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <TextArea value={comment} onChange={handleCommentChange} />
          <Button
            onClick={handleUpdate}
            className={styles.updateButton}
            variant="primary"
          >
            Update
          </Button>
        </>
      ) : (
        <p className={styles.content}>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}
          {content}
        </p>
      )}
    </div>
  );
};

export { Content };
