import Image from "next/image";
import { useRef, useEffect } from "react";

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

  return (
    <div className={styles["component-container"]} ref={containerRef}>
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
  );
}
