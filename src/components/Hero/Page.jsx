"use client"
// components/Hero.js
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { Button } from "@nextui-org/button";
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
      <video autoPlay loop muted className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.contentbox}>
        <div className={styles.content} ref={contentRef}>
          <h1 className={styles.title}>Custom Solutions for your Marketplace Business</h1>
          <p className={styles.subtitle}>We develop bespoke software and automations for e-commerce businesses, crafted with a blend of technical expertise and genuine care for your success</p>
          <Button className={styles.button}>
            Our Services
          </Button> 
        </div>
      </div>
    </div>
  );
};

export default Hero;