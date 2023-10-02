import Article from "@/components/Article.js";
import { impressumData } from "../../public/content/impressum.js";

export default function Impressum() {
  const impressum = impressumData.impressum;
  const haftungsausschluss = impressumData.haftungsausschluss;
  const urheberrecht = impressumData.urheberrecht;

  return (
    <div>
      <article>
        <h1>{impressum.title}</h1>
        {impressum.content.map((abschnitt, index) => (
          <div key={index}>
            <Article title={abschnitt.title} text={abschnitt.text}></Article>
          </div>
        ))}
      </article>
      <article>
        <h1>{haftungsausschluss.title}</h1>
        {haftungsausschluss.content.map((abschnitt, index) => (
          <div key={index}>
            <Article title={abschnitt.title} text={abschnitt.text}></Article>
          </div>
        ))}
      </article>
      <article>
        <h1>{urheberrecht.title}</h1>
        <Article text={urheberrecht.text}></Article>
      </article>
    </div>
  );
}
