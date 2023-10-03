import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const [isCardFlipped, setCardFlipStatus] = useState(false);

  const containerReference = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (containerReference.current) {
      observer.observe(containerReference.current);
    }

    return () => {
      if (containerReference.current) {
        observer.unobserve(containerReference.current);
      }
    };
  }, []);

  useEffect(() => {
    const flipBackObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          setCardFlipStatus(false);
        }
      },
      {
        threshold: 0,
      }
    );

    if (containerReference.current) {
      flipBackObserver.observe(containerReference.current);
    }

    return () => {
      if (containerReference.current) {
        flipBackObserver.unobserve(containerReference.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    setCardFlipStatus(!isCardFlipped);
  };

  return (
    <div
      className={styles["projectCard__container"]}
      ref={containerReference}
      role="presentation"
    >
      <div className={styles["projectCard__card"]} onClick={handleCardClick}>
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
