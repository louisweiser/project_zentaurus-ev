import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

import styles from "./LinkContainer.module.css";

export default function ProjectLinkContainer({ project }) {
  const containerRef = useRef();

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles["component-container"]} ref={containerRef}>
      <div className={styles.flipCard} onClick={handleClick}>
        <div
          className={styles.flipCardInner}
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}
        >
          <div className={styles.flipCardFront}>
            <div className={styles["image-container"]}>
              <Image
                src={"/images" + project.image}
                alt="Image"
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <h2 className={styles.text}>{project.name}</h2>
          </div>
          <div className={styles.flipCardBack}>
            <p className={styles.textw}>{project.description}</p>
            <div className={styles.but}>
              <Link href={`/projekt/${project.domain}`}>weitere infos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
