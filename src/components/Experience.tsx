"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Experience.module.css";
import Image from "next/image";

const experiences = [
  {
    title: "Golden Hour Glow",
    description: "Witness the hills turn into a canvas of gold from our scenic viewpoints. A daily spectacle you won't want to miss.",
    image: "/images/golden-landscape.jpeg",
  },
  {
    title: "Refreshing Swimming Pool",
    description: "Dive into our pristine swimming pool, the perfect place to cool off and relax while surrounded by nature.",
    image: "/images/swimming-pool.jpeg",
  },
  {
    title: "Panoramic Vistas",
    description: "Wake up to breathtaking panoramic mountain views that stretch as far as the eye can see.",
    image: "/images/mountain-view.jpeg",
  },
  {
    title: "Tranquil Walkways",
    description: "Stroll down pathways lined with lush trees and the quiet chorus of nature, guiding you toward ultimate relaxation.",
    image: "/images/hero-walkway.jpeg",
  }
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isAnyHover = hoveredIndex !== null;

  return (
    <section className={`${styles.experienceSection} ${isAnyHover ? styles.hasHover : ""}`} id="experience">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>Immersive Stay</p>
          <h2 className={styles.heading}>The Gardenia Experience</h2>
        </motion.div>
        
        <div className={styles.grid}>
          {experiences.map((exp, index) => {
            const isActive = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isActive;

            return (
              <motion.div 
                key={index}
                className={`${styles.card} ${isActive ? styles.activeCard : ""} ${isDimmed ? styles.dimmedCard : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                animate={isActive ? { scale: 1.1, y: -18, opacity: 1 } : isDimmed ? { scale: 0.97, opacity: 0.84 } : { scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <motion.h3
                    className={styles.cardTitle}
                    animate={isActive ? { y: -8 } : { y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className={styles.cardDescription}>{exp.description}</p>
                  <motion.div
                    className={styles.cardFooter}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <span className={styles.viewLink}>View Experience →</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
