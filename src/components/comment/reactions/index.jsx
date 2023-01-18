import React from "react";

import { Button } from "../../button";
import styles from "./styles.module.scss";
import { useComment } from "../useComment";

const Reactions = () => {
  const {
    onPositiveAction,
    onNegativeAction,
    comment: { score },
  } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button
        onClick={onPositiveAction}
        aria-labelledby="Positive reaction button"
      >
        <img src="./images/icon-plus.svg" aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button
        onClick={onNegativeAction}
        aria-labelledby="Negative reaction button"
      >
        <img src="./images/icon-minus.svg" aria-hidden="true" />
      </Button>
    </div>
  );
};

export { Reactions };
