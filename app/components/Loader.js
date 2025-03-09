import styles from "./Loader.module.css";
import React from "react";

const Loader = ({ className, isFullPage = true }) => {
  if (isFullPage)
    return (
      <div className={styles.overlay}>
        <div className={`${styles.loader} ${className}`}></div>
      </div>
    );

  return <div className={`${styles.loader} ${className}`}></div>;
};

export default Loader;
