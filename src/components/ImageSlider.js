import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

function ImageSlider() {
  const images = [
    "/images/img_01.jpg",
    "/images/img_02.jpg",
    "/images/img_03.jpg",
    "/images/img_04.jpg",
    "/images/img_05.jpg",
    "/images/img_06.jpg",
  ];
  const [offset, setOffset] = useState(-100);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef();

  const length = images.length;

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (offset === 0) {
      setOffset(-100 * length);
    } else if (offset === -100 * (length + 1)) {
      setOffset(-100);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      // Schwellenwert, um zu verhindern, dass kleine Wischbewegungen als Seitenumbruch gewertet werden
      setIsTransitioning(true);
      if (diffX > 0) {
        // Nach rechts wischen
        setOffset((prev) => (prev - 100) % (100 * (length + 2)));
      } else {
        // Nach links wischen
        setOffset((prev) => (prev + 100) % (100 * (length + 2)));
      }
    }
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={styles.sliderInner}
        style={{
          transform: `translateX(${offset}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {[images[length - 1], ...images, images[0]].map((src, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Image ${index}`}
                fill={true}
                style={{ objectFit: "cover" }}
                loading={"eager"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
