import React from "react";
import styles from "./TalkBtn.module.css";
import { MdArrowOutward } from "react-icons/md";

const TalkButton = ({ text = "Talk to Us", onClick, variant = "navbar" }) => {
  const buttonClass =
    variant === "hero"
      ? `${styles.talkBtn} ${styles.heroVariant}`
      : styles.talkBtn;

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <div className={styles.iconCircle}>
        <MdArrowOutward className={styles.icon} />
      </div>
    </button>
  );
};

export default TalkButton;
