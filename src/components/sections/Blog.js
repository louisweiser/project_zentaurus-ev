import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import { useSectionRefs } from "@/pages/_app.js";

export default function BlogContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section5" ref={sectionRefs[5]}>
      <SectionTitle title="Blog" />
      <ProjectCard project={{ name: "Unser Blog", image: "/blog.jpg" }} />
    </section>
  );
}
