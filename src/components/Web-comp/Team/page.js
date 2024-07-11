import React from 'react'
import styles from './page.module.css';
// import { motion } from "framer-motion";
export const Team = () => {
  return (
    <div className={styles.box}>
        <div className={styles.contaner}>
            <h1 className={styles.h1}>Our Team</h1>
            <div className={styles.team_members}>
                <div className={styles.team}>
                <div className={styles.team_member}>Ilan Usman</div>
                <div className={styles.description}>
                    <p className={styles.p1}>React Developer</p>
                    <p className={styles.p12}></p>
                </div>
                </div>
                <div className={styles.team}>
                <div className={styles.team_member}>AdhiKrishna</div>
                    <p className={styles.p1}>React Developer</p>
                </div>
                <div className={styles.team}>
                <div className={styles.team_member}>Hadee Niyaf</div>
                    <p className={styles.p1}>Webflow develpoer</p>
                </div>
                <div className={styles.team}>
                <div className={styles.team_member}>Aswin D</div>
                    <p className={styles.p1}>Webflow develpoer</p>
                </div>
            </div>
        </div>
        </div>
  )
}
