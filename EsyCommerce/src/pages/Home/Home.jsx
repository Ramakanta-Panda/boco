import React from 'react'
import styles from "./Home.module.css";
import heroImg from "../../assets/Hero.png";
import heroMob from "../../assets/HeroMob.png"
import AuditButton from '../../components/UI/AuditBtn/AuditBtn';
import TalkButton from '../../components/UI/TalkBtn/TalkBtn';
import { FaStar } from "react-icons/fa";
import { brands, carouselImages } from "../../data";
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card ';
import FashionHealth from '../../components/FashionHealth/FashionHealth';
import Marquee from '../../components/Marquee/Marquee';
import BrandSection from '../../components/Brandapi/BrandSection';

const Home = () => {

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>
                        We build high-converting
                        Shopify stores that drive Profit
                    </h1>

                    <p>
                        We’re a leading Shopify & Shopify Plus agency who design and develop
                        strategic ecommerce websites
                    </p>

                    <ul className={styles.features}>
                        <li>Unmatched Speed & Stability</li>
                        <li>Build for Conversions</li>
                        <li>Reduced App Stack & Developer Dependencies</li>
                    </ul>

                    <div className={`${styles.buttons} ${styles.reverseOrder}`}>
                        <AuditButton />
                        <TalkButton variant="hero" />
                    </div>


                </div>

                {/* Right side */}
                <div className={styles.heroRight}>
                    <img
                        src={heroImg}
                        alt="Shopify Preview"
                        className={styles.heroImage}
                    />
                    <img
                        src={heroMob}
                        alt="Shopify Preview"
                        className={styles.heroMobImage}
                    />

                </div>
            </section>

            {/* Brand Section */}
           
            <BrandSection />

            {/* ✅ Carousel Section */}
            <Carousel
                title="Stunningly Crafted Shopify Solutions Driven by Insights"
                description="As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands to thrive through strategic design and robust Shopify development. We bring a fresh strategic approach to your brand, focussing on delivering pixel perfect websites, built for Conversions & Growth."
                images={carouselImages}
            />

            {/* Service Card section */}
            <section className={styles.section}>
                <h2 className={styles.heading}>
                    Enhance customer experience <br />
                    by focusing on the details that matters most
                </h2>

                <Card />
            </section>

            {/* Success Stories & Results */}
            <section className={styles.caseStudies}>
                <h2 className={styles.caseStudiesHeading}>Read our recent Case Studies</h2>
                <FashionHealth />
                <button className={styles.caseStudiesBtn}>View Case Studies</button>
            </section>

            {/* Let’s Get Started */}
            <section className={styles.getStartSec}>
                <h2>Let’s Get Started</h2>
                <div className={styles.btnSec}>
                    <TalkButton text='Book a Call' variant="hero" />
                    <AuditButton />
                </div>
            </section>

            <Marquee />

        </>
    )
}

export default Home