import React from "react";
import Image from "next/image.js";
import { useDevice, MOBIL, DESKTOP } from "@/contexts/DeviceContext.js";

import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { approachData, images } from "../../../public/content/approach.js";

import styles from "./Approach.module.css";

export default function ApproachContent() {
  const { device, innerWidth, innerHeight } = useDevice();

  if (!innerWidth) {
    return;
  }

  const desktopVersion = (
    <div className={styles["grid-container"]}>
      {approachData.map((article, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.height}>
                <Article
                  key={article.title}
                  title={article.title}
                  text={article.text}
                  colored={true}
                />
              </div>
              <div className={styles.image}>
                <Image
                  src={images[index]}
                  alt={`Image ${index}`}
                  width={innerWidth / 2}
                  height={innerHeight}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.image}>
                <Image
                  src={images[index]}
                  alt={`Image ${index}`}
                  width={innerWidth / 2}
                  height={innerHeight}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.height}>
                <Article
                  key={article.title}
                  title={article.title}
                  text={article.text}
                  colored={true}
                />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const mobileVersion = (
    <>
      {approachData.map((article) => (
        <Article
          key={article.title}
          title={article.title}
          text={article.text}
          colored={true}
        />
      ))}
    </>
  );

  return (
    <section id="section3">
      <SectionTitle title="Vorgehen" />
      {device === DESKTOP && desktopVersion}
      {device === MOBIL && mobileVersion}
    </section>
  );
}
