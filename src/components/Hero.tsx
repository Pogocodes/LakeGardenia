"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

const slides = [
  {
    image: "/images/WhatsApp Image 2026-06-10 at 2.32.05 PM.jpeg",
    title: "Lake Gardenia",
    tagline: "Pali, Maharashtra",
    description:
      "A lakeside resort framed by sunrise, water views, and calm cottage living.",
    ctaLabel: "Book Your Stay",
  },
  {
    image: "/images/20230402173321_IMG_7607.JPG",
    title: "A peaceful pavilion surrounded by greenery",
    tagline: "Shaded Comfort Amid Nature",
    description:
      "Whether starting your morning or winding down in the evening, this open-air space invites you to slow down and enjoy the natural surroundings.",
  },
  {
    image: "/images/20230402174323_IMG_7634-01.jpeg",
    title: "Rain Dance Pavilion",
    tagline: "Fun meets nature",
    description:
      "Enjoy a fun-filled water experience beneath cooling sprays, perfect for groups, celebrations, and carefree afternoons.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-10 at 2.31.48 PM.jpeg",
    title: "Room with a view",
    tagline: "Sunlight through the curtains",
    description:
      "A bright room opens toward the lake, with a calm atmosphere for restful mornings.",
  },
  {
    image: "/images/20230402175229_IMG_7650-01.jpeg",
    title: "Resort Gardens and Green Surroundings",
    tagline: "Nature at every turn",
    description:
      "The pool Cross charming pathways and discover beautifullwithin the garden, offering a refreshing pause in a quiet resort setting.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-10 at 2.32.18 PM.jpeg",
    title: "A Calm Poolside Retreat",
    tagline: "Refresh beneath open skies",
    description:
      "Spend unhurried hours by the water, enjoying fresh air, scenic surroundings, and a slower pace of life.",
  },
  {
    image: "/images/20230402182813_IMG_7691-01.jpeg",
    title: "Garden Pavilion",
    tagline: "A quiet corner outdoors",
    description:
      "Nestled among the trees, this open-air pavilion offers a peaceful setting for conversation, relaxation, and unhurried moments.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-10 at 2.32.30 PM.jpeg",
    title: "Open-Air Dining",
    tagline: "Meals surrounded by nature",
    description:
      "Enjoy freshly prepared meals in a relaxed outdoor setting where greenery and fresh air become part of the experience..",
  },
  {
    image: "/images/20230402171030_IMG_7576-01.jpeg",
    title: "Private Cottage Living",
    tagline: "Your home at Lake Gardenia",
    description:
      "Enjoy the comfort of your own space, complete with natural surroundings, peaceful pathways, and a relaxed atmosphere.",
  },
  {
    image: "/images/20230402182725_IMG_7690-01.jpeg",
    title: "Garden walkways",
    tagline: "Paths through green spaces",
    description:
      "Quiet paths wind through the grounds, offering peaceful spots to explore.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((previous) => (previous === 0 ? slides.length - 1 : previous - 1));
  };

  const handleNext = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const whatsappLink =
    "https://wa.me/918976655369?text=Hello%20Lake%20Gardenia%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay.";
  const contentPlacementClass = styles[slide.contentPlacement] || styles.contentCenter;

  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.slide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.image}
                sizes="100vw"
                priority
              />
            </div>
            <div className={styles.overlay} />
          </motion.div>
        </AnimatePresence>

        <div className={styles.controls}>
          <button className={styles.navButton} onClick={handlePrev} aria-label="Previous image">
            &#10094;
          </button>
          <button className={styles.navButton} onClick={handleNext} aria-label="Next image">
            &#10095;
          </button>
        </div>

        <div className={`${styles.content} ${contentPlacementClass}`}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {slide.tagline}
          </motion.p>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          >
            {slide.title}
          </motion.h1>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            {slide.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          >
            <a href={whatsappLink} className="button-primary">
              {slide.ctaLabel || "Book Now"}
            </a>
          </motion.div>
        </div>

        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
