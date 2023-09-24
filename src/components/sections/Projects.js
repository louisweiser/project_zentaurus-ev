import LinkContainer from "../LinkContainer";
import { useSectionRefs } from "@/pages/_app.js";

import { projectData } from "../../../public/content/project";
import Link from "next/link";

export default function ProjectsContent() {
  const sectionRefs = useSectionRefs();

  return (
    <section id="section5" ref={sectionRefs[4]}>
      <h1>Projekte</h1>
      {projectData.map((project, index) => (
        <div key={index}>
          <Link
            href={"/projekt/" + project.name.toLowerCase().replace(/ /g, "")}
          >
            <LinkContainer project={project} />
          </Link>
        </div>
      ))}
    </section>
  );
}
