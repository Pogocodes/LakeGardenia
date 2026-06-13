"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ReelsGallery.module.css";

const reels = [
  {
    src: "/videos/reel-1.mp4",
    caption: "Morning lakeside yoga and sunrise reflections.",
  },
  {
    src: "/videos/reel-2.mp4",
    caption: "Poolside moments with soft luxury.",
  },
  {
    src: "/videos/reel-3.mp4",
    caption: "Twilight dining beneath the stars.",
  },
  {
    src: "/videos/reel-4.mp4",
    caption: "Walking the garden paths toward quiet spaces.",
  },
  {
    src: "/videos/reel-5.mp4",
    caption: "Aerial views reveal the resort’s natural setting.",
  },
  {
    src: "/videos/reel-6.mp4",
    caption: "Rain dance and outdoor water moments.",
  },
];

export default function ReelsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleKeydown = (event: KeyboardEvent) => {
    if (!modalOpen) return;
    if (event.key === "ArrowRight") setModalIndex((current) => (current + 1) % reels.length);
    if (event.key === "ArrowLeft") setModalIndex((current) => (current - 1 + reels.length) % reels.length);
    if (event.key === "Escape") setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [modalOpen]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const previousReel = () => setModalIndex((current) => (current - 1 + reels.length) % reels.length);
  const nextReel = () => setModalIndex((current) => (current + 1) % reels.length);

  return (
    <section className={styles.reelsSection} id="reels">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>INSTAGRAM REELS</p>
          <h2 className={styles.heading}>Moments at Lake Gardenia</h2>
          <p className={styles.subheading}>Real experiences, captured in motion.</p>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.navButton} ${styles.left}`} onClick={() => carouselRef.current?.scrollBy({ left: -360, behavior: "smooth" })} aria-label="Scroll left">
            ‹
          </button>
          <div className={styles.carousel} ref={carouselRef}>
            {reels.map((reel, index) => {
              const isActive = activeIndex === index;
              const isDimmed = activeIndex !== null && activeIndex !== index;

              return (
                <motion.div
                  key={reel.src}
                  className={`${styles.reelCard} ${isActive ? styles.activeReel : ""} ${isDimmed ? styles.dimmedReel : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => openModal(index)}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.videoFrame}>
                    <video
                      src={reel.src}
                      muted
                      loop
                      playsInline
                      className={styles.video}
                    />
                    <div className={styles.overlay} />
                    <div className={styles.playButton}>
                      <span>▶</span>
                    </div>
                  </div>
                  <div className={styles.captionWrap}>
                    <p className={styles.caption}>{reel.caption}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button className={`${styles.navButton} ${styles.right}`} onClick={() => carouselRef.current?.scrollBy({ left: 360, behavior: "smooth" })} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalOpen(false)}>
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setModalOpen(false)} aria-label="Close dialog">✕</button>
              <video src={reels[modalIndex].src} controls autoPlay className={styles.modalVideo} />
              <div className={styles.modalControls}>
                <button onClick={previousReel} aria-label="Previous reel">‹</button>
                <button onClick={nextReel} aria-label="Next reel">›</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
