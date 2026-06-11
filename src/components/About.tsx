"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={styles.heading}>Nature’s <br/> Masterpiece</h2>
            <p className={styles.paragraph}>
              Nestled in the serene hills of Pali, Maharashtra, Lake Gardenia is more than a destination; it is a return to nature. Surrounded by lush greenery, tranquil lakes, and the symphony of the forest, our retreat offers a rare space to disconnect from the noise and reconnect with yourself.
            </p>
            <p className={styles.paragraph}>
              Every element of our boutique sanctuary has been handcrafted to blend seamlessly with the environment, providing an immersive luxury experience without compromising the raw beauty of the landscape.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image 
              src="/images/garden-gazebo.jpeg" 
              alt="Lake Gardenia Property Overview" 
              fill 
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
