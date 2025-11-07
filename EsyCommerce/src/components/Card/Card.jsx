import React, { useRef, useState, useEffect } from 'react'
import { servicesCard } from "../../data";
import { IoCheckmark} from "react-icons/io5";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import styles from "./Card.module.css";

function Card() {
    const containerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateNavigationState = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollLeft = () => {
        if (containerRef.current && canScrollLeft) {
            const card = containerRef.current.querySelector(`.${styles.card}`);
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = 16;
                containerRef.current.scrollBy({
                    left: -(cardWidth + gap),
                    behavior: 'smooth'
                });
            }
        }
    };

    const scrollRight = () => {
        if (containerRef.current && canScrollRight) {
            const card = containerRef.current.querySelector(`.${styles.card}`);
            if (card) {
                const cardWidth = card.offsetWidth;
                const gap = 16;
                containerRef.current.scrollBy({
                    left: cardWidth + gap,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Update navigation state on scroll and resize
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateNavigationState);
            window.addEventListener('resize', updateNavigationState);
            updateNavigationState(); // Initial check
            
            return () => {
                container.removeEventListener('scroll', updateNavigationState);
                window.removeEventListener('resize', updateNavigationState);
            };
        }
    }, []);

    return (
        <div className={styles.cardsSection}>
            <div 
                className={styles.cardsWrapper}
                ref={containerRef}
            >
                <div className={styles.cardsContainer}>
                    {servicesCard.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <img src={service.icon} alt={service.title} className={styles.icon} />
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <ul className={styles.list}>
                                {service.items.map((item, i) => (
                                    <li key={i}>
                                        <IoCheckmark className={styles.checkIcon} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows - Below Cards (Mobile Only) */}
            <div className={styles.navigationControls}>
                <button 
                    className={styles.navArrow}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    aria-label="Previous cards"
                >
                    <IoMdArrowBack />
                </button>
                
                <button 
                    className={styles.navArrow}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    aria-label="Next cards"
                >
                    <IoMdArrowForward />
                </button>
            </div>
        </div>
    )
}

export default Card;