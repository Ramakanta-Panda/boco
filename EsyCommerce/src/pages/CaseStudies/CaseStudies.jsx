import React from 'react'
import styles from "./CaseStudies.module.css"
import Marquee from '../../components/Marquee/Marquee'
import { caseStudies } from '../../data';

function CaseStudies() {
  return (
    <>
      <section className={styles.caseStudies}>
        <h5>Case Studies</h5>
        <h2>Success Stories & Results</h2>
        <p>We've worked with nearly 100 brands in different modes and
          capacities over the years. Here's a few of our favorite success stories.</p>
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className={styles.caseStudyCard}>
              <img src={caseStudy.image} alt={caseStudy.title} />
            </div>
          ))}
        </div>
      </section>
      <Marquee />
    </>
  )
}

export default CaseStudies