import React from "react";
import styles from "./myButton.module.css";
function MyButton({ children, ...props }) {
    return <button {...props}>{children}</button>;
}

export default MyButton;
