"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/918976655369?text=Hello%20Lake%20Gardenia%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay.";
  const emailLink = "mailto:lakegardenia7@gmail.com";

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Lake Gardenia
        </Link>
        <div className={styles.navLinks}>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
        </div>
        <div className={styles.actions}>
          <a href={emailLink} className={styles.iconButton} aria-label="Email Us">
            <Mail size={20} />
          </a>
          <a href={whatsappLink} className={styles.ctaButton}>
            <Phone size={18} />
            <span>Inquire Now</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
