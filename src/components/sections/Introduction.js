import ImageSlider from "@/components/ImageSlider";
import Article from "../Article.js";

import { introductionText } from "../../../public/content/aboutus.js";

export default function IntroductionContent() {
  return (
    <section>
      <ImageSlider />
      <Article introduction={true} text={introductionText}></Article>
    </section>
  );
}
