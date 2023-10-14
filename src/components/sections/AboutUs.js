import React from "react";
import Image from "next/image";
import { useDevice, MOBIL } from "@/contexts/DeviceContext.js";

import Article from "../Article.js";
import TeamCard from "../TeamCard";
import SectionTitle from "../SectionTitle.js";
import { aboutUsData, images } from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const { device, innerWidth, innerHeight } = useDevice();

  if (!innerWidth) {
    return;
  }

  let content = null;
  if (device === MOBIL) {
    content = (
      <>
        <SectionTitle title="Über Uns" />
        {aboutUsData.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            text={article.text}
            colored={true}
          />
        ))}
      </>
    );
  } else {
    content = (
      <>
        <SectionTitle title="Über Uns" />
        <div className={styles["grid-container"]}>
          {aboutUsData.map((article, index) => (
            <React.Fragment key={article.id}>
              {index % 2 === 0 ? (
                <>
                  <div className={styles.height}>
                    <Article
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
      </>
    );
  }

  return (
    <section id="section1">
      {content}
      <article>
        <h3 className={styles.title}>Das Team</h3>
        <div className={styles["team-container"]}>
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </article>
    </section>
  );
}
