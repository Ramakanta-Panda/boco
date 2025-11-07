import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Left side */}
                <div className={styles.footerLeft}>
                    <h2 className={styles.logo}>boco</h2>
                    <p>
                        We are driven by quality and we’re 0 bullshit. If you think the same
                        way, we love a good chat.
                    </p>
                    <div className={styles.socialIcons}>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                           <AiFillInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Right side (navigation links) */}
                <div className={styles.footerRight}>
                    <h3>Products</h3>
                    <ul>
                        <li>
                            <Link to="/shopify-store-build">Shopify Store Build</Link>
                        </li>
                        <li>
                            <Link to="/custom-landing-pages">Custom Landing Pages</Link>
                        </li>
                        <li>
                            <Link to="/case-studies">Case Studies</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                © Copyright, <span>BOCO</span> {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;
