import Article from "../Article.js";
import TeamCard from "../TeamCard.js";
import SectionTitle from "../SectionTitle.js";
import { useSectionRefs } from "@/pages/_app.js";
import {
  philosophyText,
  aboutUsText,
  unionText,
} from "../../../public/content/aboutus.js";
import { teamData } from "../../../public/content/team.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section2" ref={sectionRefs[1]}>
      <SectionTitle title="Über Uns" />
      <Article text={aboutUsText}></Article>
      <Article subtitle="Der Verein" text={unionText}></Article>
      <Article subtitle="Philosophie" text={philosophyText}></Article>
      <article>
        <h3 className={styles.subtitle}>Das Team</h3>
        <div className={styles.container}>
          {teamData.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </article>
    </section>
  );
}
