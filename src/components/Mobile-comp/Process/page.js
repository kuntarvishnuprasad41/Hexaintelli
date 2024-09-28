import React from 'react'
import styles from './page.module.css';
export const Process = () => {
  return (
    <section className={styles.section}>
    <div className={styles.Container}>
    <div className={styles.Container_box}>
        <h1 className={styles.heading}>How does the development process look like?</h1>
        <div className={styles.approach}>
        <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                    <img className={styles.icon} src="/ap1.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Consultations
                </div>
                <div className={styles.desc}>
                Together with your team, we identify your data needs and create a concept of the integration.
                </div>
        </div>
            <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                        <img className={styles.icon} src="/ap2.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Development
                </div>
                <div className={styles.desc}>
                Development of the solution and giving progress updates through a dedicated Project Manager.
                </div>
            </div>
            <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                    <img className={styles.icon} src="/ap3.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Implementation
                </div>
                <div className={styles.desc}>
                    Implementation of the solution and providing Greenwald Brands with ongoing support & training.
                </div>
            </div>
            <div className={styles.aproach_box}>
                <div className={styles.icon_box}>
                    <div className={styles.wrapper}>
                    <img className={styles.icon} src="/ap3.svg"/>
                    </div>
                </div>
                <div className={styles.head4}>
                    Maintenance
                </div>
                <div className={styles.desc}>
                    Supporting you and your team in tool's maintenance, fixes and adding new functionalities.
                </div>
            </div>
            </div>
            
            </div>  
        </div>
        </section>


  )
}