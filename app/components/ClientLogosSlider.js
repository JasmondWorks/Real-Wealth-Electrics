import React from "react";
import styles from "./ClientLogosSlider.module.css";
import Image from "next/image";

const logos = [
  "/assets/images/clients/bayelsa-airport.png",
  "/assets/images/clients/daystar.png",
  // Add your logo paths here
];

export default function ClientLogosSlider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {/* Double the logos for seamless infinite scroll effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image src={logo} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
