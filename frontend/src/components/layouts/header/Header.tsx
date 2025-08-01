'use client'
import Link from "next/link"
import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import styles from "./header.module.scss"
import { MobileMenu } from "./MobileMenu"

type HeaderProps = {
    isAuthenticated: boolean
}

export const Header = ({ isAuthenticated }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>Kuber<span className={styles.header__logo__span}>X</span></div>
                <nav>
                    {
                        isAuthenticated ? (
                            <div className={styles.nav__items}>
                                <Link href="/">Home</Link>
                                <Link href="/">Feeds</Link>
                                <Link href="/">People</Link>
                            </div>
                        ) : (   
                            <div>
                                <Link href="/">Login/Signup</Link>
                            </div>
                        )
                    }
                </nav>
                {isAuthenticated && (
                    <button 
                        className={styles.header__hamburger}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <HiMenu />
                    </button>
                )}
            </header>
            {isAuthenticated && (
                <MobileMenu 
                    isOpen={isMobileMenuOpen} 
                    onClose={closeMobileMenu} 
                />
            )}
        </>
    )
}