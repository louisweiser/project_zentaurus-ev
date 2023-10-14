import { useState, useRef } from "react";
import Image from "next/image";
import { useDevice, MOBIL } from "@/contexts/DeviceContext.js";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";

import styles from "./TeamCard.module.css";

const TeamCardFront = ({ member, onShowDetail }) => {
  const frontCardRef = useRef();
  const { device } = useDevice();

  useIntersectionObserver(
    frontCardRef,
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.animate);
      }
    },
    { threshold: 0.5 }
  );

  return (
    <div className={styles.popInWrapper} ref={frontCardRef}>
      <button className={styles["teamCard__card-front"]} onClick={onShowDetail}>
        <Image
          src={`/images${member.image}`}
          alt={`Bild von ${member.name}`}
          width={200}
          height={300}
          className={styles["teamCard__image"]}
          priority
        />
        {device === MOBIL && <p>{member.name}</p>}
        <Image
          src="/svgs/chevronRight.svg"
          alt="open details"
          width={50}
          height={24}
          className={`${styles["teamCard__icon"]} ${styles["position-right"]}`}
          priority
        />
      </button>
    </div>
  );
};

const TeamCardBack = ({ member, onHideDetail }) => (
  <button className={styles["teamCard__card-back"]} onClick={onHideDetail}>
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
    />
  </button>
);

export default function TeamCard({ member }) {
  const [showDetail, setShowDetail] = useState(false);
  const startTouch = useRef();
  const cardRef = useRef();

  useIntersectionObserver(
    cardRef,
    (entry) => {
      if (!entry.isIntersecting && showDetail) {
        setShowDetail(false);
      }
    },
    { threshold: 0 }
  );

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
