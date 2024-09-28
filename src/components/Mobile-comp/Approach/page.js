import React from 'react'
import styles from './page.module.css';

export const MobApproach = () => {
  return (
    <div className={styles.Container}>
        <h1 className={styles.heading}>Our Approach</h1>
        <div className={styles.approach}>
            <div className={styles.approach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/ap1.svg" alt="Easy to build upon"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Easy to build upon
                </div>
                <div className={styles.desc}>
                    With a solid infrastructure in place, it's easy to add new features and functionalities as your mobile app evolves.
                </div>
            </div>
            <div className={styles.approach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/ap2.svg" alt="Utilizing your know-how"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Utilizing your know-how
                </div>
                <div className={styles.desc}>
                    Your custom mobile app solution will be designed to incorporate your unique know-how and processes.
                </div>
            </div>
            <div className={styles.approach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/ap3.svg" alt="Built by CS Students"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Built by CS Students
                </div>
                <div className={styles.desc}>
                    Benefit from working with an agency, including a dedicated project manager to ensure smooth project delivery.
                </div>
            </div>
        </div>
    </div>
  );
}
