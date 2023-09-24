import LinkContainer from "../LinkContainer";
import { useSectionRefs } from "@/pages/_app.js";

export default function BlogContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section6" ref={sectionRefs[5]}>
      <h1>Blog</h1>
      <LinkContainer project={{ name: "Unser Blog", image: "/blog.jpg" }} />
    </section>
  );
}
