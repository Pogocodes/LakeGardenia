"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./GalleryLightbox.module.css";

type ImageItem = { src: string; alt?: string };

export default function GalleryLightbox({
  images,
  startIndex = 0,
  onClose,
}: {
  images: ImageItem[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => setIndex(startIndex), [startIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.viewer}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className={styles.close} onClick={onClose} aria-label="Close">
            ✕
          </button>

          <button className={styles.prev} onClick={prev} aria-label="Previous">
            ‹
          </button>

          <div className={styles.imageContainer}>
            <motion.div
              key={images[index].src}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className={styles.imageFrame}
            >
              <Image src={images[index].src} alt={images[index].alt || ""} fill className={styles.image} />
            </motion.div>
          </div>

          <button className={styles.next} onClick={next} aria-label="Next">
            ›
          </button>

          <div className={styles.counter}>{`${index + 1} / ${images.length}`}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
