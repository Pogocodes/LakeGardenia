"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";

const galleryItems = [
  
  { type: "image", src: "/images/WhatsApp Image 2026-06-10 at 2.32.05 PM.jpeg", alt: "Lakeside sunrise", aspect: "landscape" },
  { type: "image", src: "/images/20230402173321_IMG_7607.JPG", alt: "Lake at dawn", aspect: "landscape" },
  { type: "image", src: "/images/20230402174323_IMG_7634-01.jpeg", alt: "Pavilion and dining", aspect: "tall" },
  { type: "image", src: "/images/20230402175229_IMG_7650-01.jpeg", alt: "Poolside", aspect: "landscape" },
  { type: "image", src: "/images/20230402182813_IMG_7691-01.jpeg", alt: "Rain dance feature", aspect: "landscape" },
  { type: "image", src: "/images/20230402171030_IMG_7576-01.jpeg", alt: "Entrance path", aspect: "tall" },
  { type: "image", src: "/images/20230402182725_IMG_7690-01.jpeg", alt: "Garden walkways", aspect: "tall" },
  { type: "image", src: "/images/WhatsApp Image 2026-06-10 at 2.31.48 PM.jpeg", alt: "Room interior", aspect: "landscape" },
  { type: "image", src: "/images/WhatsApp Image 2026-06-10 at 2.32.18 PM.jpeg", alt: "Garden pavilion", aspect: "tall" },
  { type: "image", src: "/images/WhatsApp Image 2026-06-10 at 2.32.30 PM.jpeg", alt: "Terrace dining", aspect: "landscape" },
  { type: "image", src: "/images/hero-bedroom.jpeg", alt: "Bedroom interior 2", aspect: "landscape" },
  { type: "image", src: "/images/garden-gazebo.jpeg", alt: "Gazebo and gardens", aspect: "tall" },
  { type: "image", src: "/images/golden-landscape.jpeg", alt: "Golden fields", aspect: "landscape" },
  { type: "image", src: "/images/hero-walkway.jpeg", alt: "Walkway 2", aspect: "tall" },
  { type: "image", src: "/images/mountain-view.jpeg", alt: "Scenic view", aspect: "landscape" },
  { type: "image", src: "/images/swimming-pool.jpeg", alt: "Pool 2", aspect: "landscape" },
  { type: "image", src: "/images/twilight-ambiance.jpeg", alt: "Evening ambiance", aspect: "landscape" },
  { type: "image", src: "/images/property-overview.jpeg", alt: "Aerial view", aspect: "landscape" },
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imagesOnly = galleryItems.filter((g) => g.type === "image").map((g) => ({ src: g.src, alt: g.alt }));

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
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: "easeOut" }}
                  onClick={() => {
                    if (item.type === "image") {
                      setLightboxIndex(imagesOnly.findIndex((i) => i.src === item.src));
                      setLightboxOpen(true);
                    }
                  }}
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {lightboxOpen && (
              <GalleryLightbox
                images={imagesOnly}
                startIndex={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
