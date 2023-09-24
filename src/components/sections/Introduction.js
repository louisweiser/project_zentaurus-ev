import ImageSlider from "@/components/ImageSlider";
import Article from "../Article.js";
import { useSectionRefs } from "@/pages/_app.js";

import { introductionText } from "../../../public/content/aboutus.js";

export default function IntroductionContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section1" ref={sectionRefs[0]}>
      <ImageSlider />
      <Article introduction={true} text={introductionText}></Article>
    </section>
  );
}
