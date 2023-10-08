import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
export default function BlogContent() {
  return (
    <section id="section5">
      <SectionTitle title="Blog" />
      <ProjectCard project={{ name: "Unser Blog", image: "/blog.jpg" }} />
    </section>
  );
}
