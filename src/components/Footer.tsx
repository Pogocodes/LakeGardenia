import styles from "./Footer.module.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const whatsappLink = "https://wa.me/918976655369?text=Hello%20Lake%20Gardenia%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay.";
  const emailLink = "mailto:lakegardenia7@gmail.com";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Lake+Gardenia+Pali+Mahagaon+road+Kumbharghar+Maharashtra+410205";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2>Lake Gardenia</h2>
            <p>A Premium Boutique Nature Retreat</p>
          </div>
          <div className={styles.contact}>
            <a href={whatsappLink} className={styles.contactItem}>
              <Phone size={18} />
              <span>+91 8976655369</span>
            </a>
            <a href={emailLink} className={styles.contactItem}>
              <Mail size={18} />
              <span>lakegardenia7@gmail.com</span>
            </a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <MapPin size={18} />
              <span>Lake Gardenia — Pali, Maharashtra</span>
            </a>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Lake Gardenia Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
