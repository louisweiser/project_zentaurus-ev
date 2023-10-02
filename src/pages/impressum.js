import {
  haftungsbeschränkung,
  haftungsausschluss,
} from "../../public/content/impressum.js";

export default function Impressum() {
  return (
    <>
      <h1>Impressum</h1>
      <h3>§ 1 Haftungsbeschränkung</h3>
      <p>{haftungsbeschränkung}</p>
      <h3>Haftungsausschluss</h3>
      <p>{haftungsausschluss}</p>
    </>
  );
}
