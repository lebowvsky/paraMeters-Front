import React from 'react';

import styles from './BoutonCpnt.module.css';

const ButtonCpnt = ({children, funcToClick}) => {
  return (
  <button className={styles.buttonCpnt} type="submit">{children}</button>
  )
}

export default ButtonCpnt;