import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice, DESKTOP } from "@/contexts/DeviceContext.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { device } = useDevice();
  const [isCardFlipped, setCardFlipStatus] = useState(false);
  const containerReference = useRef();

  const handleCardFlip = () => {
    setCardFlipStatus((prev) => !prev);
  };

  const handleMouseOver = () => setCardFlipStatus(true);
  const handleMouseOut = () => setCardFlipStatus(false);

  const intersectionCallback = (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.animate);
    }
  };

  const flipBackCallback = (entry) => {
    if (!entry.isIntersecting) {
      setCardFlipStatus(false);
    }
  };

  useIntersectionObserver(containerReference, intersectionCallback, {
    threshold: 0.5,
  });

  useIntersectionObserver(
    containerReference,
    (entry) => {
      if (device !== DESKTOP) {
        flipBackCallback(entry);
      }
    },
    {
      threshold: 0,
    }
  );

  useEffect(() => {
    const currentRef = containerReference.current;

    if (device === DESKTOP) {
      currentRef.addEventListener("mouseover", handleMouseOver);
      currentRef.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (device === DESKTOP) {
        currentRef.removeEventListener("mouseover", handleMouseOver);
        currentRef.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [device]);

  return (
    <div
      className={styles["projectCard__container"]}
      ref={containerReference}
      role="presentation"
    >
      <div
        className={styles["projectCard__card"]}
        onClick={device === DESKTOP ? null : handleCardFlip}
      >
        <div
          className={styles["projectCard__card-inner"]}
          style={{
            transform: isCardFlipped ? "rotateY(180deg)" : "rotateY(0)",
          }}
        >
          <div className={styles["projectCard__card-front"]}>
            <div className={styles["projectCard__image-container"]}>
              <Image
                src={"/images" + project.image}
                alt={`Project ${project.name} image`}
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <h2 className={styles["projectCard__text--front"]}>
              {project.name}
            </h2>
          </div>
          <div className={styles["projectCard__card-back"]}>
            <p className={styles["projectCard__text--back"]}>
              {project.description}
            </p>
            <Link
              href={`/projekt/${project.domain}`}
              aria-label={`Mehr Infos zu ${project.name}`}
              role="button"
            >
              <div
                className={styles["projectCard__button-container"]}
                onClick={(e) => {
                  e.stopPropagation();
                  sessionStorage.setItem("scroll", window.scrollY.toString());
                }}
              >
                weitere infos
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
