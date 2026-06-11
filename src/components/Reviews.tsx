"use client";

import { motion } from "framer-motion";
import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Rahul M.",
    rating: 5,
    text: "An amazing stay! The swimming pool was definitely the highlight of our trip, and the surrounding nature makes it a perfect weekend getaway.",
  },
  {
    name: "Sneha P.",
    rating: 5,
    text: "The food and dining experience was fantastic. The staff was incredibly friendly, professional, and attentive throughout our entire stay.",
  },
  {
    name: "Vikram S.",
    rating: 5,
    text: "A wonderful boutique retreat. The rooms were spotless, clean, and very comfortable. Loved waking up to the beautiful views.",
  },
  {
    name: "Anjali D.",
    rating: 5,
    text: "Excellent location and amenities. The check-in experience was smooth and the overall value for money is great for couples looking for a quiet escape.",
  }
];

export default function Reviews() {
  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.heading}>Guest Reflections</h2>
        </motion.div>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <p className={styles.name}>— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
