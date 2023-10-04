import React from "react";
import Image from "next/image";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { useDevice, MOBIL, DESKTOP } from "@/contexts/DeviceContext.js";

import Article from "../Article.js";
import TeamCard from "../TeamCard.js";
import SectionTitle from "../SectionTitle.js";
import { aboutUsData, images } from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();
  const { device } = useDevice();

  const desktopVersion = (
    <div className={styles.container}>
      {aboutUsData.map((article, index) => (
        <React.Fragment key={article.id}>
          {index % 2 === 0 ? (
            <>
              <Article
                title={article.title}
                text={article.text}
                colored={true}
              />
              <div className={styles.image}>
                <Image
                  src={images[index]}
                  alt={`Image ${index}`}
                  width={1000}
                  height={800}
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
                  width={1000}
                  height={1000}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Article
                title={article.title}
                text={article.text}
                colored={true}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const mobileVersion = (
    <>
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

  return (
    <section id="section1" ref={sectionRefs[1]}>
      <SectionTitle title="Über Uns" />
      {device === DESKTOP && desktopVersion}
      {device === MOBIL && mobileVersion}
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
