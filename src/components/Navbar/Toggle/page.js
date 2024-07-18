// components/ToggleMenu.js
import { useState, useEffect, useRef } from 'react';
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
    if (isOpen) {
      gsap.to(menuRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
    } else {
      gsap.to(menuRef.current, { opacity: 0, duration: 0.3, display: 'none' });
    }
  }, [isOpen]);

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </button>
      <nav ref={menuRef} className={styles.menu}>
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
