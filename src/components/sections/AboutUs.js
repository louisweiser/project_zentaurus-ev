import { useState } from "react";

import Article from "../Article.js";
import TeamCard from "../TeamCard.js";
import SectionTitle from "../SectionTitle.js";
import { useSectionRefs } from "@/pages/_app.js";
import { aboutUsData } from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();

  const [openedMemberId, setOpenedMemberId] = useState(null);

  return (
    <section id="section1" ref={sectionRefs[1]}>
      <SectionTitle title="Über Uns" />
      {aboutUsData.map((article) => (
        <Article
          key={article.id}
          subtitle={article.title}
          text={article.text}
          colored={true}
        />
      ))}
      <article>
        <h3 className={styles.subtitle}>Das Team</h3>
        <div className={styles.container}>
          {teamData.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              isOpen={member.name === openedMemberId}
              onToggle={() => {
                setOpenedMemberId((prevId) =>
                  prevId === member.name ? null : member.name
                );
              }}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
