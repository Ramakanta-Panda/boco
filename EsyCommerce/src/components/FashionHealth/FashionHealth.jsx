import React from 'react';
import { caseStudies } from '../../data';
import styles from './FashionHealth.module.css';

const CaseStudies = () => {
    return (
        <section className={styles.caseStudiesSection}>
            <div className={styles.caseStudiesContainer}>
                {caseStudies.map((study) => (
                    <div key={study.id} className={styles.caseStudyCard}>
                        <img
                            src={study.image}
                            alt={`Case study ${study.id}`}
                            className={styles.cardImage}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;