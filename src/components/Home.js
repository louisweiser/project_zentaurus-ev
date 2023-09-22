import {
  philosophyText,
  actWithAnminmalsText,
} from "../../public/content/home";

import { stringArrayIntoJSX } from "@/utils.js";

export default function Home() {
  const phosophy = stringArrayIntoJSX(philosophyText);

  return (
    <>
      <h1>Warum ist das Thema Inklusion für uns so wichtig ?</h1>
      <h1>Jeder Mensch ist einzigartig - </h1>
      <h1>... voneinander lernen bringt uns in der Gemeinschaft weiter! </h1>

      <section>
        <h2>Philosophie</h2>
        {phosophy}
      </section>
      <section>
        <h2>Unser Vorgehen</h2>
        {actWithAnminmalsText}
      </section>
    </>
  );
}
