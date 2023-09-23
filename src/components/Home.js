import {
  philosophyText,
  actWithAnminmalsText,
} from "../../public/content/home";

import { stringArrayIntoJSX } from "@/utils.js";

import styles from "./Home.module.css";

export default function Home() {
  const phosophy = stringArrayIntoJSX(philosophyText);
  const actWithAnminmals = stringArrayIntoJSX(actWithAnminmalsText);

  return (
    <>
      <div className={styles.color}>
        <h1>Warum ist das Thema Inklusion für uns so wichtig ?</h1>
        <h1>Jeder Mensch ist einzigartig - </h1>
        <h1>... voneinander lernen bringt uns in der Gemeinschaft weiter! </h1>
      </div>

      <article>
        <h2>Philosophie</h2>
        <div className={styles.color}>{phosophy}</div>
      </article>
      <article>
        <h2>Unser Vorgehen</h2>
        <div className={styles.color}>{actWithAnminmals}</div>
      </article>
    </>
  );
}
