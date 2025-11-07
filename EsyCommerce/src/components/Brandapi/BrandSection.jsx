import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./BrandSection.module.css"; // adjust to your CSS file

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/brands?populate=Media");
        const data = await res.json();

        const formattedBrands = data.data.map((item) => ({
          id: item.id,
          name: item.Text,
          image: item.Media?.url
            ? `http://localhost:1337${item.Media.url}`
            : null,
        }));

        setBrands(formattedBrands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <section className={styles.brandSection}>
      <div className={styles.brandHeaderWrapper}>
        <div className={styles.Leftline}></div>

        <div className={styles.brandHeader}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span>90+ Brands & Counting</span>
        </div>

        <div className={styles.Rightline}></div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[...brands, ...brands].map((brand, i) => (
            <div className={styles.slide} key={i}>
              {brand.image && (
                <img
                  src={brand.image}
                  alt={`Brand ${i}`}
                  title={brand.name}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
