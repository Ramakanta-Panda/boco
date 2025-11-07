import React from "react";
import styles from "./AuditBtn.module.css";
import { MdArrowOutward } from "react-icons/md";

const AuditButton = ({ text = "Audit My Website", onClick }) => {
    return (
        <button className={styles.auditBtn} onClick={onClick}>
            <span>{text}</span>
            <span className={styles.iconCircle}><MdArrowOutward className={styles.icon} /></span>
            
        </button>
    );
};

export default AuditButton;
