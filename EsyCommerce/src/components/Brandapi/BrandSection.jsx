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

                const res = await fetch(`${API_URL}/api/brands?populate=Media`);

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();

                // ✅ Fix: Add proper error handling for API response
                if (!data || !data.data) {
                    console.log("API Response:", data);
                    throw new Error("Invalid API response structure");
                }

                const formattedBrands = data.data.map((item) => ({
                    id: item.id,
                    name: item.attributes?.Text || item.Text,
                    image: item.attributes?.Media?.data?.attributes?.url
                        ? `${API_URL}${item.attributes.Media.data.attributes.url}`
                        : item.Media?.url
                            ? `${API_URL}${item.Media.url}`
                            : null,
                }));

                setBrands(formattedBrands);
            } catch (error) {
                console.error("Error fetching brands:", error);
                setError(`Failed to load brands: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, [API_URL]);

    if (loading) {
        return (
            <section className={styles.brandSection}>
                <div className={styles.loading}>Loading brands...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={styles.brandSection}>
                <div className={styles.error}>
                    {error}
                    <br />
                    <small>Check Strapi CORS settings and content permissions</small>
                </div>
            </section>
        );
    }

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
                                {brand.image && (
                                    <img
                                        src={brand.image}
                                        alt={brand.name || `Brand ${i}`}
                                        title={brand.name}
                                        loading="lazy"
                                    />
                                )}
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