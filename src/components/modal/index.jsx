import React, { useEffect, useRef } from "react";
import { useComment } from "../comment/useComment";

import styles from "./styles.module.scss";

const DeleteModal = () => {
  const { onDelete, closeModal, modal } = useComment();
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target !== modalRef.current) {
        closeModal();
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modal) {
      window.addEventListener("click", handleOutsideClick);
      window.addEventListener("keydown", handleEscapePress);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalRef}>
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
