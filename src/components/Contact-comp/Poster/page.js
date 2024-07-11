import React from 'react'
import styles from './page.module.css'
export const Poster = () => {
  return (
    <div className={styles.poster}>
        <div className={styles.details}>
            <div className={styles.title}>
            Let’s dive into your
            amazing project
            </div>
            <div className={styles.desc}>
                Three easy questions and we're good to go
             </div>
             <button className={styles.button}>
            Our Services
            </button> 
        </div>
    </div>
  )
}
