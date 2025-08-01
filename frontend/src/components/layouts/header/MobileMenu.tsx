import { useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import styles from './mobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.menu__header}>
          <h3>Menu</h3>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <nav className={styles.menu__nav}>
          <Link href="/" className={styles.menu__link} onClick={onClose}>
            Home
          </Link>
          <Link href="/" className={styles.menu__link} onClick={onClose}>
            Feeds
          </Link>
          <Link href="/" className={styles.menu__link} onClick={onClose}>
            People
          </Link>
        </nav>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}; 