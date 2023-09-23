import Header from "@/components/Header";

import { aboutUsText, unionText } from "../../public/content/home";

import { stringArrayIntoJSX } from "@/utils.js";

export default function ueberuns() {
  const aboutUs = stringArrayIntoJSX(aboutUsText);
  const union = stringArrayIntoJSX(unionText);

  return (
    <div>
      <Header></Header>
      <section>
        <h2>Über Uns</h2>
        {aboutUs}
      </section>
      <section>
        <h2>Der Verein</h2>
        {union}
      </section>
      <section>
        <h2>Das Team</h2>
      </section>
    </div>
  );
}
