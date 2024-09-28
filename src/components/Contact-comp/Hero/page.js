import React from 'react'
import styles from './page.module.css';
export const ContactHero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.box}>
        <div className={styles.service}>
            <div className={styles.orange}>CONTACT</div>
        </div>
        <div className={styles.title}>Let's Build Something Amazing</div>
        <div className={styles.description}>We're all about bringing ambitious ideas to life. Whether you have a clear vision or just a concept,
        we are ready to work with you and make your project a reality. Get in touch, and let’s begin shaping your ideas into something amazing!</div>
        </div>
    </div>
  )
}
