import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { menuItems } from "../../data";
import { IoIosMenu } from "react-icons/io";
import TalkButton from "../UI/TalkBtn/TalkBtn";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);      // dropdown/menu container
    const menuBtnRef = useRef(null);   // menu icon/button

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return; // only listen while menu is open

        const handleOutsideClick = (e) => {
            // if click is inside the menu OR on the menu button, do nothing
            if (
                (menuRef.current && menuRef.current.contains(e.target)) ||
                (menuBtnRef.current && menuBtnRef.current.contains(e.target))
            ) {
                return;
            }
            // otherwise close
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <nav className={styles.navbar}>
            {/* Menu icon for tablet & mobile */}
            <div
                className={styles.menuIcon}
                onClick={toggleMenu}
                ref={menuBtnRef}            // <-- attach ref so outside-check can ignore it
                aria-expanded={isOpen}
                aria-label="Toggle menu"
            >
                <IoIosMenu size={40} />
            </div>

            {/* Logo (left on desktop, center on mobile) */}
            <div className={styles.logo}>boco</div>

            {/* Menu links */}
            <div
                ref={menuRef}
                className={
                    isOpen ? `${styles.mobileMenu} ${styles.show}` : styles.centerMenu
                }
            >
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                        onClick={closeMenu}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>

            {/* Talk button */}
            <TalkButton/>
        </nav>
    );
}

export default Navbar;
