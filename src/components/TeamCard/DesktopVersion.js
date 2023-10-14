import { useRef, useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";

import styles from "./DesktopVersion.module.css";

export default function TeamCardForDesktop({ member }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useIntersectionObserver(
    cardRef,
    (entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.5 }
  );

  return (
    <div ref={cardRef} className={styles["teamCard__card"]}>
      <div
        className={`${isVisible ? styles.animate : ""} ${
          styles["teamCard__image-container"]
        }`}
      >
        <Image
          src={`/images${member.image}`}
          alt={`Bild von ${member.name}`}
          width={400}
          height={600}
          className={styles["teamCard__image"]}
          priority
        />
      </div>
      <div
        className={`${styles["teamCard__text-container"]} ${
          isVisible ? styles.fadeInUp : ""
        }`}
      >
        <h3 className={styles["padding-bottom"]}>{member.name}</h3>
        <p>{member.details.title}</p>
        <p className={styles["padding-bottom"]}>{member.details.diploma}</p>
        <p>{member.details.mail}</p>
        <p>{member.details.mobil}</p>
      </div>
    </div>
  );
}
