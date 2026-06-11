"use client";

import { motion } from "framer-motion";
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
  return (
    <section className={styles.experienceSection} id="experience">
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
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
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
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardDescription}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
