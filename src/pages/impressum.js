import Header from "@/components/Header";

import {
  contactData,
  haftungsbeschränkung,
  haftungsausschluss,
} from "../../public/content/impressum.js";

export default function Impressum() {
  const renderedData = contactData.map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  return (
    <>
      <Header></Header>
      <h1>Impressum</h1>
      <h3>Kontakt</h3>
      {renderedData}
      <h3>§ 1 Haftungsbeschränkung</h3>
      <p>{haftungsbeschränkung}</p>
      <h3>Haftungsausschluss</h3>
      <p>{haftungsausschluss}</p>
    </>
  );
}
