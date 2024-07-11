'use client'
import React from 'react';
import styles from './page.module.css';
import { LampContainer, LampDemo } from '../Lamp/page';
import { motion } from 'framer-motion';
export const Project = () => {
  return (
  <div className={styles.projectlamp}>
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
        <div className={styles.Container}>
      <h1 className={styles.heading}>Sample Works</h1>
      <div className={styles.approach}>
        <div className={styles.Project_box}>
          <div className={styles.image_box}>
            <div className={styles.wrapper}>
              <img className={styles.image} src="/mock1.jpeg" alt="Whetrip Project" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.details_box}>
              <div className={styles.title_link}>
                <div className={styles.title}>
                  Whetrip
                </div>
              </div>
              <div className={styles.category}>
                <div className={styles.role}>
                  Reactjs
                </div>
                <div className={styles.role}>
                  VR
                </div>
              </div>
              <div className={styles.desc}>
                VR hotel booking Website
              </div>
            </div>
            <div className={styles.button}>
              Live Demo
            </div>
            
          </div>
        </div>
        <div className={styles.Project_box}>
          <div className={styles.image_box}>
            <div className={styles.wrapper}>
              <img className={styles.image} src="/mock2.jpeg" alt="Whetrip Project" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.details_box}>
              <div className={styles.title_link}>
                <div className={styles.title}>
                  Dionpower
                </div>
              </div>
              <div className={styles.category}>
                <div className={styles.role}>
                  Reactjs
                </div>
                <div className={styles.role}>
                  Three.js
                </div>
              </div>
              <div className={styles.desc}>
                Lithion Bttery Repair
              </div>
            </div>
            <div className={styles.button}>
              Live Demo
            </div>
            
          </div>
        </div>
      </div>
    </div>

   
    </motion.div>
    </LampContainer>
    </div>
  );
};
