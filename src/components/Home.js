import {
  philosophyText,
  actWithAnminmalsText,
  introductionText,
} from "../../public/content/home";

import Article from "./Article.js";

export default function HomeContent() {
  return (
    <>
      <Article introduction={true} text={introductionText}></Article>
      <Article topic="Philosophie" text={philosophyText}></Article>
      <Article topic="Unser Vorgehen" text={actWithAnminmalsText}></Article>
    </>
  );
}
