import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import styles from "./Carousel.module.css";

const Carousel = ({ title, description, images }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (carousel.scrollLeft <= 0) {
        // Instantly jump to the end (no backward animation)
        carousel.style.scrollBehavior = "auto";
        carousel.scrollLeft = carousel.scrollWidth;
        requestAnimationFrame(() => {
          carousel.style.scrollBehavior = "smooth";
        });
        return;
      }
    }

    carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const isMobile = window.innerWidth <= 768;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth - 5;

    if (isMobile) {
      if (carousel.scrollLeft >= maxScroll) {
        // Instantly jump to start (no visible backward scroll)
        carousel.style.scrollBehavior = "auto";
        carousel.scrollLeft = 0;
        requestAnimationFrame(() => {
          carousel.style.scrollBehavior = "smooth";
        });
        return;
      }
    }

    carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.carouselWrapper}>
        <button className={styles.BackarrowBtn} onClick={scrollLeft}>
          <IoMdArrowBack />
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {images.map((src, index) => (
            <div key={index} className={styles.card}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        <button className={styles.ForwardarrowBtn} onClick={scrollRight}>
          <IoMdArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
