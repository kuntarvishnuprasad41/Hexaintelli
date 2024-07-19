"use client";
import { useState, useRef, useEffect } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import styles from './page.module.css';
import { gsap } from 'gsap';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (isOpen) {
      gsap.to(menu, { opacity: 1, duration: 0.1, display: 'flex' });
      menu.classList.add(styles.open);
    } else {
      gsap.to(menu, { opacity: 0, duration: 0.1, display: 'none' }).then(() => {
        menu.classList.remove(styles.open);
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </button>
      <nav ref={menuRef} className={`${styles.menu}`}>
        <a href="/Web">Web Development</a>
        <a href="/Cyber">Cyber Security</a>
        <a href="/Machine">Machine Learning</a>
        <a href="/Cloud">Cloud Computing</a>
        <a href="/Data">Data Science</a>
        <a href="/ERP">ERP</a>
      </nav>
    </div>
  );
};

export default ToggleMenu;
