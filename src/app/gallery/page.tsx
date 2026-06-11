"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryItems = [
  { type: "video", src: "/videos/resort-video.mp4", alt: "Resort Video", aspect: "landscape" },
  { type: "image", src: "/images/hero-bedroom.jpeg", alt: "Bedroom interior", aspect: "landscape" },
  { type: "image", src: "/images/garden-gazebo.jpeg", alt: "Lush gardens and gazebo", aspect: "tall" },
  { type: "image", src: "/images/golden-landscape.jpeg", alt: "Golden landscape", aspect: "landscape" },
  { type: "image", src: "/images/hero-walkway.jpeg", alt: "Walkway", aspect: "tall" },
  { type: "image", src: "/images/mountain-view.jpeg", alt: "Mountain view", aspect: "landscape" },
  { type: "image", src: "/images/swimming-pool.jpeg", alt: "Swimming pool", aspect: "landscape" },
  { type: "image", src: "/images/twilight-ambiance.jpeg", alt: "Twilight ambiance", aspect: "landscape" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className={styles.heading}>The Visual Gallery</h1>
              <p className={styles.subheading}>A glimpse into the sanctuary of stillness.</p>
            </motion.div>
            
            <div className={styles.grid}>
              {galleryItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`${styles.imageWrapper} ${styles[item.aspect]}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: "easeOut" }}
                >
                  {item.type === "video" ? (
                    <video 
                      src={item.src} 
                      className={styles.image} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className={styles.image}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
