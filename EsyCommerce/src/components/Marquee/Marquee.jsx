import React, { useEffect, useState } from "react";
import styles from "./Marquee.module.css";

function Marquee() {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        fetch("https://boco-strapi-cms.onrender.com/api/marquees")
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    // Map all headings
                    setHeadings(data.data.map(item => item.headingText));
                } else {
                    setHeadings(["No data available"]);
                }
            })
            .catch(err => console.error("Error fetching marquee:", err));
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
