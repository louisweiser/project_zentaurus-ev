import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import styles from "./TeamCard.module.css";

const FrontCard = ({ member, onShowDetail }) => {
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
      <button className={styles.frontCard} onClick={onShowDetail}>
        <Image
          src={"/images" + member.image}
          alt={member.name}
          width={200}
          height={300}
          className={styles.image}
          priority
        />
        <p>{member.name}</p>
        <Image
          src="/svgs/chevronRight.svg"
          alt="open details"
          width={50}
          height={24}
          className={`${styles.button} ${styles.right}`}
          priority
        ></Image>
      </button>
    </div>
  );
};

const BackCard = ({ member, onHideDetail }) => (
  <button className={styles.backCard} onClick={onHideDetail}>
    <div className={styles.de}>
      <h3>{member.name}</h3>
      <p>{member.details.title}</p>
      <p>{member.details.diploma}</p>
      <p>{member.details.mail}</p>
      <p>{member.details.mobil}</p>
    </div>
    <Image
      src="/svgs/chevronLeft.svg"
      alt="close details"
      width={50}
      height={24}
      className={`${styles.button} ${styles.left}`}
      priority
    ></Image>
  </button>
);

export default function TeamCard({ member, isOpen, onToggle }) {
  const [showDetail, setShowDetail] = useState(false);
  const startTouch = useRef();

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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onClick={onToggle}
      className={`${styles.memberCard} ${
        showDetail && isOpen ? styles.showDetail : ""
      }`}
    >
      <FrontCard member={member} onShowDetail={() => setShowDetail(true)} />
      <BackCard member={member} onHideDetail={() => setShowDetail(false)} />
    </div>
  );
}
