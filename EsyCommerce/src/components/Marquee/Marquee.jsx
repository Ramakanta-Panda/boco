import React, { useEffect, useState } from "react";
import styles from "./Marquee.module.css";

const API_URL = import.meta.env.VITE_API_URL;

function Marquee() {
    const [marquee, setMarquee] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/api/marquees`)
            .then(res => res.json())
            .then(data => {
                // Access headingText directly
                setMarquee(data.data[0]?.headingText || "No data available");
            })
            .catch(err => console.error("fetching marquee:", err));
    }, []);

    return (
        <section className={styles.marqueeSection}>
            <h2 className={styles.desktopHeading}>
                {marquee ? marquee : "Loading..."}
            </h2>
        </section>
    );
}

export default Marquee;
