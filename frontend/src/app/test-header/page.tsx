'use client';

import { useState } from 'react';
import { Header } from "@/components/layouts/header/Header";
import styles from './testHeader.module.scss';

export default function TestHeaderPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      
      <div className={styles.container}>
        <h1>Header Test Page</h1>
        <p>This page demonstrates the responsive header with hamburger menu.</p>
        
        <div className={styles.buttonContainer}>
          <button 
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className={styles.toggleButton}
          >
            Toggle Authentication ({isAuthenticated ? 'Logged In' : 'Logged Out'})
          </button>
        </div>
        
        <div className={styles.instructions}>
          <h3>Instructions:</h3>
          <ul>
            <li>When authenticated: You'll see navigation items on desktop and a hamburger menu on tablet/mobile</li>
            <li>When not authenticated: You'll see "Login/Signup" link</li>
            <li>Resize your browser window to see the responsive behavior</li>
            <li>Click the hamburger menu on mobile/tablet to see the slide-in menu</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 