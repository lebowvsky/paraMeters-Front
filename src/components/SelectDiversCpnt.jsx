import React from "react";
import styles from './SelectCpnt.module.css';

const SelectDiversCpnt = ({ ArrToMap, nameSelect, labelSelect, funcForSelect }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={nameSelect}>{labelSelect}</label>
      <select
        className={styles.inputArea}
        name={nameSelect}
        id={nameSelect}
        onChange={funcForSelect}
      >
        <option value=""></option>
        {ArrToMap.map((elt) => {
          return <option key={elt.id_diver} value={elt.id_diver}>{`${elt.firstname} ${elt.lastname}`}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectDiversCpnt;