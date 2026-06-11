"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const whatsappLink = "https://wa.me/918976655369?text=Hello%20Lake%20Gardenia%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay.";

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          LAKE GARDENIA
        </motion.h1>
        <motion.p 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Pali, Maharashtra
        </motion.p>
        <motion.div 
          className={styles.logoWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Image 
            src="/images/logo-latest.png" 
            alt="Lake Gardenia Logo" 
            width={600} 
            height={300} 
            priority
            style={{ width: "100%", height: "auto", maxWidth: "500px", margin: "0 auto 3rem auto" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <a href={whatsappLink} className="button-primary">
            Reserve Your Escape
          </a>
        </motion.div>
      </div>
    </section>
  );
}
