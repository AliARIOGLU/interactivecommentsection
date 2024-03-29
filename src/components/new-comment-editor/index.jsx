import React, { useState } from "react";
import { Button } from "../button";
import { TextArea } from "../textarea";

import styles from "./styles.module.scss";

const NewCommentEditor = ({
  isReply = false,
  image,
  alt,
  onClick,
  replyingTo,
}) => {
  const [comment, newComment] = useState("");

  const handleCommentChange = ({ target }) => {
    newComment(target.value);
  };

  const handleClick = () => {
    onClick(comment);
    newComment("");
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea
        value={comment}
        onChange={handleCommentChange}
        placeholder={isReply ? `Reply to ${replyingTo}` : "Add a comment..."}
      />
      <Button
        variant="primary"
        onClick={handleClick}
        disabled={comment ? false : true}
      >
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
};

export { NewCommentEditor };
