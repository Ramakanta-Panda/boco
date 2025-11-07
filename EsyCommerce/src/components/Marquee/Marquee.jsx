import React, { useEffect, useState } from "react";
import styles from "./Marquee.module.css";

const API_URL = import.meta.env.VITE_API_URL;

function Marquee() {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/marquees`)
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    // Map all headingText values
                    setHeadings(data.data.map(item => item.headingText));
                } else {
                    setHeadings(["No data available"]);
                }
            })
            .catch(err => console.error("fetching marquee:", err));
    }, []);

    return (
        <section className={styles.marqueeSection}>
            {headings.length > 0 ? (
                headings.map((text, idx) => (
                    <h2 key={idx} className={styles.desktopHeading}>{text}</h2>
                ))
            ) : (
                <h2 className={styles.desktopHeading}>Loading...</h2>
            )}
        </section>
    );
}

export default Marquee;
