import React from "react";
import styles from "./NotFound.module.css";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.text}>
          Oops! The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button className={styles.homeBtn} onClick={() => navigate("/")}>
          <span>Go Back Home</span>
          <div className={styles.iconCircle}>
            <MdArrowOutward className={styles.icon} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
