import React from "react";
import styles from './SelectCpnt.module.css';

const SelectCpnt = ({ ArrToMap, nameSelect, labelSelect, funcForSelect }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={nameSelect}>{labelSelect}</label>
      <select
        className={styles.inputArea}
        name={nameSelect}
        id={nameSelect}
        onChange={funcForSelect}
        required
      >
        <option value=""></option>
        {ArrToMap.map((elt) => {
          return <option key={elt} value={elt}>{elt}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectCpnt;
