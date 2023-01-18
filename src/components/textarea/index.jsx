import React from "react";

import styles from "./styles.module.scss";

const TextArea = ({ ...props }) => {
  return <textarea className={styles.textarea} rows={4} {...props} />;
};

export { TextArea };
