import React from "react";

import { Button } from "../../button";
import DeleteModal from "../../modal";

import { useComment } from "../useComment";
import styles from "./styles.module.scss";

const Header = () => {
  const {
    onReply,
    onEdit,
    currentUser,
    openModal,
    comment: {
      createdAt,
      user: { image, username },
    },
    setModal,
  } = useComment();

  const ownedByCurrentUser = currentUser.username === username;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={image.png} alt={username} />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {ownedByCurrentUser && <span className={styles.youIndicator}>you</span>}
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.actionButtons}>
        {ownedByCurrentUser ? (
          <>
            <Button variant="warning" onClick={() => setModal(true)}>
              <img src="./images/icon-delete.svg" />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src="./images/icon-edit.svg" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" aria-hidden="true" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export { Header };
