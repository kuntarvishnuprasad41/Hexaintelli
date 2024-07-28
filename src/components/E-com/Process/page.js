import React from 'react';
import styles from './page.module.css';

export const Processcom = () => {
  return (
    <section className={styles.section}>
      <div className={styles.Container}>
        <div className={styles.Container_box}>
          <h1 className={styles.heading}>How Do We Craft Your Custom E-commerce Solutions?</h1>
          <div className={styles.approach}>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v1.svg" alt="Getting to Know You Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Getting to Know You
              </div>
              <div className={styles.desc}>
                We dive deep into your e-commerce needs and develop a tailored strategy.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v2.svg" alt="Building Your Toolbox Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Building Your Toolbox
              </div>
              <div className={styles.desc}>
                We craft custom solutions using Next.js, Firebase, and advanced technologies.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/v3.svg" alt="Putting It All Together Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Putting It All Together
              </div>
              <div className={styles.desc}>
                We integrate all components and ensure seamless, secure functionality.
              </div>
            </div>
            <div className={styles.aproach_box}>
              <div className={styles.icon_box}>
                <div className={styles.wrapper}>
                  <img className={styles.icon} src="/ap4.svg" alt="Staying with You Long-Term Icon" />
                </div>
              </div>
              <div className={styles.head4}>
                Staying with You Long-Term
              </div>
              <div className={styles.desc}>
                We provide ongoing support, updates, and evolve your platform with your business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}