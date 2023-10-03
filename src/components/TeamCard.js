import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import styles from "./TeamCard.module.css";

const TeamCardFront = ({ member, onShowDetail }) => {
  const frontCardRef = useRef();

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

    if (frontCardRef.current) {
      observer.observe(frontCardRef.current);
    }

    return () => {
      if (frontCardRef.current) {
        observer.unobserve(frontCardRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.popInWrapper} ref={frontCardRef}>
      <button
        className={styles["teamCard__card-front"]}
        onClick={onShowDetail}
        role="button"
      >
        <Image
          src={"/images" + member.image}
          alt={`Bild von ${member.name}`}
          width={200}
          height={300}
          className={styles["teamCard__image"]}
          priority
        />
        <p>{member.name}</p>
        <Image
          src="/svgs/chevronRight.svg"
          alt="open details"
          width={50}
          height={24}
          className={`${styles["teamCard__icon"]} ${styles["position-right"]}`}
          priority
        ></Image>
      </button>
    </div>
  );
};

const TeamCardBack = ({ member, onHideDetail }) => (
  <button
    className={styles["teamCard__card-back"]}
    onClick={onHideDetail}
    role="button"
  >
    <div>
      <h3 className={styles["padding-bottom"]}>{member.name}</h3>
      <p>{member.details.title}</p>
      <p className={styles["padding-bottom"]}>{member.details.diploma}</p>
      <p>{member.details.mail}</p>
      <p>{member.details.mobil}</p>
    </div>
    <Image
      src="/svgs/chevronLeft.svg"
      alt="close details"
      width={50}
      height={24}
      className={`${styles["teamCard__icon"]} ${styles["position-left"]}`}
      priority
    ></Image>
  </button>
);

export default function TeamCard({ member }) {
  const [showDetail, setShowDetail] = useState(false);
  const startTouch = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting && showDetail) {
          setShowDetail(false);
        }
      },
      {
        threshold: 0,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [showDetail]);

  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchMove = e.touches[0].clientX;
    if (startTouch.current - touchMove > 50) {
      setShowDetail(true);
    } else if (touchMove - startTouch.current > 50) {
      setShowDetail(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`${styles["teamCard__card"]} ${
        showDetail ? styles.showDetail : ""
      }`}
    >
      <TeamCardFront member={member} onShowDetail={() => setShowDetail(true)} />
      <TeamCardBack member={member} onHideDetail={() => setShowDetail(false)} />
    </div>
  );
}
