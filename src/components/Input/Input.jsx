import React from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange, paramName }) => {
  return (
    <input
      placeholder={`введите параметр ${paramName}`}
      type="number"
      value={value}
      onChange={onChange}
      className={styles.input}
      required={true}
    />
  );
};

export default Input;
