import React, { useState, useEffect } from "react";
import Image from "next/image";

import Article from "../Article.js";
import TeamCard from "../TeamCard.js";
import SectionTitle from "../SectionTitle.js";
import { useSectionRefs } from "@/pages/_app.js";
import { aboutUsData, images } from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();

  const [isDesktop, setIsDesktop] = useState(null);
  console.log("initial");
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
      console.log("set true");
    } else {
      setIsDesktop(false);
      console.log("set true");
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
        console.log("set true");
      } else {
        setIsDesktop(false);
        console.log("set true");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {isDesktop && isDesktop !== null && desktopVersion}
      {!isDesktop && isDesktop !== null && mobileVersion}
      <article>
        <h3 className={styles.title}>Das Team</h3>
        {teamData.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </article>
    </section>
  );
}
