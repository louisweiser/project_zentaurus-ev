import Article from "../Article.js";

import {
  philosophyText,
  actWithAnminmalsText,
  aboutUsText,
  unionText,
} from "../../../public/content/aboutus.js";

import { teamText } from "../../../public/content/team.js";

export default function AboutUsContent() {
  function team() {
    console.log(teamText);
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
    <section>
      <Article topic="Über Uns" text={aboutUsText}></Article>
      <Article topic="Der Verein" text={unionText}></Article>
      <Article topic="Philosophie" text={philosophyText}></Article>
      <Article topic="Unser Vorgehen" text={actWithAnminmalsText}></Article>
      <article>
        <h2>Das Team</h2>
      </article>
      {team()}
    </section>
  );
}
