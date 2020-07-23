import React from "react";

import styles from './InputCpnt.module.css';

const InputCpnt = ({
  labelInput,
  nameInput,
  type,
  placeHolder,
  funcForInput,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={nameInput}>{labelInput}</label>
      <input
        className={styles.inputArea}
        name={nameInput}
        id={nameInput}
        type={type}
        placeholder={placeHolder}
        onChange={funcForInput}
        required
      />
    </div>
  );
};

export default InputCpnt;
