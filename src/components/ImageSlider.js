import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./ImageSlider.module.css";

function ImageSlider() {
  const images = [
    "/images/img_02.jpg",
    "/images/img_03.jpg",
    "/images/img_04.jpg",
    "/images/img_05.jpg",
    "/images/img_06.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent((prev) => (prev + 1) % length);
        setTimeout(() => setIsTransitioning(false), 2000);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const changeImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % length);
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  return (
    <div className={styles.slider} onClick={changeImage}>
      <div className={styles.sliderInner}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Image ${index}`}
                fill={true}
                style={{ objectFit: "cover" }}
                loading={"eager"}
              />
              <div className={styles.overlay}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
