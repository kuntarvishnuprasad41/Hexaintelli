"use client"
// components/Hero.js
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ videoSrc }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;

    gsap.fromTo(element, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Adjust this as needed
          end: "bottom 60%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div className={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.video}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.contentbox}>
        <div className={styles.content} ref={contentRef}>
          <h1 className={styles.title}>Innovative Tech Solutions for Your Success</h1>
          <p className={styles.subtitle}>Transform your ideas into reality with our expert-driven, creative tech solutions Build by CS Students.</p>
          <button className={styles.button}>
            Our Services
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
