import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";
import styles from "./Form.module.css";
function Form({ title, handleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.form}>
      <input
        className={styles.input}
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="email"
      />
      <input
        className={styles.input}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="password"
      />
      <MyButton
        onClick={() => {
          handleForm(email, password);
        }}
      >
        {title}
      </MyButton>
    </div>
  );
}

export default Form;
