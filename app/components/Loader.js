import styles from "./Loader.module.css";

import React from "react";

const Loader = ({ className, isFullPage = true }) => {
  if (isFullPage)
    return (
      <div className="w-[80vw] mx-auto h-screen grid place-items-center">
        <div class={`${styles.loader} ${className}`}></div>
      </div>
    );
  return <div class={`${styles.loader} ${className}`}></div>;
};

export default Loader;