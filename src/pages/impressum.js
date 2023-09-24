import Header from "@/components/Header/index.js";

import {
  haftungsbeschränkung,
  haftungsausschluss,
} from "../../public/content/impressum.js";

export default function Impressum() {
  return (
    <>
      <Header></Header>
      <h1>Impressum</h1>
      <h3>§ 1 Haftungsbeschränkung</h3>
      <p>{haftungsbeschränkung}</p>
      <h3>Haftungsausschluss</h3>
      <p>{haftungsausschluss}</p>
    </>
  );
}
