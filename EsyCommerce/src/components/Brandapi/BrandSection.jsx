import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./BrandSection.module.css";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "https://boco-strapi-cms.onrender.com";

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_URL}/api/brands?populate=*`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        if (!data?.data) throw new Error("Invalid API response structure");

        // ✅ Correct mapping for your API
        const formattedBrands = data.data
          .map((item) => {
            const name = item.Text;
            const media = item.Media;
            if (!media?.url) return null;
            return {
              id: item.id,
              name,
              image: `${API_URL}${media.url}`,
            };
          })
          .filter(Boolean);

        setBrands(formattedBrands);
      } catch (err) {
        console.error("Error fetching brands:", err);
        setError(`Failed to load brands: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [API_URL]);

  if (loading) return <div className={styles.loading}>Loading brands...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

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
          {brands.length > 0 ? (
            [...brands, ...brands].map((brand, i) => (
              <div className={styles.slide} key={i}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  title={brand.name}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${brand.image}`);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))
          ) : (
            <div className={styles.noBrands}>No brands found</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
