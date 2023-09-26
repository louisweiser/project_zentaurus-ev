import LinkContainer from "../LinkContainer";
import SectionTitle from "../SectionTitle";
import { useSectionRefs } from "@/pages/_app.js";

export default function BlogContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section6" ref={sectionRefs[5]}>
      <SectionTitle title="Blog" />
      <LinkContainer project={{ name: "Unser Blog", image: "/blog.jpg" }} />
    </section>
  );
}
