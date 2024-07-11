// components/ToggleMenu.js
import { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import styles from './page.module.css';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <a href="/Web">Web Development</a>
          <a href="/Cyber">Cyber Security</a>
          <a href="/Machine">Machine Learning</a>
          <a href="/Cloud">Cloud Computing</a>
          <a href="/Data">Data Science</a>
          <a href="/ERP">ERP</a>
        </nav>
      )}
    </div>
  );
};

export default ToggleMenu;
