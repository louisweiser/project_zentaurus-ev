import Article from "../Article.js";

import {
  philosophyText,
  aboutUsText,
  unionText,
} from "../../../public/content/aboutus.js";

import { teamData } from "../../../public/content/team.js";

import TeamCart from "../TeamCart.js";
import SectionTitle from "../SectionTitle.js";

import { useSectionRefs } from "@/pages/_app.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
  const sectionRefs = useSectionRefs();
  function team() {
    const lenght = teamText.length;
    const content = [];
    for (let i = 0; i < lenght; i++) {
      content.push(
        <div key={i}>
          <p>{teamText[i].name}</p>
          <p>{teamText[i].title}</p>
          <p>{teamText[i].diploma}</p>
          <p>{teamText[i].mail}</p>
          <p>{teamText[i].mobil}</p>
        </div>
      );
    }
    return <article>{content}</article>;
  }

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
            <TeamCart key={member.name} member={member} />
          ))}
        </div>
      </article>
    </section>
  );
}
