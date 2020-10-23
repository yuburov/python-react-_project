import React from "react";
import styles from './FormControls.module.css'


export const Input = ({input, meta, ...restProps}) => {
  const hasError = meta.touched && meta.error;
  return (
      <div className={styles.formControl + ' ' +(hasError ? styles.error : '')}>
        <div>
          <input className='form-control' {...input} {...restProps}/>
        </div>
        <div>
          {hasError && <span>{meta.error}</span>}
        </div>
      </div>
  )
}
