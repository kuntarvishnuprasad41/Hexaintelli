import React from 'react'
import styles from './page.module.css';

export const Machinehero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.box}>
        <div className={styles.service}>
            <div className={styles.orange}>SERVICES</div>
        </div>
        <div className={styles.title}>Machine Learning</div>
        <div className={styles.description}>
          In the age of data-driven decision making, harnessing the power of machine learning is crucial. Our custom machine learning solutions are tailored to your specific business challenges and goals. Whether you need predictive analytics, recommendation systems, or complex data pattern recognition, we deliver accurate and scalable ML models. Our team works closely with you to ensure your machine learning implementation drives innovation and growth for your business.
        </div>
        </div>
    </div>
  )
}
