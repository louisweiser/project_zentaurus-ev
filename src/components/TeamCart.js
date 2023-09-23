import React, { useState, useRef } from "react";
import Image from "next/image";

import styles from "./TeamCart.module.css";

export const TeamCard = ({ member, onShowDetail }) => (
  <div className={styles.card}>
    <Image
      src={"/images" + member.image}
      alt={member.name}
      width={200}
      height={300}
    />
    <h3>{member.name}</h3>
    <button className={styles.button} onClick={onShowDetail}>
      <Image
        src="/svgs/chevronRight.svg"
        alt="open details"
        width={50}
        height={24}
        priority
      ></Image>
    </button>
  </div>
);

export const DetailCard = ({ member, onHideDetail }) => (
  <div className={styles.detailCard}>
    <div className={styles.de}>
      <h3>{member.name}</h3>
      <p>{member.details.title}</p>
      <p>{member.details.diploma}</p>
      <p>{member.details.mail}</p>
      <p>{member.details.mobil}</p>
    </div>
    <button className={styles.button} onClick={onHideDetail}>
      <Image
        src="/svgs/chevronLeft.svg"
        alt="close details"
        width={50}
        height={24}
        priority
      ></Image>
    </button>
  </div>
);

const SwipeableTeamCard = ({ member }) => {
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
      className={`${styles.swipeableCard} ${
        showDetail ? styles.showDetail : ""
      }`}
    >
      <TeamCard member={member} onShowDetail={() => setShowDetail(true)} />
      <DetailCard member={member} onHideDetail={() => setShowDetail(false)} />
    </div>
  );
};

export default SwipeableTeamCard;
