import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

const IMAGES = [
  "/images/img_02.jpg",
  "/images/img_03.jpg",
  "/images/img_04.jpg",
  "/images/img_05.jpg",
  "/images/img_06.jpg",
];

const SWIPE_THRESHOLD = 50;
const TRANSITION_DURATION_SWIPE = "0.2s";
const TRANSITION_DURATION_AUTO = "1s";
const AUTO_SLIDE_INTERVAL = 4000;
const AUTO_SLIDE_TRANSITION_DELAY = 1000;
const SWIPE_TRANSITION_DELAY = 200;

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(
    TRANSITION_DURATION_AUTO
  );

  const length = IMAGES.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent((prev) => (prev + 1) % length);
        setTimeout(
          () => setIsTransitioning(false),
          AUTO_SLIDE_TRANSITION_DELAY
        );
      }
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isTransitioning, length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (!isTransitioning && Math.abs(touchStart - touchEnd) > SWIPE_THRESHOLD) {
      setIsTransitioning(true);
      setTransitionDuration(TRANSITION_DURATION_SWIPE);
      if (touchStart - touchEnd > SWIPE_THRESHOLD) {
        setCurrent((prev) => (prev + 1) % length);
      } else if (touchStart - touchEnd < -SWIPE_THRESHOLD) {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
      }
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDuration(TRANSITION_DURATION_AUTO);
      }, SWIPE_TRANSITION_DELAY);
    }
  };

  return (
    <div
      className={styles["image-slider"]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      aria-live="polite"
    >
      <div className={styles["image-slider__container"]}>
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className={`${styles["image-slider__item"]} ${
              index === current ? styles["image-slider__item--active"] : ""
            }`}
            style={{ transitionDuration }}
            role="img"
            aria-label={`Slide image ${index + 1}`}
            aria-hidden={index !== current}
          >
            <div className={styles["image-slider__image-wrapper"]}>
              <Image
                src={src}
                alt={`Slide image ${index + 1}`}
                fill={true}
                style={{ objectFit: "cover" }}
                loading={"eager"}
              />
              <div className={styles["image-slider__overlay"]}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
