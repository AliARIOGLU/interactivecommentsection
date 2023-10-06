import React from "react";
import { useComment } from "../comment/useComment";

import styles from "./styles.module.scss";

const DeleteModal = () => {
  const { onDelete, openModal, closeModal, modal } = useComment();

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={closeModal}>
            NO, CANCEL
          </button>
          <button className={styles.delete} onClick={onDelete}>
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
