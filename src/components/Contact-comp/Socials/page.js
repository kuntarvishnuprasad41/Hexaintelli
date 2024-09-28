import React from 'react'
import styles from './page.module.css'
export const Socials = () => {
  return (
    <div className={styles.socialsdiv}>
    <div className={styles.socials}>
        <a className={styles.link}>
            LINKEDIN
        </a>
        <a className={styles.link}>
            INSTAGRAM
        </a>
        <a className={styles.link}>
            WHATSAPP
        </a>
    </div>
    </div>
  )
}
