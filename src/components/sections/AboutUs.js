import Article from "../Article.js";

import {
  philosophyText,
  aboutUsText,
  unionText,
} from "../../../public/content/aboutus.js";

import { teamData } from "../../../public/content/team.js";

import TeamCart from "../TeamCart.js";

import styles from "./AboutUs.module.css";

export default function AboutUsContent() {
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
    <section id="bereich1">
      <Article title="Über Uns" text={aboutUsText}></Article>
      <Article title="Der Verein" text={unionText}></Article>
      <Article title="Philosophie" text={philosophyText}></Article>
      <article>
        <h2>Das Team</h2>
        <div className={styles.container}>
          {teamData.map((member) => (
            <TeamCart key={member.name} member={member} />
          ))}
        </div>
      </article>
    </section>
  );
}
