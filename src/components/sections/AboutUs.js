import Article from "../Article.js";
import TeamCard from "../TeamCard.js";
import SectionTitle from "../SectionTitle.js";
import { useSectionRefs } from "@/pages/_app.js";
import { aboutUsData } from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section1" ref={sectionRefs[1]}>
      <SectionTitle title="Über Uns" />
      {aboutUsData.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          text={article.text}
          colored={true}
        />
      ))}
      <article>
        <h3 className={styles.title}>Das Team</h3>
        {teamData.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </article>
    </section>
  );
}
