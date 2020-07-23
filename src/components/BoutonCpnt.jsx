import React from "react";

import styles from "./BoutonCpnt.module.css";

const ButtonCpnt = ({ children, type, funcToClick }) => {
  return (
    <button className={styles.buttonCpnt} type={type} onClick={funcToClick}>
      {children}
    </button>
  );
};

export default ButtonCpnt;
