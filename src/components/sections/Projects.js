import Link from "next/link";

import { useSectionRefs } from "@/pages/_app.js";
import LinkContainer from "../LinkContainer";
import SectionTitle from "../SectionTitle";
import { projectData } from "../../../public/content/project";

export default function ProjectsContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section5" ref={sectionRefs[4]}>
      <SectionTitle title="Projekte" />
      {projectData.map((project, index) => (
        <article key={index}>
          <Link
            href={"/projekt/" + project.name.toLowerCase().replace(/ /g, "")}
          >
            <LinkContainer project={project} />
          </Link>
        </article>
      ))}
    </section>
  );
}
